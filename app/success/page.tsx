"use client";
import { useCartStore } from "@/store/cart_store";
import Link from "next/link";
import { useEffect } from "react";

export default function SuccessPage() {
  const { clearCart } = useCartStore();
  useEffect(() => {
    clearCart();
  }, [clearCart]);
  return (
    <div className="flex flex-col items-center justify-center mt-20 gap-4">
      <h1 className="text-4xl font-bold text-green-600">Payment successful!</h1>
      <p className="text-lg">
        Thank you for your purchase. Your order has been placed and being
        processed.
      </p>
      <Link href="/products" className="text-blue-500">
        Go to products
      </Link>
    </div>
  );
}
