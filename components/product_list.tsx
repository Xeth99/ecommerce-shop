"use client";

import Stripe from "stripe";
import ProductCard from "./product_card";
import { useState } from "react";

interface Props {
  products: Stripe.Product[];
}
export default function ProductList({ products }: Props) {
  const [searchTab, setSearchTab] = useState<string>("");
  const filteredProducts = products.filter((product) => {
    const term = searchTab.toLowerCase();
    const nameMatch = product.name.toLowerCase().includes(term);
    const descriptionMatch = product?.description
      ? product.description?.toLowerCase().includes(term)
      : false;
    return nameMatch || descriptionMatch;
  });
  return (
    <div>
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          value={searchTab}
          onChange={(e) => setSearchTab(e.target.value)}
          placeholder="Search products"
          className="w-full max-w-md rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => {
          return (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
