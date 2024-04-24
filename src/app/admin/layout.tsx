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
        <div className="flex items-center">
          <NavLink href="/admin">
            <div className="flex items-center mx-auto text-primary-foreground">
              <Headphones className=" mr-1 h-7 w-7" />
              AirPodsMax Store
            </div>
          </NavLink>
          <div className="text-[#7d7d7d] text-sm">
            <NavLink href="/admin/products">Products</NavLink>
          </div>
        </div>
      </Navbar>
      <div className="container my-6">{children}</div>
    </>
  );
}
