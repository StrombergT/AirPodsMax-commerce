"use client";
import { DropdownMenuItem } from "@/src/components/ui/dropdown-menu";
import { useTransition } from "react";
import { RemoveProduct } from "../../_actions/products";
import { useRouter } from "next/navigation";

export function DeleteItemDropDown({
  id,
  disabled,
}: {
  id: string;
  disabled: boolean;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  return (
    <DropdownMenuItem
      disabled={disabled || isPending}
      onClick={() => {
        startTransition(async () => {
          await RemoveProduct(id);
          router.refresh();
        });
      }}
    >
      Delete
    </DropdownMenuItem>
  );
}
