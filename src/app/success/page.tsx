import { Metadata } from "next";
import { Content } from "./content";

export const metadata: Metadata = {
  title: `Cpmpra efetuada | Ignite Shop `,
  description: "...",
};

export default function Sucess({ searchParams }: any) {
  return <Content searchParams={searchParams} />;
}
