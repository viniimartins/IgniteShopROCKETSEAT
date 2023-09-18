"use client";

import axios from "axios";
import { ComponentProps, useState } from "react";

interface Props extends ComponentProps<"button"> {
  defaultPriceId: string;
}

export function Button(props: Props) {
  const { children, defaultPriceId } = props;

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post("/api/checkout", {
        priceId: defaultPriceId,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (error) {
      setIsCreatingCheckoutSession(false);

      alert("Falha ao redirecionar ao checkout");

      // console.log(error);
    }
  }

  return (
    <button
      onClick={handleBuyProduct}
      disabled={isCreatingCheckoutSession}
      className="mt-auto bg-brands-primary-green500 text-neutral-50 rounded p-5 cursor-pointer bold text-lg hover:bg-brands-primary-green300 disabled:opacity-10 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}
