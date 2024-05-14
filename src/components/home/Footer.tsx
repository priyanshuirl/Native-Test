import React from "react";
import { Button, TextInput } from "@mantine/core";
import Link from "next/link";
import { svgLogo } from "@/assets/brand";
import { FaLongArrowAltRight } from "react-icons/fa";
import { CONTACT_US_MEDIA, FOOTER_LINKS } from "@/constants/native-home";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className="px-5 pt-[57px] pb-[52px] bg-black text-white">
      <div className="px-4">
        <p className="font-extrabold">native.</p>
        <div className="flex flex-col gap-3 py-6">
          {FOOTER_LINKS.map((item: any) => (
            <Link
              className="text-sm font-medium"
              key={item.title}
              href={item.link}
            >
              <p className="text-white">{item.title}</p>
            </Link>
          ))}
        </div>

        {/* Contact US */}
        <div className="pt-[22px] pb-10">
          <p className="mb-2">Contact Us</p>
          <div className="flex gap-4 p-4">
            {CONTACT_US_MEDIA.map((item: any) => (
              <Link href={item.link} key={item.id}>
                <div className="bg-[#1C1C21] text-white p-3 rounded-full">
                  {item.Icon}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Email Subscription */}
      <div>
        <p className="text-2xl mb-6">Get the latest from native.</p>
        <TextInput
          rightSection={<FaLongArrowAltRight size={20} color="#fff" />}
          placeholder="Email address"
          classNames={{
            input: styles.input,
          }}
        />
      </div>

      <div className="flex flex-col items-center pt-[42px] gap-[34px]">
        <img
          className="invert w-[188px] h-[75px]"
          src={svgLogo.src}
          alt="Logo Img"
        />
        <p className="text-[10px] text-[#A1A1AA] text-center">
          © 2023 native. as you are Ltd. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
