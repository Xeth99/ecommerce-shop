import ProductList from "@/components/product_list";
import { stripe } from "@/lib/stripe";

export default async function Products() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 6,
  });
  return (
    <div className="pb-8">
      <h1 className="text-3xl font-bold leading-none tracking-tight text-foreground text-center mb-8">
        All Products
      </h1>
      <ProductList products={products.data} />
    </div>
  );
}
