"use server";
import { db } from "@/src/lib/db";
import { z } from "zod";
import fs from "fs/promises";
import { notFound, redirect } from "next/navigation";
import { File } from "buffer";

const imageSchema = z.instanceof(File, { message: "Required" });

const addSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  price: z.coerce.number().int().min(1),
  image: imageSchema.refine((file) => file.size > 0, "Required"),
});

export async function AddProduct(prevState: unknown, formData: FormData) {
  const result = addSchema.safeParse(Object.fromEntries(formData.entries()));
  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

  await fs.mkdir("public/products", { recursive: true });
  const image = `/products/${crypto.randomUUID()}-${data.image.name}`;
  await fs.writeFile(
    `public${image}`,
    Buffer.from(await data.image.arrayBuffer())
  );

  await db.product.create({
    data: {
      name: data.name,
      description: data.description,
      unit_amount: data.price,
      image,
    },
  });

  redirect("/admin/products");
}

export async function RemoveProduct(id: string) {
  const product = await db.product.delete({ where: { id } });

  if (product == null) return notFound();

  await fs.unlink(`./public${product.image}`);
}
