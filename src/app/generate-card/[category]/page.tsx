"use client";
import React, { useState } from "react";
import styles from "./GenerateNativeCardModal.module.css";
import { TiTicket } from "react-icons/ti";
import { Stack } from "@mantine/core";
import { NativeLoveLongImg, NativeLoveShortImg } from "@/assets/images";
import CustomButton from "@/components/Atoms/CustomButton";
import InputWithLabel from "@/components/Atoms/InputWithLabel";
import { Menu } from "@/components/Molecules/menu/Menu";
import { useRouter } from "next/navigation";

export default function GenerateNativeCardCategory() {
  const router = useRouter();
  const [date, setDate] = useState();
  return (
    <Menu
      onClose={() => router.back()}
      open={true}
      title="native. card を発行する"
    >
      <div className={styles.ticketInfo}>
        <TiTicket />
        １枚の無料発行ができます
      </div>
      <Stack gap={"xs"} className="px-[16px] mt-3">
        <p className="text-[20px] font-bold text-[#121212]">
          native. cardを1秒で無料発行体験
        </p>
        <p className="text-[14px] text-[#595959]">
          生年月日入力のみ。入力後1秒でnative. cardを受取
        </p>
        <div className="flex flex-row items-center justify-center w-full gap-3 my-6">
          <button className={styles.btnPressed}>自分のカード</button>
          <button className={styles.btnNormal}>他人のカード</button>
        </div>
        <p className="text-[14px] text-black font-semibold">
          発行するカードver.を選択ください
        </p>
        <div className="grid grid-cols-2 gap-4 mb-3">
          <div className={styles.selectedOption}>
            <p className="text-black text-[14px] font-semibold text-center">
              恋愛 ver.
            </p>
            <img className={styles.optionImage} src={NativeLoveShortImg.src} />
          </div>
          <div className={styles.option}>
            <p className="text-black text-[14px] font-semibold text-center">
              キャリア ver.
            </p>
            <img className={styles.optionImage} src={NativeLoveLongImg.src} />
          </div>
        </div>
        <Stack gap={"md"} className="mb-5">
          <InputWithLabel
            label="生年月日を入力してください"
            value={date}
            onDateChange={(date) => setDate(date)}
            name="date"
            type="date"
          />
          <CustomButton>native. card を発行する</CustomButton>
        </Stack>
      </Stack>
    </Menu>
  );
}
