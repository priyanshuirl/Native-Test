"use client";
import React from "react";
import CustomButton from "../CustomButton";

interface INativeCardTypeCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
  description: string;
  onClickHandler?: () => void;
  img: string;
  bgImage: string;
}

const NativeCardTypeCard = ({
  id,
  title,
  description,
  onClickHandler,
  img,
  bgImage,
  ...props
}: INativeCardTypeCardProps) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="h-[661px] rounded-3xl text-white py-11 px-[49px] bg-cover flex flex-col items-center"
    >
      <p className="text-2xl font-bold tracking-[1.68px]">{title}</p>
      <p className="mt-5 font-medium text-sm tracking-[0.56px] text-center">
        職歴、年収のような表層情報に囚われず、肩の力を抜いて、native.
        (自然体の姿）な自分で、深層心理で分かち合える出逢いを
      </p>
      <div className="mt-[22px] h-[346px]">
        <img className="mx-auto" src={img} alt="card" />
      </div>

      <CustomButton
        onClick={onClickHandler}
        containerClassName="w-[197px] py-3.5 text-sm font-bold tracking-[0.14px] mt-[27px]"
      >
        詳しく見る
      </CustomButton>
    </div>
  );
};

export default NativeCardTypeCard;
