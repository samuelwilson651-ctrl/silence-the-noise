import { NextRequest, NextResponse } from "next/server";

const protectedPaths = ["/dashboard", "/account", "/course"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Check if this is a protected route
  const isProtected = protectedPaths.some((path) =>
    pathname.startsWith(path)
  );

  if (isProtected) {
    // Check for Clerk session token cookie
    const sessionToken =
      req.cookies.get("__session")?.value ||
      req.cookies.get("__client_uat")?.value;

    if (!sessionToken) {
      const signInUrl = new URL("/login", req.url);
      signInUrl.searchParams.set("redirect_url", req.url);
      return NextResponse.redirect(signInUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
