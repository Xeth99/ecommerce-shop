// import ProductDetail from "@/components/product_detail";
// import { stripe } from "@/lib/stripe";

// export default async function ProductPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const product = await stripe.products.retrieve(params.id, {
//     expand: ["default_price"],
    
//   });
//     const plainProduct = JSON.parse(JSON.stringify(product))
//   return <ProductDetail product={plainProduct} />;
// }

// import ProductDetail from "@/components/product_detail";
import { stripe } from "@/lib/stripe";
import ProductDetailWrapper from "@/components/product_details_wrapper";

type Props = {
  params: { id: string };
};

export default async function ProductPage({ params }: Props) {
  const product = await stripe.products.retrieve(params.id, {
    expand: ["default_price"],
  });

  const plainProduct = JSON.parse(JSON.stringify(product));
  return (
    <div>
      <ProductDetailWrapper product={plainProduct} />
    </div>
  );
}
