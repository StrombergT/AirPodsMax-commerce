import { getAuthSession } from "@/src/lib/auth";
import { db } from "@/src/lib/db";
import { Product } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const fetchOrders = async () => {
  const user = await getAuthSession();

  if (!user) {
    return null;
  }

  const orders = await db.order.findMany({
    where: { userId: user?.user?.id },
    include: {
      products: true,
    },
    orderBy: {
      createdDate: "desc",
    },
  });
  return orders;
};
/*
export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.searchParams);
  const userId = searchParams.get("userId");

  let queryData: any = {};
  if (userId) {
    queryData.userId = userId;
  }

  const orders = await db.order.findMany({
    where: queryData,
  });

  return NextResponse.json(orders);
};
*/
export const POST = async (req: NextRequest) => {
  const session = await getAuthSession();

  if (session) {
    try {
      const { products, amount, status, currency, paymentIntentID } =
        await req.json();

      console.log(products);

      if (!session.user.email)
        return NextResponse.json({ message: "User has no email" });
      const user = await db.user.findUnique({
        where: {
          email: session.user.email,
        },
      });

      if (!user) return NextResponse.json({ message: "User not found" });

      const newOrder = await db.order.create({
        data: {
          amount,
          status,
          currency,
          paymentIntentID,
          userId: user.id,
        },
      });

      if (!newOrder)
        return NextResponse.json({ message: "Order was not created" });

      const createOrderItem = async (product: Product) => {
        const ot = await db.orderItem.create({
          data: {
            orderId: newOrder.id,
            name: product.name,
            description: product.description,
            unit_amount: product.unit_amount,
            image: product.image,
            quantity: product.quantity,
          },
        });
        console.log(ot);
      };

      for (const product of products) {
        createOrderItem(product);
      }

      const order = await db.order.findUnique({
        where: { id: newOrder.id },
        include: {
          products: true,
        },
      });

      return NextResponse.json(order, { status: 201 });
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }),
        { status: 500 }
      );
    }
  } else {
    return new NextResponse(
      JSON.stringify({ message: "You are not authenticated!" }),
      { status: 401 }
    );
  }
};
