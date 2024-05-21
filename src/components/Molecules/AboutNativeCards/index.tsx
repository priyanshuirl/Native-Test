import React from "react";
import AboutNativeCard from "./AboutNativeCard";
import { ABOUT_CARDS } from "@/constants/native-home";

const AbouteNativeCards = () => {
  return (
    <div>
      <p className="text-black font-bold text-sm tracking-[1.26px] mb-[49px] text-center">
        ABOUT native. card
      </p>

      <div className="flex flex-col gap-2.5">
        {ABOUT_CARDS.map((card: any) => (
          <AboutNativeCard {...card} key={card.id} />
        ))}
      </div>
    </div>
  );
};

export default AbouteNativeCards;
