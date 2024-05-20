/*import { db } from "@/src/lib/db";
import { NextResponse } from "next/server";

export const PUT = async ({
  params,
}: {
  params: { paymentIntentID: string };
}) => {
  const { paymentIntentID } = params;

  try {
    await db.order.update({
      where: {
        paymentIntentID: paymentIntentID,
      },
      data: { status: "Being prepared!" },
    });
    return new NextResponse(
      JSON.stringify({ message: "Order has been updated" }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};*/
