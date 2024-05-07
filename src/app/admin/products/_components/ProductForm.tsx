"use client";

import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { useRef, useState } from "react";
import { Textarea } from "@/src/components/ui/textarea";
import { Label } from "@/src/components/ui/label";
import { useFormStatus } from "react-dom";
import { PutBlobResult } from "@vercel/blob";
import { AddProduct, updateProduct } from "../../_actions/products";
import { Product } from "@prisma/client";

export default function ProductForm({ product }: { product?: Product | null }) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [formdata, setFormdata] = useState<{
    name: string;
    description: string;
    price: string;
    blob: File | null;
    image: string | null;
  }>({ name: "", description: "", price: "", blob: null, image: null });

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

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
      name: formdata.name,
      description: formdata.description,
      unit_amount: parseInt(formdata.price),
      image: newBlob.url,
    };
    if (product) {
      await updateProduct(product.id, data);
    } else {
      await AddProduct({}, data);
    }
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formdata.name}
            onChange={(e) => setFormdata({ ...formdata, name: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="price">Price In SEK</Label>
          <Input
            type="number"
            id="price"
            name="price"
            value={formdata.price}
            onChange={(e) =>
              setFormdata({ ...formdata, price: e.target.value })
            }
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={formdata.description}
            onChange={(e) =>
              setFormdata({ ...formdata, description: e.target.value })
            }
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="image">Image</Label>
          <input
            name="file"
            accept="image/*"
            onChange={(e) =>
              e.target.files?.[0] !== undefined &&
              setFormdata({ ...formdata, blob: e.target.files?.[0] })
            }
            ref={inputFileRef}
            type="file"
            required
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
    </>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} variant={"secondary"}>
      {pending ? "Saving..." : "Save"}
    </Button>
  );
}
