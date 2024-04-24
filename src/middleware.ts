import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: "/admin/:path*",
};

export async function middleware(request: NextRequest) {
  const isAuthenticated = await checkAuthentication(request);

  if (!isAuthenticated) {
    return new NextResponse("authentication failed", {
      status: 401,
      headers: { "WWW-Authenticate": "Basic" },
    });
  }
}

async function checkAuthentication(request: NextRequest): Promise<boolean> {
  return Promise.resolve(false);
}
