"use client";
import { toast } from "react-toastify";
import { ProductType } from "../types/ProductType";
import { useCartStore } from "../lib/store";

export default function AddToCart({ product }: { product: ProductType }) {
  const { addProduct } = useCartStore();

  const handleCart = () => {
    addProduct({
      id: product.id,
      name: product.name,
      image: product.image || "",
      unit_amount: product.unit_amount,
      quantity: product.quantity,
    });
    toast.success(`Added ${product.name} to cart`);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="flex justify-between w-full p-3 ">
          <button
            className="text-white text-md p-3 w-80 bg-black mt-4 font-semibold hover:bg-buttonHover ease duration-150 uppercase "
            onClick={handleCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
