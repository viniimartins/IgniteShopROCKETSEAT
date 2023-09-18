import { stripe } from "@/lib/stripe";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import Stripe from "stripe";

interface Props {
  searchParams: any;
}

async function getProduct(sessionId: string) {
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const costumerName = session.customer_details?.name;
  const productName = session.line_items?.data[0]?.price
    ?.product as Stripe.Product;
  const productImg = session.line_items?.data[0]?.price
    ?.product as Stripe.Product;

  return {
    costumerName,
    product: {
      name: productName.name,
      imageUrl: productImg.images[0],
    },
  };
}

export async function Content(props: Props) {
  const { searchParams } = props;

  const sessionId = searchParams.session_id;

  if (sessionId === undefined) {
    redirect("/");
  }

  const productData = await getProduct(sessionId);

  return (
    <main className="flex flex-col items-center justify-center m-auto h-[656px]">
      <h1 className="text-3xl text-neutrals-gray300">Compra Efetuada</h1>

      <div className="w-full max-w-[130px] h-36 backgroundColor rounded flex items-center justify-center mt-16">
        <Image
          src={productData.product.imageUrl}
          width={300}
          height={300}
          quality={100}
          objectFit="cover"
          alt={productData.product.name}
        />
      </div>

      <p className="max-w-xl text-center text-2xl text-neutrals-gray300 mt-8">
        Uhuul <strong>{productData.costumerName}</strong>, sua{" "}
        <strong>{productData.product.name}</strong> já esta a caminho da sua
        casa.
      </p>

      <Link
        className="mt-20 font-bold block text-xl text-brands-primary-green500 hover:text-brands-primary-green500"
        href="/"
      >
        Voltar ao catálogo
      </Link>
    </main>
  );
}
