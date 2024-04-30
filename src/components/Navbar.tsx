"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { Button } from "./ui/button";
import SignOutButton from "./SignOutButton";
import { Headphones, Search } from "lucide-react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-[#171717] relative flex justify-between px-4 py-4 lg:px-6">
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Link href="/">
            <div className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6 text-primary-foreground">
              <Headphones className="mr-2 flex-none text-sm font-medium uppercase md:hidden lg:block" />{" "}
              AirPodsMax
            </div>
          </Link>
          <ul className="hidden gap-6 text-sm md:flex md:items-center text-primary-foreground">
            <li className="underline-offset-4 hover:text-white hover:underline">
              <Link href="/">Home</Link>
            </li>
            <li className="underline-offset-4 hover:text-white hover:underline">
              <Link href="/products">HeadPhones</Link>
            </li>
          </ul>
        </div>
        <div className="hidden justify-center md:flex md:w-1/3 relative">
          <form className="w-max-[550px] w-full lg:w-80 xl:w-full">
            <input
              className="w-full rounded-lg border border-[#2b2a2a] bg-[#171717] px-4 py-2 text-sm text-primary-foreground outline-none"
              type="text"
              placeholder="Search for products..."
              name="search"
            />
            <div className="absolute right-0 top-0 mr-3 flex h-full items-center ">
              <Search className="h-4 text-primary-foreground" />
            </div>
          </form>
        </div>
      </div>

      <div className="flex items-center">
        {session?.user ? (
          <SignOutButton />
        ) : (
          <Button asChild variant={"secondary"}>
            <Link href="/sign-in">Sign in</Link>
          </Button>
        )}
      </div>
    </nav>
  );
}
