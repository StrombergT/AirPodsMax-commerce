"use client";
import { Headphones, User } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import CartIcon from "./CartIcon";
import SignOutButton from "../ui/button/SignOutButton";
import Menu from "./Menu";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#1f1f1f]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <div className="h-auto w-auto flex flex-row items-center mr-2 text-gray-600">
          <div className="block sm:hidden">
            <Menu />
          </div>
          <Link
            href="/"
            className="font-bold ml-[10px] text-gray-600 flex items-center"
          >
            <Headphones className="mr-2" />
            AirPodsMax
          </Link>
        </div>

        <div className="w-[400px] h-full flex flex-row items-center justify-between md:mr-20 ">
          <div className="justify-between w-full h-auto border border-[#9fa7b661] bg-[#0000005e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-600 text-sm hidden sm:flex items-center gap-4">
            <Link
              className="cursor-pointer transition-colors duration-300 hover:text-gray-300"
              href="/"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="cursor-pointer transition-colors duration-300 hover:text-gray-300"
            >
              Products
            </Link>
            <Link
              href="#"
              className="cursor-pointer transition-colors duration-300 hover:text-gray-300"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-5 text-gray-600 items-center">
          <div className="flex items-center gap-4 relative ">
            <CartIcon />
            {session?.user ? (
              <div className="flex items-center gap-2">
                <Link
                  href="/orders"
                  className="cursor-pointer transition-colors duration-300 hover:text-gray-300 hidden md:block"
                >
                  Orders
                </Link>
                <SignOutButton />
              </div>
            ) : (
              <Link href="/sign-in">
                <User />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
