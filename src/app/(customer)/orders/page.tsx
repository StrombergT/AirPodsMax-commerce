"use client";
import Container from "@/src/components/layout/Container";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { ExtendedOrder } from "@/src/types/ExtendedOrder";
import { useCartStore } from "@/src/lib/store";
import { H1 } from "@/src/components/ui/Text/TextComponent";

export default function OrderPage() {
  const [orders, setOrders] = useState<ExtendedOrder[]>([]);
  const { data: session } = useSession();
  const { clearCart } = useCartStore();
  /**
   * Fetches the orders for the logged-in user.
   *
   * This effect runs once when the component is mounted and fetches the orders
   * from the server, setting them in the component state.
   */

  useEffect(() => {
    if (session) {
      fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "/api/orders", {
        method: "GET",
        cache: "no-cache",
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Not ok");
          }
          return res.json();
        })
        .then((data) => {
          setOrders(data || []);
          console.log(data);
        })
        .catch((error) => {
          console.error("Error fetching orders", error);
        });
    }
  }, [session]);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  if (!session) {
    return (
      <div className="flex flex-col gap-5 items-center justify-center h-screen text-center m-auto">
        <Image
          alt="login"
          height={200}
          width={200}
          src={"/img/login.png"}
          priority={true}
          className="w-auto"
        />
        <H1>You need to be logged in to see your orders</H1>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen m-auto gap-5 w-[500px] text-gray-200">
        <Image
          alt="done"
          height={150}
          width={150}
          src={"/img/box.png"}
          priority={true}
          className="bg-gray-200 rounded-2xl"
        />
        <h1 className="my-5 flex justify-between text-2xl ">
          No orders placed.
        </h1>
      </div>
    );
  }

  return (
    <Container>
      <div className="flex justify-center items-center m-auto py-5 h-full p-2 mt-16 text-gray-300">
        <div className="flex flex-col justify-center h-full m-auto gap-3 w-[1000px] mt-16">
          {orders !== null &&
            orders.map((order) => (
              <div key={order.id} className="rounded-sm p-8 my-4  bg-[#0a0e13]">
                <div className="flex justify-between mb-5 border-b border-[#27303f]">
                  <span className="pb-5">
                    <span className="font-semibold pr-1">Order reference:</span>{" "}
                    {order.id}
                  </span>

                  <span className="pb-5">
                    <span className="font-semibold pr-1">Date:</span>
                    {new Date(order.createdDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-5 text-sm">
                  {order.products.map((item) => (
                    <div key={item.id} className="flex items-center gap 5">
                      <span className="font-semibold pr-1">Product:</span>
                      <span className="flex-1">{item.name}</span>

                      <span className="font-semibold pr-1">Price:</span>
                      <span className="flex-1">{item.unit_amount} SEK</span>

                      <span className="font-semibold pr-1">Quantity:</span>
                      <span className="flex-1">{item.quantity}</span>
                      <div className="w-[100px]">
                        <Image
                          src={item.image || ""}
                          width={100}
                          height={100}
                          alt={item.name}
                          priority={true}
                          className="w-full object-fill"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="flex justify-between mt-5 pt-5 border-t border-[#27303f]">
                  <span className="font-semibold">Total:</span>
                  <span> {order.amount} SEK</span>
                </p>
              </div>
            ))}
        </div>
      </div>
    </Container>
  );
}
