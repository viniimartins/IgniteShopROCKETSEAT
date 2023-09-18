"use client";

import { ReactNode, useState } from "react";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "@/styles/global.css";
import { Header } from "@/components/Header";
import { AsideBar } from "@/components/AsideBar";
import { CartProvider } from "use-shopping-cart";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const key = process.env.STRIPE_SECRET_KEY!;

  return (
    <html lang="pt-br">
      <CartProvider
        mode="payment"
        cartMode="client-only"
        stripe={key}
        successUrl={`${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`}
        cancelUrl={`${process.env.NEXT_URL}/`}
        currency="BRL"
        shouldPersist={true}
      >
        <body
          className={`${roboto.className} flex flex-col items-start min-w-[100vh] relative`}
        >
          <AsideBar setIsOpen={setIsOpen} isOpen={isOpen} />
          <Header setIsOpen={setIsOpen} isOpen={isOpen} />
          {children}
        </body>
      </CartProvider>
    </html>
  );
}
