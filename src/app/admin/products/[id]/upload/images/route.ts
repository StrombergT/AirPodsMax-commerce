import { db } from "@/src/lib/db";
import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
/*
export async function GET(
  req: NextRequest,
  { params: { id } }: { params: { id: string } }
): Promise<void | NextResponse> {
  const product = await db.product.findUnique({
    where: { id },
    select: { image: true, name: true },
  });

  if (product == null) return notFound();

  const { size } = await fs.stat(product.name);
  const file = await fs.readFile(product.name);
  const extension = product.name.split(".").pop();

  return new NextResponse(file, {
    headers: {
      "Content-Disposition": `attachment; filename="${product.name}.${extension}"`,
      "Content-Length": size.toString(),
    },
  });
}
*/
