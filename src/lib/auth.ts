export const AUTH_COOKIE_NAME = 'nextgen_admin_session';

export function getAdminUsername(): string {
  return process.env.ADMIN_USERNAME || 'admin';
}

export function getAdminPassword(): string {
  return process.env.ADMIN_PASSWORD || 'NextGen@2025';
}

export async function getExpectedToken(): Promise<string> {
  const username = getAdminUsername();
  const password = getAdminPassword();
  const secret = process.env.ADMIN_SECRET || 'nextgen-secure-auth-salt-v1';
  
  const data = new TextEncoder().encode(`${username}:${password}:${secret}`);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

export function verifyCredentials(username: string, pass: string): boolean {
  const expectedUser = getAdminUsername();
  const expectedPass = getAdminPassword();
  return username.trim() === expectedUser && pass === expectedPass;
}
