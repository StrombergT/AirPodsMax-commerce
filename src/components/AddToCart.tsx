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
            className="text-white text-md p-3 w-96 bg-black mt-4 font-semibold hover:bg-buttonHover ease duration-150 uppercase "
            onClick={handleCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
