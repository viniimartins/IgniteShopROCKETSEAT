import { Product } from "@/components/Product";
import { Slider } from "@/components/Slider";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

export async function getProducts() {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    const formattedPrice =
      price && price.unit_amount
        ? new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price.unit_amount / 100)
        : "Price not available";

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: formattedPrice,
    };
  });

  return products;
}

export async function Content() {
  const products = await getProducts();

  return (
    <Slider>
      {products.map((product) => {
        return <Product key={product.id} data={product} />;
      })}
    </Slider>
  );
}
