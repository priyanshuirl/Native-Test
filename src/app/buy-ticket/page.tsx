"use client";
import CustomButton from "@/components/Atoms/CustomButton";
import { Menu, MenuContentCard } from "@/components/Molecules/menu/Menu";
import TicketSuggestion from "@/components/Molecules/TicketSuggestion";
import { Stack } from "@mantine/core";
import { useRouter } from "next/navigation";

const ticketSuggestions = [
  {
    ticketQty: 1,
    price: 300,
    currency: "¥",
    chipColor: "#1EC56C",
    description: "自分でも気付けていない新たな一面を深く知りたい方向け",
  },
  {
    ticketQty: 5,
    price: 1200,
    currency: "¥",
    chipColor: "#DD923A",
    description:
      "大切な家族、パートナー、チームメンバーの新たな一面を深く知りたい方向け",
  },
  {
    ticketQty: 15,
    price: 3300,
    currency: "¥",
    chipColor: "#1EA7C5",
    description:
      "プライベート、キャリアあらゆる面で、周囲の方の理解を深めたい方向け",
  },
  {
    ticketQty: 30,
    price: 6300,
    currency: "¥",
    chipColor: "#985AE7",
    description:
      "常に、新たな人との出逢いを探索し、好奇心を刺激続けているnative.マスター向け",
  },
];

export default function BuyTicket() {
  const router = useRouter();

  return (
    <Menu
      onClose={() => router.back()}
      open={true}
      title="チケットを購入する"
      withoutFooter
    >
      <div
        className="px-5 py-2 relative overflow-hidden"
        style={{ height: "calc(100vh - 92px)" }}
      >
        <p className="text-[#121212] text-[16px] font-semibold mb-4">
          Select plan
        </p>
        <Stack gap={16}>
          {ticketSuggestions.map((suggestion, index) => {
            return <TicketSuggestion {...suggestion} key={index} />;
          })}
        </Stack>
        <div className="absolute bottom-[-24px] left-0 bg-white rounded-[24px] w-full pt-[16px] pb-[40px] px-[20px]">
          <CustomButton>プランを決定する</CustomButton>
        </div>
      </div>
    </Menu>
  );
}
