"use client";
import { Menu, MenuContentCard } from "@/components/Molecules/menu/Menu";
import { useRouter } from "next/navigation";
import styles from "./ProfilePage.module.css";
import { TiTicket } from "react-icons/ti";
import CustomButton from "@/components/Atoms/CustomButton";
import { Avatar, Stack } from "@mantine/core";
import { MdCancel, MdOutlineDateRange } from "react-icons/md";
import { LuPencil } from "react-icons/lu";
import Image from "next/image";
import {
  instaIcon,
  instaIconlarge,
  lineIcon,
  lineIconlarge,
  nativeForCareer,
  nativeForLove,
  xIcon,
  xIconlarge,
} from "@/assets/icons";
import { TbLogout2 } from "react-icons/tb";

export default function Profile() {
  const router = useRouter();
  return (
    <Menu
      onClose={() => router.back()}
      open={true}
      title="My Profile"
      withoutFooter
    >
      <div className={styles.ticketInfo}>
        <div className="flex items-center gap-1">
          <TiTicket />
          <p>
            <b>4 ticket</b> more available <br />
            Have ticket of worth <b>¥ 1,200</b>
          </p>
        </div>
        <CustomButton size="sm">Buy More Ticket</CustomButton>
      </div>
      <MenuContentCard>
        <div>
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row gap-4 items-center">
              <Avatar
                src={"https://picsum.photos/200/300"}
                alt="S"
                size={"lg"}
              />
              <div>
                <p className="text-black text-[20px] font-semibold">
                  Priyanshu Mishra
                </p>
                <div className="flex flex-row items-center  mt-2">
                  <div className="w-6">
                    <MdOutlineDateRange color="#44A9B2" size={16} />
                  </div>
                  <p className="text-[#595959] text-[14px]">
                    生年月日が追加されていません
                  </p>
                </div>
              </div>
            </div>
            <div className="w-8 h-8 bg-[#44A9B2] rounded-full flex items-center justify-center text-white">
              <LuPencil />
            </div>
          </div>
          <p className="text-[#595959] text-[14px] mt-3">
            あなたの趣味や興味のあることを記入してプロフィールを充実させましょう。
          </p>
        </div>
      </MenuContentCard>
      <div className="mt-4 px-6">
        <div className="flex flex-row justify-between items-center font-semibold">
          <p className="text-black text-[16px]">SNS</p>
          <div className="w-8 h-8 bg-[#44A9B2] rounded-full flex items-center justify-center text-white">
            <LuPencil />
          </div>
        </div>
        <Stack gap={20} mt={16}>
          <div className="flex flex-row gap-2 items-center">
            <Image alt="X" src={xIcon} height={44} width={44} />
            <div>
              <p className="text-[#595959] text-[12px]">X アカウント</p>
              <p className="text-[14px]">sushmitaswain123@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image alt="instagram" src={instaIcon} height={44} width={44} />
            <div>
              <p className="text-[#595959] text-[12px]">Instagram アカウント</p>
              <p className="text-[14px]">sushmita_designer</p>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image alt="line" src={lineIcon} height={44} width={44} />
            <div>
              <p className="text-[#595959] text-[12px]">LINE アカウント</p>
              <p className="text-[14px]">Line account ID</p>
            </div>
          </div>
        </Stack>
        <div className="flex flex-col items-center gap-6 mt-10 py-6">
          <div className="w-[100px] h-[100px] rounded-full flex items-center justify-center bg-white relative">
            <div className="absolute right-0 top-0">
              <MdCancel color="#FF5454" size={28} />
            </div>
            <Image alt="" width={60} height={60} src={nativeForLove} />
          </div>
          <p className="text-[#121212] font-bold text-[16px]">
            あなたはまだnative. for Loveのカードを 発行していません
          </p>
          <CustomButton>native. card を発行する</CustomButton>
        </div>
        <div className="flex flex-col items-center gap-6 mt-10 py-6">
          <div className="w-[100px] h-[100px] rounded-full flex items-center justify-center bg-white relative">
            <div className="absolute right-0 top-0">
              <MdCancel color="#FF5454" size={28} />
            </div>
            <Image alt="" width={50} height={50} src={nativeForCareer} />
          </div>
          <p className="text-[#121212] font-bold text-[16px]">
            あなたはまだnative. for Loveのカードを 発行していません
          </p>
          <CustomButton>native. card を発行する</CustomButton>
        </div>
      </div>
      <div className="px-6">
        <p className="text-black font-semibold text-[16px] mb-2">
          Share your native. card
        </p>
        <div className="flex flex-row items-center justify-between">
          <Image alt="x" width={100} height={100} src={xIconlarge} />
          <Image
            alt="instagram"
            width={100}
            height={100}
            src={instaIconlarge}
          />
          <Image alt="line" width={100} height={100} src={lineIconlarge} />
        </div>
      </div>
      <div className="py-6">
        <CustomButton
          color="#DB4E4E"
          icon={<TbLogout2 />}
          containerClassName="w-[90%] m-auto"
          size="lg"
        >
          ログアウト
        </CustomButton>
      </div>
    </Menu>
  );
}
