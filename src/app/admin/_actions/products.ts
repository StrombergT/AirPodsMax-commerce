"use server";
import { db } from "@/src/lib/db";
import { notFound, redirect } from "next/navigation";

export async function AddProduct(prevState: unknown, formData: any) {
  await db.product.create({
    data: formData,
  });

  redirect("/admin/products");
}

export async function updateProduct(id: string, formData: any) {
  const product = await db.product.findUnique({
    where: { id },
  });

  if (product == null) return notFound();

  await db.product.update({
    where: { id },
    data: formData,
  });
  redirect("/admin/products");
}

export async function RemoveProduct(id: string) {
  const product = await db.product.delete({ where: { id } });

  if (product == null) return notFound();
}
