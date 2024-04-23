"use client";
import { ComponentProps, ReactNode } from "react";
import { cn } from "../lib/utils";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Button } from "./ui/button";
import SignOutButton from "./SignOutButton";

interface NavbarProps {
  children: ReactNode;
}

export function Navbar({ children }: NavbarProps) {
  const { data: session } = useSession();

  return (
    <nav className="bg-primary text-primary-foreground flex justify-between px-4 py-2">
      {children}
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

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  return <Link {...props} className={cn("p-4 ")} />;
}
