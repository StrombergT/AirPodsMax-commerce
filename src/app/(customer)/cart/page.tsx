"use client";

import { useCartStore } from "@/src/lib/store";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { H2, SPAN } from "@/src/components/ui/Text/TextComponent";
import { Button } from "@/src/components/ui/button/button";

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
      sessionStorage.setItem("redirectAfterLogin", window.location.href);
      router.push("/sign-in");
    } else {
      try {
        const res = await fetch(
          process.env.NEXT_PUBLIC_API_BASE_URL + "/api/orders",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              products: cartStore.cart,
              amount: totalPrice,
              status: "not paid",
              currency: "",
              email: session.user.email,
            }),
          }
        );
        const data = await res.json();
        console.log(data);
        router.push(`/pay/${data.id}`);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="min-h-screen flex flex-col lg:flex-row mt-16 bg-[#0a0e13] text-gray-300">
      <div className="flex-1 p-4 flex flex-col justify-center overflow-auto">
        {cartStore.cart.length > 0 ? (
          cartStore.cart.map((item) => (
            <div
              key={item.id}
              className="border border-[#27303f] rounded-lg p-4 mb-4 flex flex-col sm:flex-row items-center justify-between"
            >
              <div className="flex flex-col sm:flex-row items-center sm:gap-4">
                <Image
                  src={item.image || ""}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="w-full sm:w-32 lg:w-48 h-auto rounded-lg"
                />
                <span className="mt-2 sm:mt-0 text-center">{item.name}</span>
              </div>
              <div className="flex items-center mt-2 sm:mt-0 gap-2">
                <button
                  onClick={() => cartStore.removeProduct(item)}
                  className="p-2 bg-gray-700 rounded-full hover:bg-gray-600"
                >
                  <Minus />
                </button>
                <span className="text-md w-[30px] flex items-center justify-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => cartStore.addProduct(item)}
                  className="p-2 bg-gray-700 rounded-full hover:bg-gray-600"
                >
                  <Plus />
                </button>
              </div>
            </div>
          ))
        ) : (
          <H2 variant="shopping-cart">Your cart is empty</H2>
        )}
      </div>
      <div className="flex-1 p-4 bg-[#010409] flex flex-col gap-4 justify-center">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <SPAN>Subtotal items</SPAN>
            <SPAN>{totalPrice} SEK</SPAN>
          </div>
          <div className="flex justify-between">
            <SPAN>Service Cost</SPAN>
            <SPAN>0.00 SEK</SPAN>
          </div>
          <div className="flex justify-between">
            <SPAN>Delivery Cost</SPAN>
            <SPAN className="text-green-500">FREE!</SPAN>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between items-center">
            <SPAN variant="secondary">TOTAL</SPAN>
            <SPAN variant="secondary">{totalPrice} SEK</SPAN>
          </div>
        </div>
        <Button
          variant="primary"
          onClick={handleCheckout}
          className="lg:w-full p-4 xl:p-6 uppercase text-lg xl:text-xl font-bold"
        >
          Checkout
        </Button>
      </div>
    </div>
  );
}
