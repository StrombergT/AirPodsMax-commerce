"use client";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Menu from "./Menu";
import { Headphones } from "lucide-react";
import SignOutButton from "./SignOutButton";
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  return (
    <nav className="bg-[#171717] text-primary-foreground py-2 px-4 lg:py-4 lg:px-20 xl:px-40 flex items-center justify-between border-b-2 border-b-black uppercase">
      <div className="flex items-center">
        <div className="text-xl font-bold mr-8 flex items-center">
          <Headphones className="mr-2" />
          <Link href="/">AirPodsMax</Link>
        </div>
        <div className="hidden lg:flex gap-4">
          <Link className="underline" href="/">
            Homepage
          </Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
      <div className="flex items-center">
        {session?.user ? (
          <div className="flex items-center gap-4">
            <CartIcon />

            <Link href="/orders">Orders</Link>
            <SignOutButton />
          </div>
        ) : (
          <Button asChild variant="secondary">
            <Link href="/sign-in">Sign in</Link>
          </Button>
        )}
      </div>
    </nav>
  );
}
