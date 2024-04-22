"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Headphones } from "lucide-react";
import { useSession } from "next-auth/react";
import SignOutButton from "./SignOutButton";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div className="bg-[#191f27] py-2 fixed w-full z-10 top-0">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Headphones className="text-white" />
        </Link>

        {session?.user ? (
          <SignOutButton />
        ) : (
          <Button variant={"secondary"}>
            <Link href="/sign-in">Sign in</Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
