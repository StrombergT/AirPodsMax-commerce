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

  /**
   *  Handles the checkout process
   *
   * If user not logged in, they will be redirected to sig-in page.
   * if logged in, an order is sent to the server and the user is redirected to payment page.
   *
   * @async
   * @function
   */

  const handleCheckout = async () => {
    if (!session) {
      router.push("/sign-in");
    } else {
      try {
        const res = await fetch("http://localhost:3000/api/orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            products: cartStore.cart,
            amount: totalPrice,
            status: "not paid",
            currency: "",
            email: session.user.email,
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
    <div className="h-screen flex flex-col lg:flex-row mt-16 bg-[#0a0e13] text-gray-300">
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 lg:px-20 xl:px-40">
        {cartStore.cart.length > 0 ? (
          cartStore.cart.map((item) => (
            <div
              key={item.id}
              className="border border-[#27303f] rounded-lg p-2 mb-4 flex flex-col sm:flex-row items-center justify-between"
            >
              <div className="flex flex-col sm:flex-row items-center">
                <Image
                  src={item.image || ""}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="w-full sm:w-32 h-auto"
                />
                <span className="ml-4 mt-2 sm:mt-0">{item.name}</span>
              </div>
              <div className="flex items-center mt-2 sm:mt-0">
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
          <p className="flex items-center justify-center text-2xl font-bold text-gray-600">
            Your cart is empty
          </p>
        )}
      </div>
      <div className="h-1/2 p-4 bg-[#010409] flex flex-col gap-4 justify-center lg:h-full lg:w-1/2 lg:px-20 xl:px-40">
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
          className="hover:border-white/40 flex items-center justify-center rounded-full border border-transparent bg-violet-600 px-16 py-3 text-center text-lg font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 w-full sm:w-auto md:w-64 lg:w-96"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
