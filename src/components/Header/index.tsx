import Image from "next/image";

import Logo from "@/public/logo.svg";
import Link from "next/link";
import Cart from "../Cart";
import { Handbag } from "phosphor-react";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export function Header(props: Props) {
  const { setIsOpen, isOpen } = props;

  function handleIsOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="py-8 w-full max-w-6xl m-auto flex justify-between">
      <Link href={"/"}>
        <Image src={Logo} alt="Logo ignite shop" />
      </Link>

      <Cart onClick={handleIsOpen} value={0}>
        <span>
          <Handbag size={24} color="#8D8D99" />
        </span>
      </Cart>
    </header>
  );
}
