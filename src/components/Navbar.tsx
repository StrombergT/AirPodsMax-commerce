"use client";
import { Headphones, LogIn } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import CartIcon from "./CartIcon";
import SignOutButton from "./SignOutButton";
import Menu from "./Menu";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#1f1f1f]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <div className="h-auto w-auto flex flex-row items-center">
          <Headphones className="mr-2 text-gray-600" />
          <Link
            href="/"
            className="font-bold ml-[10px] hidden md:block text-gray-600"
          >
            AirPodsMax
          </Link>
        </div>

        <div className="w-[400px] h-full flex flex-row items-center justify-between md:mr-20 ">
          <div className=" justify-between w-full h-auto border border-[#9fa7b661] bg-[#0000005e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-600 text-sm hidden sm:flex items-center gap-4">
            <Link className="cursor-pointer" href="/">
              Home
            </Link>
            <Link href="/products" className="cursor-pointer">
              Products
            </Link>
            <Link href="/contact" className="cursor-pointer">
              Contact
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-5 text-gray-600">
          <div className="sm:hidden">
            <Menu />
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <CartIcon />
            {session?.user ? (
              <div className="flex items-center gap-4">
                <Link href="/orders">Orders</Link>
                <SignOutButton />
              </div>
            ) : (
              <div>
                <Link href="/sign-in">
                  <LogIn />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
