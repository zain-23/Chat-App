import { NextRequest, NextResponse } from 'next/server';
import { AUTH_ROUTES, PRIVATE_ROTES, PUBLIC_ROUTES } from './lib/constant';
import { cookies } from 'next/headers';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const token = (await cookies()).get('chat_access_token')?.value;

  const isAuthRoute = AUTH_ROUTES.includes(pathname);
  const isPrivateRoutes = PRIVATE_ROTES.includes(pathname);
  const isPublicRoutes = PUBLIC_ROUTES.includes(pathname);

  if (!token && isPrivateRoutes) {
    const url = new URL('/sign-in', request.nextUrl);
    return NextResponse.redirect(url);
  }

  if (token && (isAuthRoute || isPublicRoutes)) {
    const url = new URL('/chat', request.nextUrl);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
  ]
};
