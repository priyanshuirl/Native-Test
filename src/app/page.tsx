"use client";
import { svgLogo } from "@/assets/brand";
import { bgGirl, campaignBg, cardImg } from "@/assets/images";
import AbouteNativeCards from "@/components/Molecules/AboutNativeCards";
import CustomButton from "@/components/Atoms/CustomButton";
import Header from "@/components/Organisms/home/Header";
import { NATIVE_CARD_TYPES, TICKET_CATEGORIES } from "@/constants/native-home";
import { Carousel, Embla } from "@mantine/carousel";
import { useRouter } from "next/navigation";
import "@mantine/carousel/styles.css";
import Footer from "@/components/Organisms/home/Footer";
import FAQAccordian from "@/components/Organisms/home/FAQAccordian";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import NativeCardTypeCard from "@/components/Molecules/NativeCardTypeCard";
import TicketPurchaseCard from "@/components/Molecules/TicketPurchaseCard";

export default function Home() {
  const router = useRouter();
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const [embla, setEmbla] = useState<Embla | null>(null);
  const [currentlyActiveSlide, setCurrentlyActiveSlide] = useState<number>(0);

  function setSlidesInView(emblaApi: any) {
    setCurrentlyActiveSlide(emblaApi?.slidesInView()?.[0]);
  }

  useEffect(() => {
    embla?.on("slidesInView", setSlidesInView, "here");
  }, [embla]);

  const handleSetCarouselSlide = (i: number) => {
    embla?.scrollTo(i);
    autoplay.current.stop();
  };

  return (
    <div className="w-full h-svh flex flex-col overflow-auto relative">
      <Header />
      <div className="flex-1 overflow-auto bg-white">
        <div className="relative h-full overflow-hidden flex flex-col gap-[35px] justify-between home-card-bg text-white text-center pt-[45px] rounded-b-[24px]">
          <img
            className="absolute top-[10%] bottom-0 right-0 h-full -z-[1] object-cover opacity-50"
            src={bgGirl.src}
            alt="sdf"
          />
          <div className="px-6">
            <p className="text-[25px] font-extrabold tracking-[1.25px]">
              早く深くおもしろく
            </p>
            <div className="mt-[25px]">
              <p className="text-[15px] font-bold tracking-[0.6px]">
                1秒自己分析「native. card」
              </p>
              <p className="font-medium text-[17px] tracking-[0.68px]">
                トライアルキャンペーン実施中
              </p>
              <p className="text-xl tracking-[0.8px] mt-2.5 font-bold">
                今すぐ無料発行体験
              </p>
            </div>
          </div>
          <div className="h-fit">
            <div className="flex justify-between gap-[17px] mb-[14px] font-extrabold px-6">
              <div className="flex-1 border-b-[1.5px] border-white">
                <p className="mb-[7px]">恋愛ver.</p>
              </div>
              <div className="flex-1 border-b-[1.5px] border-white">
                <p className="mb-[7px]">キャリアver.</p>
              </div>
            </div>
            <img className="w-full" src={cardImg.src} alt="card" />
            <div className="px-6 w-full absolute bottom-10">
              <CustomButton size="lg">無料で発行体験する</CustomButton>
              <p className="mt-5 text-[10px] font-medium">
                ※恋愛、キャリアのいずれか1枚発行無料
              </p>
            </div>
          </div>
        </div>
        {/* Intro page */}
        <div className="h-full px-[41px] py-[87px] bg-[#F9F9F9] flex flex-col justify-center">
          <p className="tracking-[3.2px] text-[32px] font-extrabold text-[#E5E5E5]">
            INTRODUCTION
          </p>
          <p className="text-[30px] font-bold tracking-[2.1px] -mt-[29px]">
            native.
            <span className="text-[22px] font-medium tracking-[1.54px]">
              とは
            </span>
          </p>
          <div className="leading-[27.2px] mt-8 text-start">
            <p>
              native.
              は、「自然体、ありのままの姿」という意味を持つ。情報過多で選択、意思決定の難度が高まる現代社会にて、恋活/婚活、就職/転職、子育て、暮らし、旅行、ヘルスケア等、あらゆる人生の意思決定を支え、背中をそっと押すパートナーとして、様々なシーンで寄り添います。
            </p>
            <p>
              周囲の視線、期待、表層的な情報に過度に惑わられず、自ら気付けていない深層心理、価値観に触れ、本当の自分らしい人生を歩み始める一歩をサポートできればと考えております。
            </p>
          </div>
        </div>

        {/* native info */}
        <div className="pt-9 pb-[57px] px-[42px]">
          <p className="text-[44px] font-bold tracking-[3.08px] -mt-[29px] text-[#E5E5E5] ml-[21px]">
            native.
            <span className="text-[38px] font-medium tracking-[2.66px]">
              card
            </span>
          </p>
          <p className="text-[28px] font-bold tracking-[1.96px] -mt-[43px]">
            native.
            <span className="text-[24px] font-medium tracking-[1.68px]">
              card
            </span>
          </p>
          <p className="leading-7 tracking-[1.12px]">
            約20万以上存在する統計ベースの生年月日を用いた個別グラフ、10,000人超の個別分析データを統合し、一定正確性の高い深層レベルの価値観情報を提供するパーソナリティカードです。
          </p>
        </div>

        {/* native card types */}
        <div className="flex flex-col gap-2.5">
          {NATIVE_CARD_TYPES.map((card) => (
            <NativeCardTypeCard
              onClickHandler={() => {
                router.push(card.path);
              }}
              key={card.id}
              {...card}
            />
          ))}
        </div>

        {/* About native card */}
        <div>
          <div className="text-center pt-[89px] pb-[62px] flex flex-col items-center gap-[62px]">
            <img className="w-[166px] h-[66px]" src={svgLogo.src} alt="logo" />
          </div>
        </div>
        <AbouteNativeCards />

        {/* Campaign */}
        <div>
          <div className="pt-[69px] pb-9 pl-[41px] pr-6">
            <p className="text-[44px] font-bold tracking-[3.08px] mt- text-[#E5E5E5] ml-[30px]">
              campaign
            </p>
            <p className="text-2xl font-bold tracking-[1.68px] -mt-[32px]">
              campaign
            </p>
          </div>
          <div
            style={{
              background: `linear-gradient(55deg, #B7A4E3 16.07%, #FE908D 83.93%)`,
            }}
            className="px-[23px] py-3 text-white"
          >
            <div className="flex gap-[5px]">
              <div className="text-lg font-bold tracking-[0.72px] mt-[15px]">
                <p>1秒自己分析</p>
                <p>native. card を</p>
                <p>今すぐ無料発行体験！</p>
              </div>
              <img src={campaignBg.src} alt="campaign" />
            </div>
            <div className="flex flex-col items-center -mt-5">
              <CustomButton containerClassName="w-[265px] px-4 py-3.5 text-xs font-bold tracking-[0.12px]">
                無料で発行体験する
              </CustomButton>
              <p className="mt-[18px] text-[10px] font-bold tracking-[0.8px]">
                ※恋愛、キャリアのいずれか1枚発行無料
              </p>
            </div>
          </div>
        </div>

        {/* Tickets */}
        <div>
          <div className="px-[41px] pt-[79px] pb-11">
            <p className="text-[44px] font-bold tracking-[3.08px] text-[#E5E5E5] ml-[21px]">
              ticket
            </p>
            <p className="text-2xl font-bold tracking-[1.68px] -mt-[32px]">
              ticket
            </p>
            <p className="tracking-[1.12px] mt-[15px]">
              2枚目以降の発行は有料となります。ぜひnative.
              の多様なラインナップを通じて、自己探索の旅に出てください。
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 mb-5">
            {new Array(TICKET_CATEGORIES?.length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-3 w-3 rounded-full cursor-pointer transition-all content-[''] ${
                  currentlyActiveSlide === i ? "bg-[#2E2D40]" : "bg-[#D9D9D9]"
                }`}
                onClick={() => handleSetCarouselSlide(i)}
              />
            ))}
          </div>
          <Carousel
            height={360}
            plugins={[autoplay.current]}
            getEmblaApi={setEmbla}
            slidesToScroll={1}
            inViewThreshold={0.8}
          >
            {TICKET_CATEGORIES.map((ticket, index) => (
              <Carousel.Slide key={ticket.id}>
                <TicketPurchaseCard index={index} {...ticket} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>

        <div className="py-[100px] pb-[69px] pl-[22px] pr-[18px]">
          <p className="font-bold text-4xl text-center mb-[30px]">
            よくある質問
          </p>
          <FAQAccordian />
        </div>
        <Footer />
      </div>
    </div>
  );
}
