// import { NextRequest, NextResponse } from "next/server";

export { default } from "next-auth/middleware";

// We can use the middleware that we have in authNext
/* 
export default function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/new-page", request.url));
}
  */

// Execute the middleware in a specific path
export const config = {
  // *: zero or more
  // +: one or more
  // ?: zero or one
  matcher: ["/dashboard/:path*"],
};
