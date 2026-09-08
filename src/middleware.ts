import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getExpectedToken, AUTH_COOKIE_NAME } from './lib/auth';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/admin')) {
    const sessionCookie = request.cookies.get(AUTH_COOKIE_NAME)?.value;
    const expectedToken = await getExpectedToken();
    const isAuthenticated = Boolean(sessionCookie && sessionCookie === expectedToken);

    // If already logged in and visiting /admin/login, redirect to /admin dashboard
    if (pathname === '/admin/login') {
      if (isAuthenticated) {
        return NextResponse.redirect(new URL('/admin', request.url));
      }
      return NextResponse.next();
    }

    // If unauthenticated on protected /admin route, redirect to /admin/login
    if (!isAuthenticated) {
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
