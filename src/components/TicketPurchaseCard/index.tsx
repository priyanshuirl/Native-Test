import React from "react";
import CustomButton from "../CustomButton";
import { formatNumber } from "@/utils";

const Tag = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const classes =
    "w-fit flex justify-center items-center px-4 py-2 text-xs font-semibold rounded-3xl";
  return <div {...props} className={classes} />;
};

interface ITicketPurchaseCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  index: number;
  id: string;
  title: string;
  subtitle: string;
  price: number;
  tag: string;
  specialTicketTitle?: string;
  description: string;
}

const tagColors = ["#F1D7BC", "#F8BEC0", "#C5CDEB", "#E8A3D9"];

const TicketPurchaseCard = ({
  title,
  index,
  id,
  subtitle,
  specialTicketTitle,
  tag,
  price,
  description,
  className,
  ...props
}: ITicketPurchaseCardProps) => {
  const tagColor = tagColors[index % tagColors.length];
  return (
    <div className="w-[90%] relative overflow-hidden mx-auto flex flex-col items-center py-8 pl-5 pr-3 bg-[#F9F9F9] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-3xl">
      <Tag style={{ backgroundColor: tagColor }} className={`bg-[${tagColor}]`}>
        {tag}
      </Tag>
      <p className="text-[46px] font-semibold text-black mt-3.5 mb-[11px]">
        ¥ {formatNumber(price)}
      </p>
      <p className="text-[#8B8B8B]">
        <span className="font-extrabold tracking-[2.24px]">{title}</span>
        <span className="text-sm font-bold traccking-[1.4px] ml-[11px]">
          {subtitle}
        </span>
      </p>
      <p className="text-sm text-[#595959] tracking-[0.98px] mt-6 mb-10 text-center">
        {description}
      </p>
      <CustomButton containerClassName="text-base font-bold tracking-[0.16px]">
        購入する
      </CustomButton>
      {specialTicketTitle ? (
        <div className="absolute w-[160px] h-[160px] rounded-full -top-[95px] -right-[71px] bg-[#F8BEC0] text-[#F9F9F9] font-bold tracking-[1.32px]">
          <p className="absolute bottom-[31px] left-[31px] text-[11px]">
            {specialTicketTitle}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default TicketPurchaseCard;
