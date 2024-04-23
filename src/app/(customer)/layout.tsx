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
        <NavLink href="/">
          <Headphones />
        </NavLink>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/products">Products</NavLink>
      </Navbar>
      <div className="container my-6">{children}</div>
    </>
  );
}
