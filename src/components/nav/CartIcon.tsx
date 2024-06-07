import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "../../lib/store";

export default function CartIcon() {
  const cartStore = useCartStore();

  const itemCount = cartStore.cart.reduce((total, item) => {
    const quantity = item.quantity!;
    return total + quantity;
  }, 0);

  return (
    <Link href="/cart" className="flex items-center gap-4 relative">
      <div className="relative">
        <ShoppingBag />
        <div className="bg-[#b1b1b1] w-[16px] h-[16px] absolute rounded-full text-[#171717] flex items-center justify-center text-sm font-medium -top-2 -right-2">
          {itemCount}
        </div>
      </div>
    </Link>
  );
}
