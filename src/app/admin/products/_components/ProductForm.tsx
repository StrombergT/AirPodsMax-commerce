"use client";

import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { useRef, useState } from "react";
import { Textarea } from "@/src/components/ui/textarea";
import { useFormStatus } from "react-dom";
import { PutBlobResult } from "@vercel/blob";
import { AddProduct, updateProduct } from "../../_actions/products";
import { Product } from "@prisma/client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
const ProductFormSchema = z.object({
  name: z.string().min(1, { message: "String must not be empty" }),
  description: z.string().min(1, { message: "Description must not be empty" }),
  price: z.string().regex(/^\d+$/, { message: "Price must be a number" }),
  image: z.string().url().nullable(),
});

type ProductFormFields = z.infer<typeof ProductFormSchema>;

export default function ProductForm({ product }: { product?: Product | null }) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);

  const form = useForm<ProductFormFields>({
    resolver: zodResolver(ProductFormSchema),
    defaultValues: {
      name: product?.name || "",
      description: product?.description || "",
      price: product?.unit_amount.toString() || "",
      image: product?.image || null,
    },
  });

  async function handleFormSubmit(values: ProductFormFields) {
    if (!inputFileRef.current?.files) {
      throw new Error("No file selected");
    }

    const file = inputFileRef.current.files[0];

    const response = await fetch(`/api/images/upload?filename=${file.name}`, {
      method: "POST",
      body: file,
    });

    const newBlob = (await response.json()) as PutBlobResult;

    setBlob(newBlob);

    const data = {
      name: values.name,
      description: values.description,
      unit_amount: parseInt(values.price),
      //image: newBlob.url,
      image:
        "https://img-new.cgtrader.com/items/2748987/41103d308e/apple-airpods-max-in-all-official-colors-3d-model-41103d308e.jpg",
    };
    if (product) {
      await updateProduct(product.id, data);
    } else {
      await AddProduct({}, data);
    }
  }

  console.log(form.watch());
  console.log(form.formState.errors);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)}>
        <div className="space-y-2 bg-[#131416] p-6 rounded-lg text-gray-300">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="airpod max"
                    {...field}
                    className="border-none bg-gray-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input
                    placeholder="5000"
                    {...field}
                    className="border-none bg-gray-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="write something about the product"
                    {...field}
                    className="border-none bg-gray-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <Input
                    name="file"
                    accept="image/*"
                    onChange={(e) =>
                      e.target.files?.[0] !== undefined &&
                      form.setValue(
                        "image",
                        URL.createObjectURL(e.target.files[0])
                      )
                    }
                    ref={inputFileRef}
                    type="file"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <SubmitButton />
      </form>
      {blob && (
        <div>
          Blob url: <a href={blob.url}>{blob.url}</a>
          <img src={blob.url} width={200} height={200} alt="" />
        </div>
      )}
    </Form>
  );

  function SubmitButton() {
    const { pending } = useFormStatus();
    return (
      <Button
        type="submit"
        disabled={pending}
        variant={"secondary"}
        className="mt-5"
      >
        {pending ? "Saving..." : "Save"}
      </Button>
    );
  }
}
