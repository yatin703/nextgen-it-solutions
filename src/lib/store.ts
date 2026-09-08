import fs from 'fs';
import path from 'path';
import os from 'os';
import { Lead, ServiceItem, ProductItem, LeadStatus, ThemeConfig } from './types';
import { INITIAL_SERVICES, INITIAL_PRODUCTS, INITIAL_LEADS, INITIAL_THEME } from './data';

const IS_SERVERLESS = Boolean(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME);

// On Vercel / serverless, write files to the writable /tmp directory; in local dev, use ./data
const DATA_DIR = IS_SERVERLESS
  ? path.join(os.tmpdir(), 'nextgen-data')
  : path.join(process.cwd(), 'data');

const BUNDLED_DATA_DIR = path.join(process.cwd(), 'data');

const LEADS_FILE = path.join(DATA_DIR, 'leads.json');
const SERVICES_FILE = path.join(DATA_DIR, 'services.json');
const PRODUCTS_FILE = path.join(DATA_DIR, 'products.json');
const THEME_FILE = path.join(DATA_DIR, 'theme.json');

// In-memory cache to preserve state during serverless function runtime
let cachedLeads: Lead[] | null = null;
let cachedProducts: ProductItem[] | null = null;
let cachedServices: ServiceItem[] | null = null;
let cachedTheme: ThemeConfig | null = null;

function safeWriteJson(filePath: string, data: any) {
  try {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.warn(`[Storage Info] Ephemeral/read-only filesystem notice: Storing in memory. Details:`, err);
  }
}

function safeReadJson<T>(primaryFile: string, fallbackFileName: string, initialFallback: T): T {
  try {
    if (fs.existsSync(primaryFile)) {
      const raw = fs.readFileSync(primaryFile, 'utf-8');
      return JSON.parse(raw);
    }
  } catch (err) {
    // Skip to bundled check
  }

  try {
    const bundledFile = path.join(BUNDLED_DATA_DIR, fallbackFileName);
    if (fs.existsSync(bundledFile)) {
      const raw = fs.readFileSync(bundledFile, 'utf-8');
      return JSON.parse(raw);
    }
  } catch (err) {
    // Fallback to static code
  }

  return initialFallback;
}

// ==========================================
// LEADS REPOSITORY
// ==========================================

export async function getLeads(): Promise<Lead[]> {
  if (cachedLeads) return cachedLeads;
  cachedLeads = safeReadJson<Lead[]>(LEADS_FILE, 'leads.json', INITIAL_LEADS);
  return cachedLeads;
}

export async function createLead(data: Omit<Lead, 'id' | 'createdAt' | 'updatedAt' | 'status'> & { status?: LeadStatus }): Promise<Lead> {
  const leads = await getLeads();
  const newLead: Lead = {
    ...data,
    id: `LEAD-${1000 + leads.length + 1}`,
    status: data.status || 'New',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  leads.unshift(newLead);
  cachedLeads = leads;
  safeWriteJson(LEADS_FILE, leads);
  return newLead;
}

export async function updateLeadStatus(id: string, status: LeadStatus, notes?: string): Promise<Lead | null> {
  const leads = await getLeads();
  const index = leads.findIndex(l => l.id === id);
  if (index === -1) return null;

  leads[index].status = status;
  if (notes !== undefined) {
    leads[index].notes = notes;
  }
  leads[index].updatedAt = new Date().toISOString();

  cachedLeads = leads;
  safeWriteJson(LEADS_FILE, leads);
  return leads[index];
}

// ==========================================
// SERVICES REPOSITORY
// ==========================================

export async function getServices(): Promise<ServiceItem[]> {
  if (cachedServices) return cachedServices;
  cachedServices = safeReadJson<ServiceItem[]>(SERVICES_FILE, 'services.json', INITIAL_SERVICES);
  return cachedServices;
}

export async function getServiceBySlug(slug: string): Promise<ServiceItem | undefined> {
  const services = await getServices();
  return services.find(s => s.slug === slug);
}

// ==========================================
// PRODUCTS REPOSITORY (FULL CRUD)
// ==========================================

export async function getProducts(query?: { category?: string; search?: string; featured?: boolean }): Promise<ProductItem[]> {
  if (!cachedProducts) {
    cachedProducts = safeReadJson<ProductItem[]>(PRODUCTS_FILE, 'products.json', INITIAL_PRODUCTS);
  }

  const products = cachedProducts;
  if (!query) return products;

  return products.filter((item) => {
    const matchCategory = !query.category || query.category === 'All' || item.category.toLowerCase() === query.category.toLowerCase();
    const matchFeatured = query.featured === undefined || item.featured === query.featured;
    const matchSearch = !query.search || 
      item.name.toLowerCase().includes(query.search.toLowerCase()) ||
      item.brand.toLowerCase().includes(query.search.toLowerCase()) ||
      item.modelNumber.toLowerCase().includes(query.search.toLowerCase()) ||
      item.shortDesc.toLowerCase().includes(query.search.toLowerCase());

    return matchCategory && matchFeatured && matchSearch;
  });
}

export async function getProductById(id: string): Promise<ProductItem | undefined> {
  const products = await getProducts();
  return products.find(p => p.id === id);
}

export async function getProductBySlug(slug: string): Promise<ProductItem | undefined> {
  const products = await getProducts();
  return products.find(p => p.slug === slug);
}

export async function createProduct(data: Omit<ProductItem, 'id' | 'createdAt' | 'updatedAt'>): Promise<ProductItem> {
  const products = await getProducts();
  
  // Generate safe slug
  const baseSlug = data.slug || data.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  let finalSlug = baseSlug;
  let counter = 1;
  while (products.some(p => p.slug === finalSlug)) {
    finalSlug = `${baseSlug}-${counter++}`;
  }

  const newProduct: ProductItem = {
    ...data,
    id: `prod-${Date.now()}`,
    slug: finalSlug,
    isAvailable: data.isAvailable !== undefined ? data.isAvailable : true,
    featured: data.featured || false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  products.unshift(newProduct);
  cachedProducts = products;
  safeWriteJson(PRODUCTS_FILE, products);
  return newProduct;
}

export async function updateProduct(id: string, updates: Partial<ProductItem>): Promise<ProductItem | null> {
  const products = await getProducts();
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return null;

  const current = products[index];
  const updatedProduct: ProductItem = {
    ...current,
    ...updates,
    id: current.id,
    updatedAt: new Date().toISOString()
  };

  products[index] = updatedProduct;
  cachedProducts = products;
  safeWriteJson(PRODUCTS_FILE, products);
  return updatedProduct;
}

export async function deleteProduct(id: string): Promise<boolean> {
  const products = await getProducts();
  const filtered = products.filter(p => p.id !== id);
  if (filtered.length === products.length) return false;

  cachedProducts = filtered;
  safeWriteJson(PRODUCTS_FILE, filtered);
  return true;
}

// ==========================================
// THEME & SITE SETTINGS REPOSITORY
// ==========================================

export async function getThemeConfig(): Promise<ThemeConfig> {
  if (cachedTheme) return cachedTheme;
  cachedTheme = safeReadJson<ThemeConfig>(THEME_FILE, 'theme.json', INITIAL_THEME);
  return cachedTheme;
}

export async function updateThemeConfig(updates: Partial<ThemeConfig>): Promise<ThemeConfig> {
  const current = await getThemeConfig();
  const updated: ThemeConfig = {
    ...current,
    ...updates,
    id: current.id,
    updatedAt: new Date().toISOString()
  };

  cachedTheme = updated;
  safeWriteJson(THEME_FILE, updated);
  return updated;
}
