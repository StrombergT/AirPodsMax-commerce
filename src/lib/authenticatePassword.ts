export async function authenticatePassword(
  password: string,
  hashedPassword: string
) {
  return (await hashPassword(password)) === hashedPassword;
}

async function hashPassword(password: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-512", data);
  const hashArray = new Uint8Array(hashBuffer);
  const hashBase64 = Buffer.from(hashArray).toString("base64");
  return hashBase64;
}
