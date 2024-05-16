import { authOptions } from "@/src/lib/auth";
import { db } from "@/src/lib/db";
import { getServerSession } from "next-auth";

export const fetchOrders = async () => {
  const user = await getServerSession(authOptions);

  if (!user) {
    return null;
  }

  const orders = await db.order.findMany({
    where: { userId: user?.user?.id },
    include: { products: true },
  });
  return orders;
};
