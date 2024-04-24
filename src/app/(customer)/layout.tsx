import Navbar, { NavLink } from "@/src/components/Navbar";
import { Headphones } from "lucide-react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar>
        <div className="flex items-center">
          <NavLink href="/">
            <div className="flex items-center mx-auto text-primary-foreground">
              <Headphones className="mr-1 h-7 w-7" /> AirPodsMax
            </div>
          </NavLink>
          <div className="text-[#7d7d7d] text-sm">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/products">Products</NavLink>
          </div>
        </div>
      </Navbar>
      <div className="container my-6">{children}</div>
    </>
  );
}
