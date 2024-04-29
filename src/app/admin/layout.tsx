import { Headphones } from "lucide-react";
import Link from "next/link";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="bg-gray-600 p-5">
        <div className="flex items-center">
          <Link href="/admin">
            <div className="flex items-center mx-auto text-primary-foreground">
              <Headphones className=" mr-1 h-7 w-7" />
              AirPodsMax Store
            </div>
          </Link>
          <div className="text-[#7d7d7d] text-md ml-5">
            <Link href="/admin/products">Products</Link>
          </div>
        </div>
      </nav>
      <div className="container mx-auto mt-5">{children}</div>
    </>
  );
}
