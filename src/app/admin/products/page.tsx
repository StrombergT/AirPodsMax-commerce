import { Button } from "@/src/components/ui/button";
import { PageHeader } from "../_components/PageHeader";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { db } from "@/src/lib/db";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { DeleteItemDropDown } from "./_components/ProductHandler";

export default function AdminProductsPage() {
  return (
    <>
      <div className="flex justify-between items-center gap-4 text-[#7d7d7d]">
        <PageHeader>Products</PageHeader>
        <Button asChild className="bg-[#3db555] hover:bg-[#3da852]">
          <Link href="/admin/products/new">Add Product</Link>
        </Button>
      </div>
      <ProductsTable />
    </>
  );
}

async function ProductsTable() {
  const products = await db.product.findMany({
    select: {
      id: true,
      name: true,
      unit_amount: true,
      _count: { select: { orders: true } },
      quantity: true,
    },
    orderBy: { name: "asc" },
  });

  if (products.length === 0) return <p>No products</p>;

  return (
    <div className="text-[#7d7d7d] overflow-x-auto ">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-0">
              <span className="sr-only">Available For Purchase</span>
            </TableHead>
            <TableHead className="text-[#7d7d7d] font-extrabold">
              Name
            </TableHead>
            <TableHead className="text-[#7d7d7d] font-extrabold">
              Price
            </TableHead>
            <TableHead className="text-[#7d7d7d] font-extrabold">
              Orders
            </TableHead>
            <TableHead className="w-0">
              <span className="sr-only">Action</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell></TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.unit_amount} SEK</TableCell>
              <TableCell>{product._count.orders}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <MoreHorizontal />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <Link href={`/admin/products/${product.id}/edit`}>
                        Edit
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-gray-400" />
                    <DeleteItemDropDown
                      id={product.id}
                      disabled={product._count.orders > 0}
                    />
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
