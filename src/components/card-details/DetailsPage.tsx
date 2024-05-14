import React from "react";
import VersionCard from "./VersionCard";
import DetailsCard from "./DetailsCard";
import { NativeCardDetailsT } from "@/constants/native-details";
import BackHeader from "./BackHeader";
import AbouteNativeCards from "../AboutNativeCards";
import Footer from "../home/Footer";

interface IDetailsPageProps {
  details: NativeCardDetailsT;
}

const DetailsPage = ({ details }: IDetailsPageProps) => {
  return (
    <div className="bg-[#EFEFEF] h-svh">
      <BackHeader
        backUrl={details.header.goBackRoute}
        title={details.header.title}
      />
      <div className="overflow-auto h-[calc(100%-60px)]">
        <DetailsCard
          title={details.title}
          bgImage={details.bgImage.src}
          description={details.description}
        />
        <div className="flex flex-col gap-3 mt-4">
          {details.cardVersions.map((card) => (
            <VersionCard key={card.id} cardDetails={card} />
          ))}
        </div>

        <div className="pt-8">
          <AbouteNativeCards />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DetailsPage;
