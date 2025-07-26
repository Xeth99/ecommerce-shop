import { stripe } from "@/lib/stripe";
import ProductDetailWrapper from "@/components/product_details_wrapper";

export default async function ProductPage({ params }: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  const product = await stripe.products.retrieve(id, {
    expand: ["default_price"],
  });

  const plainProduct = JSON.parse(JSON.stringify(product));
  return (
    <div>
      <ProductDetailWrapper product={plainProduct} />
    </div>
  );
}
