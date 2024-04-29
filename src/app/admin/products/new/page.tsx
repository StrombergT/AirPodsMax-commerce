import { PageHeader } from "../../_components/PageHeader";
import ProductForm from "../_components/ProductForm";

export default function NewProductPage() {
  return (
    <>
      <div className="text-[#7d7d7d]">
        <PageHeader>Add Product</PageHeader>
      </div>

      <ProductForm />
    </>
  );
}
