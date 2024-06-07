"use client";
import { useState } from "react";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { useSession } from "next-auth/react";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Products", url: "/products" },
  { id: 3, title: "Contact", url: "/contact" },
  { id: 4, title: "Orders", url: "/orders" },
];

export default function Menu() {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <div className="flex">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent
          side="top"
          style={{ backgroundColor: "#171717", color: "#fff" }}
        >
          <div className="grid grid-cols-1 gap-4 ml-2 mt-2 text-gray-500">
            {links.map((item) =>
              item.title === "Orders" && !session?.user ? null : (
                <Link
                  href={item.url}
                  key={item.id}
                  onClick={() => setOpen(false)}
                  className="hover:text-gray-300 transition-colors duration-300 text-center text-lg "
                >
                  {item.title}
                </Link>
              )
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
