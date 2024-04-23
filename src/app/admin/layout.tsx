import Navbar, { NavLink } from "@/src/components/Navbar";
import { Headphones } from "lucide-react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar>
        <NavLink href="/admin">
          <Headphones className="text-white" />
        </NavLink>
        <NavLink href="/admin/products">Products</NavLink>
      </Navbar>
      <div className="container my-6">{children}</div>
    </>
  );
}
