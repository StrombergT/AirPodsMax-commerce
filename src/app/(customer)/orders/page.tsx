import Container from "@/src/components/Container";
import Image from "next/image";
import React from "react";
import { fetchOrders } from "../../api/orders/route";

export default async function OrderPage() {
  const orders = await fetchOrders();

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
      <div className="flex flex-col items-center justify-center h-screen m-auto gap-5 w-[500px]">
        <Image
          alt="done"
          height={150}
          width={150}
          src={"/box.png"}
          priority={true}
        />
        <h1 className="my-5 flex justify-between text-2xl">
          No orders placed.
        </h1>
      </div>
    );
  }

  return (
    <Container>
      <div className="flex justify-center items-center m-auto py-5 h-full p-2">
        <div className="flex flex-col justify-center h-full m-auto gap-3 w-[1000px]">
          {orders.map((order) => (
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
                {order.products.map((product) => (
                  <div key={product.id} className="flex items-center gap 5">
                    <span className="font-semibold pr-1">Product:</span>
                    <span className="flex-1">{product.name}</span>

                    <span className="font-semibold pr-1">Price:</span>
                    <span className="flex-1">{product.unit_amount} SEK</span>

                    <span className="font-semibold pr-1">Quantity:</span>
                    <span className="flex-1">{product.quantity}</span>
                    <div className="w-[60px]">
                      <Image
                        src={product.image || ""}
                        width={60}
                        height={60}
                        alt={product.name}
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
