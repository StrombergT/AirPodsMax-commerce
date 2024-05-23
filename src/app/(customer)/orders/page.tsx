"use client";
import Container from "@/src/components/Container";
import Image from "next/image";
import React, { useEffect, useState } from "react";
//import { fetchOrders } from "../../api/orders/route";
import { useSession } from "next-auth/react";
import { Order } from "@prisma/client";
import { ExtendedOrder } from "@/src/types/ExtendedOrder";

export default function OrderPage() {
  const [orders, setOrders] = useState<ExtendedOrder[]>([]);
  //const { data: session } = useSession();
  // const session = await // get session
  // const r = await fetch(
  //  `http://localhost:3000/api/user?email=${session?.user.email}`
  //);
  //const user = await r.json();

  // const res = await fetch(`http://localhost:3000/api/orders?userId=${user.id}`);
  // const orders = await res.json();
  //const res = await fetch(`http://localhost:3000/api/orders`, {
  //method: "GET",
  //});
  // const orders: ExtendedOrder[] = (await res.json()) || [];

  useEffect(() => {
    const fetchOrders = () => {
      fetch(`http://localhost:3000/api/orders`, {
        method: "GET",
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Not ok");
          }
          return res.json();
        })
        .then((data) => {
          setOrders(data || []);
        })
        .catch((error) => {
          console.error("error fetching", error);
        });
    };
    fetchOrders();
  }, []);

  if (orders === null) {
    return (
      <div className="flex flex-col gap-5 items-center justify-center h-screen text-center m-auto">
        <Image
          alt="done"
          height={200}
          width={200}
          src={"/login.png"}
          priority={true}
          className="w-auto"
        />
        <h1 className="text-xl">You need to be logged in to see your orders</h1>
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
          src={"/box.png"}
          priority={true}
        />
        <h1 className="my-5 flex justify-between text-2xl ">
          No orders placed.
        </h1>
      </div>
    );
  }

  return (
    <Container>
      <div className="flex justify-center items-center m-auto py-5 h-full p-2 mt-16">
        <div className="flex flex-col justify-center h-full m-auto gap-3 w-[1000px] mt-16">
          {orders &&
            orders.map((order) => (
              <div key={order.id} className="rounded-sm p-8 my-4  bg-[#fafafa]">
                <div className="flex justify-between mb-5 border-b border-[#d9d9d9]">
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
                      <div className="w-[60px]">
                        <Image
                          src={item.image || ""}
                          width={60}
                          height={60}
                          alt={item.name}
                          priority={true}
                          className="w-full object-fill"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="flex justify-between mt-5 pt-5 border-t border-[#d9d9d9]">
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
