import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtected = createRouteMatcher(["/dashboard(.*)", "/account(.*)", "/course(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtected(req)) {
    const { userId } = await auth();
    if (!userId) {
      const signInUrl = new URL("/login", req.url);
      signInUrl.searchParams.set("redirect_url", req.url);
      return NextResponse.redirect(signInUrl);
    }
  }
  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
