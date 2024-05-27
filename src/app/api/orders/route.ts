import { getAuthSession } from "@/src/lib/auth";
import { db } from "@/src/lib/db";
import { Product } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

/**
 * Handler for GET request to fetch orders for authenticated user
 * @returns {Promise<NextResponse>} A Promise tht resolves to the response object
 * with the orders data or an error
 */

export async function GET(): Promise<NextResponse> {
  const sessionUser = await getAuthSession();

  if (!sessionUser || !sessionUser.user || !sessionUser.user.email) {
    return NextResponse.json({
      message: "Sign in to be able to make an order",
    });
  }

  const user = await db.user.findUnique({
    where: {
      email: sessionUser.user.email,
    },
  });

  if (!user) {
    return NextResponse.json({ message: "user not found" });
  }

  const orders =
    (await db.order.findMany({
      where: { userId: user?.id },
      include: {
        products: true,
      },
      orderBy: {
        createdDate: "desc",
      },
    })) || [];
  return NextResponse.json(orders);
}

/**
 * POST request handler to create a new order
 * @param {NextRequest} req - Containing order data
 * @returns {Promise<NextResponse>} A Promise tht resolves to the response object
 * with the orders data or an error
 */
export async function POST(req: NextRequest): Promise<NextResponse> {
  const session = await getAuthSession();

  if (session) {
    try {
      const { products, amount, status, currency, paymentIntentID } =
        await req.json();

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
            productId: product.id,
          },
        });
      };

      for (const product of products) {
        await createOrderItem(product);
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
}
