'use client';

import ProductDetail from './product_detail';
import Stripe from 'stripe';

export default function ProductDetailWrapper({ product }: { product: Stripe.Product }) {
  return <ProductDetail product={product} />;
}
