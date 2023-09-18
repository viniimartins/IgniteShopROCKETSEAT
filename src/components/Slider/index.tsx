"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { Product } from "../Product";
import { PropsWithChildren } from "react";

export function Slider(props: PropsWithChildren) {
  const { children } = props;

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 32,
    },
    loop: true,
  });

  return (
    <section ref={sliderRef} className="keen-slider">
      {children}
    </section>
  );
}
