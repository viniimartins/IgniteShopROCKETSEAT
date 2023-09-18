import { AiOutlineClose } from "react-icons/ai";

import { Card } from "../Card";

interface Props {
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
}

export function AsideBar(props: Props) {
  const { isOpen, setIsOpen } = props;

  function handleIsOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <aside
      data-isopen={isOpen}
      className="w-full h-screen boxShadow max-w-[480px] bg-neutrals-gray800 z-50 absolute right-0 data-[isopen=false]:hidden "
    >
      <div className="flex justify-end pt-6 pr-6">
        <button onClick={handleIsOpen}>
          <AiOutlineClose size={24} color="#8D8D99" />
        </button>
      </div>

      <div className="py-6 px-12 flex flex-col gap-6">
        <span className="text-xl font-bold">Sacola de compras</span>
        <Card />

        <div>
          <div></div>

          <button className="w-full mt-auto bg-brands-primary-green500 text-neutral-50 rounded p-5 cursor-pointer bold text-lg hover:bg-brands-primary-green300 disabled:opacity-10 disabled:cursor-not-allowed">
            Finalizar compora
          </button>
        </div>
      </div>
    </aside>
  );
}
