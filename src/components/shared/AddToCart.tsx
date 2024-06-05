"use client";
import { toast } from "react-toastify";
import { useCartStore } from "../../lib/store";
import { Product } from "@prisma/client";
import { Button } from "../ui/button/button";

export default function AddToCart({ product }: { product: Product }) {
  const { addProduct } = useCartStore();

  const handleCart = () => {
    addProduct({
      ...product,
      quantity: 1,
    });
    toast.success(`Added ${product.name} to cart`);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="flex justify-between w-full p-3 xl:w-full">
          <Button
            variant="addToCart"
            onClick={handleCart}
            className="py-6 w-full items-center justify-center flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}
