import fs from 'fs';
import path from 'path';
import { Lead, ServiceItem, ProductItem, LeadStatus, ThemeConfig } from './types';
import { INITIAL_SERVICES, INITIAL_PRODUCTS, INITIAL_LEADS, INITIAL_THEME } from './data';

const DATA_DIR = path.join(process.cwd(), 'data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');
const SERVICES_FILE = path.join(DATA_DIR, 'services.json');
const PRODUCTS_FILE = path.join(DATA_DIR, 'products.json');
const THEME_FILE = path.join(DATA_DIR, 'theme.json');

function ensureDataFiles() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(LEADS_FILE)) {
    fs.writeFileSync(LEADS_FILE, JSON.stringify(INITIAL_LEADS, null, 2), 'utf-8');
  }

  if (!fs.existsSync(SERVICES_FILE)) {
    fs.writeFileSync(SERVICES_FILE, JSON.stringify(INITIAL_SERVICES, null, 2), 'utf-8');
  }

  if (!fs.existsSync(PRODUCTS_FILE)) {
    fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(INITIAL_PRODUCTS, null, 2), 'utf-8');
  }

  if (!fs.existsSync(THEME_FILE)) {
    fs.writeFileSync(THEME_FILE, JSON.stringify(INITIAL_THEME, null, 2), 'utf-8');
  }
}

// ==========================================
// LEADS REPOSITORY
// ==========================================

export async function getLeads(): Promise<Lead[]> {
  ensureDataFiles();
  try {
    const raw = fs.readFileSync(LEADS_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading leads:', err);
    return INITIAL_LEADS;
  }
}

export async function createLead(data: Omit<Lead, 'id' | 'createdAt' | 'updatedAt' | 'status'> & { status?: LeadStatus }): Promise<Lead> {
  ensureDataFiles();
  const leads = await getLeads();
  const newLead: Lead = {
    ...data,
    id: `LEAD-${1000 + leads.length + 1}`,
    status: data.status || 'New',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  leads.unshift(newLead);
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf-8');
  return newLead;
}

export async function updateLeadStatus(id: string, status: LeadStatus, notes?: string): Promise<Lead | null> {
  ensureDataFiles();
  const leads = await getLeads();
  const index = leads.findIndex(l => l.id === id);
  if (index === -1) return null;

  leads[index].status = status;
  if (notes !== undefined) {
    leads[index].notes = notes;
  }
  leads[index].updatedAt = new Date().toISOString();

  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf-8');
  return leads[index];
}

// ==========================================
// SERVICES REPOSITORY
// ==========================================

export async function getServices(): Promise<ServiceItem[]> {
  ensureDataFiles();
  try {
    const raw = fs.readFileSync(SERVICES_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    return INITIAL_SERVICES;
  }
}

export async function getServiceBySlug(slug: string): Promise<ServiceItem | undefined> {
  const services = await getServices();
  return services.find(s => s.slug === slug);
}

// ==========================================
// PRODUCTS REPOSITORY (FULL CRUD)
// ==========================================

export async function getProducts(query?: { category?: string; search?: string; featured?: boolean }): Promise<ProductItem[]> {
  ensureDataFiles();
  let products: ProductItem[] = [];
  try {
    const raw = fs.readFileSync(PRODUCTS_FILE, 'utf-8');
    products = JSON.parse(raw);
  } catch (err) {
    products = INITIAL_PRODUCTS;
  }

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
  ensureDataFiles();
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
  fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(products, null, 2), 'utf-8');
  return newProduct;
}

export async function updateProduct(id: string, updates: Partial<ProductItem>): Promise<ProductItem | null> {
  ensureDataFiles();
  const products = await getProducts();
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return null;

  const current = products[index];
  const updatedProduct: ProductItem = {
    ...current,
    ...updates,
    id: current.id, // prevent ID change
    updatedAt: new Date().toISOString()
  };

  products[index] = updatedProduct;
  fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(products, null, 2), 'utf-8');
  return updatedProduct;
}

export async function deleteProduct(id: string): Promise<boolean> {
  ensureDataFiles();
  const products = await getProducts();
  const filtered = products.filter(p => p.id !== id);
  if (filtered.length === products.length) return false;

  fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(filtered, null, 2), 'utf-8');
  return true;
}

// ==========================================
// THEME & SITE SETTINGS REPOSITORY
// ==========================================

export async function getThemeConfig(): Promise<ThemeConfig> {
  ensureDataFiles();
  try {
    const raw = fs.readFileSync(THEME_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    return INITIAL_THEME;
  }
}

export async function updateThemeConfig(updates: Partial<ThemeConfig>): Promise<ThemeConfig> {
  ensureDataFiles();
  const current = await getThemeConfig();
  const updated: ThemeConfig = {
    ...current,
    ...updates,
    id: current.id,
    updatedAt: new Date().toISOString()
  };

  fs.writeFileSync(THEME_FILE, JSON.stringify(updated, null, 2), 'utf-8');
  return updated;
}