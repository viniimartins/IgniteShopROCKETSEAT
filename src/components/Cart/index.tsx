import { ComponentProps } from "react";

interface Props extends ComponentProps<"button"> {
  value: number;
  onClick: () => void;
}

export default function Cart(props: Props) {
  const { children, value, onClick } = props;

  return (
    <div>
      <button
        onClick={onClick}
        className="p-3 items-center flex justify-center rounded-md  bg-neutrals-gray800 absolute"
      >
        {children}
      </button>
      <div className="w-6 h-6 bg-brands-primary-green500 rounded-full relative left-8 bottom-2">
        <span className="flex justify-center font-bold text-sm text-white">
          {value}
        </span>
      </div>
    </div>
  );
}
