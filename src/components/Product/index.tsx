"use client";

import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import { ProductType } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { Handbag } from "phosphor-react";

interface Props {
  data: ProductType;
}

export function Product({ data }: Props) {
  const { id, imageUrl, name, price } = data;

  return (
    <Link
      href={`/product/${id}`}
      key={id}
      className="keen-slider__slide"
      prefetch={false}
    >
      <article className="h-[48rem] backgroundColor rounded-lg p-1 cursor-pointer relative flex justify-center items-center">
        <Image
          src={imageUrl}
          alt="Camiseta"
          width={520}
          height={480}
          quality={100}
          style={{ objectFit: "cover" }}
        />

        <footer className="absolute p-8 bottom-1 left-1 right-1 rounded-md flex items-center justify-between backgroundfooter overflow-hidden">
          <div className="flex flex-col gap-1">
            <strong className="text-lg">{name}</strong>
            <span className="text-xl font-bold text-brands-primary-green300">
              {price}
            </span>
          </div>
          <button className="w-14 h-14 rounded-md py-3 bg-brands-primary-green500 flex justify-center items-center">
            <span>
              <Handbag color="#FFFFFF" size={32} />
            </span>
          </button>
        </footer>
      </article>
    </Link>
  );
}
