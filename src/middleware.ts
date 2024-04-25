import { NextRequest, NextResponse } from "next/server";
import { authenticatePassword } from "./lib/authenticatePassword";

export const config = {
  matcher: "/admin/:path*",
};

export async function middleware(request: NextRequest) {
  if ((await isAuthenticated(request)) === false) {
    return new NextResponse("Unauthorized", {
      status: 401,
      headers: { "WWW-Authenticate": "Basic" },
    });
  }
}

async function isAuthenticated(request: NextRequest) {
  const authHeader =
    request.headers.get("authorization") ||
    request.headers.get("Authorization");

  if (!authHeader) return false;

  const [username, password] = Buffer.from(authHeader.split(" ")[1], "base64")
    .toString()
    .split(":");

  return (
    username === process.env.ADMIN_USERNAME &&
    (await authenticatePassword(
      password,
      process.env.ADMIN_HASHED_PASSWORD as string
    ))
  );
}
