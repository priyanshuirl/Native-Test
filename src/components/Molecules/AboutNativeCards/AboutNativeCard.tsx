import React from "react";

interface IAboutNativeCardProps {
  id: string;
  primaryTitle: string;
  secondaryTitle1: string;
  secondaryTitle2: string;
  description: string;
  bgImage: string;
}

const AboutNativeCard = ({
  id,
  primaryTitle,
  secondaryTitle1,
  secondaryTitle2,
  description,
  bgImage,
  ...props
}: IAboutNativeCardProps) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="pt-[25px] pb-[11px] px-[42.5px] text-white"
    >
      <div className="flex items-center justify-between p-2.5 relative gap-[17px]">
        <div className="min-w-[78px] min-h-[78px] rounded-full border-[5px] border-[#A3A3A3] flex items-center justify-center font-bold">
          {id}
        </div>
        <p className="text-[10px] z-[1] font-bold tracking-[0.9px]">
          {primaryTitle}
        </p>
        <p className="absolute z-0 -top-[30px] right-0 text-[110px] leading-[127.6px] -tracking-[2.2px] text-[#A3A3A3]">
          {id}
        </p>
      </div>
      <p className="text-2xl font-bold tracking-[1.61px] mt-[22px]">
        {secondaryTitle1}
      </p>
      <p className="text-2xl font-bold tracking-[1.61px] mb-[13px]">
        {secondaryTitle2}
      </p>
      <p className="tracking-[1.12px]">{description}</p>
    </div>
  );
};

export default AboutNativeCard;
