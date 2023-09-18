import { stripe } from "@/lib/stripe";
import Image from "next/image";
import { cache } from "react";
import Stripe from "stripe";
import { Button } from "./components/Button";
import { Metadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 3600; // 1 hour

export const getProduct = cache(async (productId: string) => {
  const response = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = response.default_price as Stripe.Price;

  const formattedPrice =
    price && price.unit_amount
      ? new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount / 100)
      : "Price not available";

  return {
    id: response.id,
    name: response.name,
    imageUrl: response.images[0],
    description: response.description,
    price: formattedPrice,
    defaultPriceId: price.id,
  };
});

export const metadata: Metadata = {
  // title: `${name}| Ignite Shop `,
  description: "...",
};

export default async function Product({ params }: Props) {
  const productId = params.slug;

  const product = await getProduct(productId);

  const { imageUrl, name, price, defaultPriceId, description } = product;

  return (
    <main className="grid grid-cols-2 items-stretch gap-16 max-w-6xl m-auto">
      <div className="w-full max-w-xl backgroundColor flex items-center justify-center h-[calc(656px-0.5rem)] rounded p-1 ">
        <Image
          src={imageUrl}
          alt="Teste"
          quality={100}
          width={700}
          height={600}
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-3xl text-neutral-300">{name}</h1>
        <span className="mt-4 block text-4xl text-brands-primary-green300">
          {price}
        </span>
        <p className="pt-10 text-lg text-neutral-300">{description}</p>
        <Button defaultPriceId={defaultPriceId}>Comprar Agora</Button>
      </div>
    </main>
  );
}
