import { Order, OrderItem } from "@prisma/client";

export interface ExtendedOrder extends Order {
  products: OrderItem[];
}
