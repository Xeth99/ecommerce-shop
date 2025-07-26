"use client";
import { useCartStore } from "@/store/cart_store";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
// import { signIn, useSession } from "next-auth/react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const pathname = usePathname();
  // const { data: session } = useSession();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerHeight >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const { items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Products",
      href: "/products",
    },
    {
      label: "Checkout",
      href: "/checkout",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="hover:text-purple-500">
          <Image src="/logo.jpg" alt="logo" width={100} height={30} />
        </Link>

        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`hover:text-purple-500 ${
                  isActive ? "border-b-2 border-purple-500" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center space-x-4">
          {/* {!session ? (
            <Button variant={"ghost"}
              onClick={() => signIn("google", {callbackUrl: "/"})}
              className="hover:text-blue-600 cursor-pointer"
            >
              Sign In
            </Button>
          ) : (
            <p>Welcome, {session?.user?.name}</p>
          )} */}

          <Link href="/checkout" className="relative">
            <ShoppingCartIcon className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      {mobileOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col p-4 space-y-2">
            <li>
              <Link href="/" className="block hover:text-purple-500">
                Home
              </Link>
            </li>
            <Link href="/products" className="block hover:text-purple-500">
              Products
            </Link>
            <Link href="/checkout" className="block hover:text-purple-500">
              Checkout
            </Link>
          </ul>
        </nav>
      )}
    </nav>
  );
}
