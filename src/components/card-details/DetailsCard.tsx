import React from 'react';

interface IDetailsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  bgImage: string;
}

const DetailsCard = ({title, description, bgImage}: IDetailsCardProps) => {
  return (
    <div
      style={{backgroundImage: `url(${bgImage})`}}
      className="pt-[60px] px-[42px] bg-cover bg-center bg-no-repeat min-h-[328px] rounded-b-2xl text-white text-center"
    >
      <p className="text-[28px] font-bold">{title}</p>
      <p className="mt-2 text-white/80">{description}</p>
    </div>
  );
};

export default DetailsCard;
