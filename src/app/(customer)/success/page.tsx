"use client";
import { useCartStore } from "@/src/lib/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const SuccessPage = () => {
  const router = useRouter();
  const cartStore = useCartStore();

  useEffect(() => {
    setTimeout(() => {
      router.push("/orders");
    }, 5000);
  });

  return (
    <>
      <div className="min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-15rem)] flex items-center justify-center text-center text-2xl text-green-700">
        <p className="max-w-[600px]">
          Payment successful. You are being redirected to the orders page.
          Please do not close the page.
        </p>
      </div>
    </>
  );
};

export default SuccessPage;
