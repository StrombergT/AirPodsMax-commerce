import { db } from "@/src/lib/db";
import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";

export async function GET(
  reg: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const product = await db.product.findUnique({
    where: { id },
    select: { image: true, name: true },
  });

  if (product == null) return notFound;
  const { size } = await fs.stat(`public/${product.image}`);
  const file = await fs.readFile(`public/${product.image}`);

  return new NextResponse(file, {
    headers: {
      "Content-Disposition": `attachment; filename="${product.name} - ${id}.jpg"`,
      "Content-Type": "image/jpeg",
      "Content-Length": String(size),
    },
  });
}
