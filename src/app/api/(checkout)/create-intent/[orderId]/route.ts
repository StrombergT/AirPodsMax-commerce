import { db } from "@/src/lib/db";
import { NextRequest, NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(
  request: NextRequest,
  { params }: { params: { orderId: string } }
) {
  const { orderId } = params;

  const order = await db.order.findUnique({
    where: {
      id: orderId,
    },
  });

  console.log("Order:", order);

  if (order) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: order.amount * 100,
      currency: "SEK",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    await db.order.update({
      where: {
        id: orderId,
      },
      data: { paymentIntentID: paymentIntent.id },
    });

    return new NextResponse(
      JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      { status: 200 }
    );
  } else {
    return new NextResponse(JSON.stringify({ message: "Order not found!" }), {
      status: 404,
    });
  }
}
