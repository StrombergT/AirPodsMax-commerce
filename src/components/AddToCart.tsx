"use client";
import { toast } from "react-toastify";
import { useCartStore } from "../lib/store";
import { Product } from "@prisma/client";

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
        <div className="flex justify-between w-full p-3 ">
          <button
            className="hover:border-white/40 flex items-center justify-center rounded-full border border-transparent bg-violet-600 px-16 py-3 text-center text-lg font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 w-full sm:w-auto md:w-64 lg:w-96"
            onClick={handleCart}
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
          </button>
        </div>
      </div>
    </div>
  );
}
