"use client";

import { useCartStore } from "@/src/lib/store";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const cartStore = useCartStore();
  const { data: session } = useSession();
  const router = useRouter();

  const totalPrice = cartStore.cart.reduce((acc, item) => {
    return acc + item.quantity! * item.unit_amount!;
  }, 0);

  const handleCheckout = async () => {
    if (!session) {
      router.push("/sign-in");
    } else {
      try {
        console.log(cartStore.cart);
        const res = await fetch("http://localhost:3000/api/orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            products: cartStore.cart,
            amount: totalPrice,
            status: "not payed",
            currency: "",
            paymentIntentID: null,
            userId: session.user.id,
          }),
        });
        const data = await res.json();
        console.log(data);
        router.push(`/pay/${data.id}`);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="h-screen flex flex-col lg:flex-row">
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 lg:px-20 xl:px-40">
        {cartStore.cart.length > 0 ? (
          cartStore.cart.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-2 mb-4 flex items-center justify-between"
            >
              <div className="flex items-center">
                <Image
                  src={item.image || ""}
                  alt={item.name}
                  width={100}
                  height={100}
                />
                <span className="ml-4">{item.name}</span>
              </div>
              <div className="flex items-center">
                <button onClick={() => cartStore.removeProduct(item)}>
                  <Minus />
                </button>
                <span className="text-md w-[30px] flex items-center justify-center">
                  {item.quantity}
                </span>
                <button onClick={() => cartStore.addProduct(item)}>
                  <Plus />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="flex items-center justify-center text-2xl font-bold">
            Your cart is empty
          </p>
        )}
      </div>
      <div className="h-1/2 p-4 bg-gray-200 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 lg:px-20 xl:px-40">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <span className="text-lg">Subtotal items</span>
            <span className="text-lg">{totalPrice} SEK</span>
          </div>
          <div className="flex justify-between">
            <span className="text-lg">Service Cost</span>
            <span className="text-lg">0.00 SEK</span>
          </div>
          <div className="flex justify-between">
            <span className="text-lg">Delivery Cost</span>
            <span className="text-lg text-green-500">FREE!</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between items-center">
            <span className="font-semibold text-2xl">TOTAL</span>
            <span className="font-bold text-xl">{totalPrice} SEK</span>
          </div>
        </div>
        <button
          className="bg-[#171717] text-white p-3 rounded-md w-full mt-4"
          onClick={handleCheckout}
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
}
