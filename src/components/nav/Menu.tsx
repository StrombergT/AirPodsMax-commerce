"use client";
import Image from "next/image";

import { useState } from "react";
import CartIcon from "./CartIcon";
import { LogIn, MenuIcon, User, X } from "lucide-react";
import Link from "next/link";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Products", url: "/products" },
  { id: 3, title: "Contact", url: "/contact" },
  { id: 4, title: "Orders", url: "/orders" },
];

export default function Menu() {
  const [open, setOpen] = useState(false);
  const user = false;
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="cursor-pointer flex items-center justify-center"
      >
        {open ? <X /> : <MenuIcon />}
      </button>
      {open && (
        <div className="bg-[#171717] text-white absolute left-0 top-16 w-full h-auto flex flex-col text-xl z-20 p-4 shadow-lg rounded-b-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-2 mt-2">
            {links.map((item) => (
              <Link
                href={item.url}
                key={item.id}
                onClick={() => setOpen(false)}
                className="hover:text-gray-300 transition-colors duration-300"
              >
                {item.title}
              </Link>
            ))}
            <Link
              href={user ? "/orders" : "sign-in"}
              onClick={() => setOpen(false)}
            >
              <div className="absolute top-5 right-12">
                <User />
              </div>
            </Link>
            <Link href="/cart" onClick={() => setOpen(false)}></Link>
            <div className="absolute bottom-12 right-12">
              <CartIcon />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
