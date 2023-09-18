import { Metadata } from "next";
import { Content } from "./content";
import { AsideBar } from "@/components/AsideBar";

export const metadata: Metadata = {
  title: "Home | Ignite Shop",
  description: "...",
};

export default function Home() {
  return (
    <main className="w-full ml-auto maxWidth min-h-[656px] flex">
      <Content />
    </main>
  );
}
