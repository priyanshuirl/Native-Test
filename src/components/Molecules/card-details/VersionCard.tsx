import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { NativeCardDetailsT } from "@/constants/native-details";
import CustomButton from "../Atoms/CustomButton";

interface IVersionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  cardDetails: NativeCardDetailsT["cardVersions"][0];
}

const VersionCard = ({
  cardDetails,
  className,
  ...props
}: IVersionCardProps) => {
  const classes = "bg-white px-5 py-10 rounded-3xl text-black";
  return (
    <div className={classes} {...props}>
      <p className="text-2xl font-bold mb-4">{cardDetails.title}</p>
      <img src={cardDetails.img.src} className="w-full object-cover" />
      <div className="flex items-center justify-between gap-4 mb-4 mt-5">
        <p className="text-xl font-bold tracking-[0.4px]">
          {cardDetails.infoTitle}
        </p>
        <p className="text-[#44A9B2] text-[32px] font-bold tracking-[0.64px]">
          {cardDetails.price}
        </p>
      </div>
      <div className="flex flex-col gap-4 mb-8">
        {cardDetails.featureList.map((feature) => (
          <VersionFeatureListItem key={feature} feature={feature} />
        ))}
      </div>
      <CustomButton containerClassName="w-[209px] text-sm font-bold text-center lowercase">
        native. card を発行する
      </CustomButton>
    </div>
  );
};

export default VersionCard;

interface IVersionFeatureListItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  feature: string;
}

const VersionFeatureListItem = ({
  feature,
  className,
  ...props
}: IVersionFeatureListItemProps) => {
  const classes = "flex gap-2";
  return (
    <div className={classes} {...props}>
      <FaCheckCircle />
      <p className="text-sm tracking-[0.28px]">{feature}</p>
    </div>
  );
};
