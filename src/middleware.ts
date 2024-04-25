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

async function checkAuthentication(request: NextRequest) {
  const authHeader =
    request.headers.get("authorization") ||
    request.headers.get("Authorization");

  if (!authHeader) return false;

  const [username, password] = Buffer.from(authHeader.split(" ")[1], "base64")
    .toString()
    .split(":");

  console.log(username, password);
}
