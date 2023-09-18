import Image from "next/image";

import teste from "@/public/camisetas/camiseta.svg";

export function Card() {
  return (
    <article className="flex gap-5">
      <figure className="w-24 h-24 rounded-lg backgroundColor">
        <Image src={teste} alt="teste" quality={100} />
      </figure>
      <section className="flex flex-col gap-2">
        <div>
          <h3 className="text-lg text-neutrals-gray300">
            Camiseta Beyond the Limits
          </h3>
          <span className="text-lg font-bold text-neutrals-gray100">
            R$ 79,90
          </span>
        </div>
        <span className="text-base font-bold text-brands-primary-green500 ">
          Remover
        </span>
      </section>
    </article>
  );
}
