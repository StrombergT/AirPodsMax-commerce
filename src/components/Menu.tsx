"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Products", url: "/products" },
  { id: 3, title: "Contact", url: "/contact" },
];

export default function Menu() {
  const [open, setOpen] = useState(false);
  const user = false;
  return (
    <div>
      <Image
        src={open ? "/close.png" : "/img/open.png"}
        alt=""
        width={20}
        height={20}
        onClick={() => setOpen(!open)}
        className="cursor-pointer"
      />
      {open && (
        <div className="bg-[#171717] text-white absolute left-0 top-10 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10 mt-7">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          <Link
            href={user ? "/orders" : "sign-in"}
            onClick={() => setOpen(false)}
          >
            {user ? "Orders" : "Sign-In"}
          </Link>
          <Link href="/cart" onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
}
