"use client";
import Logo from "@/assets/brand/Logo";
import CustomButton from "@/components/Atoms/CustomButton";
import InputWithLabel from "@/components/Atoms/InputWithLabel";
import { Stack } from "@mantine/core";

export default function ResetPassword() {
  return (
    <div className="bg-[#F5F5F5] h-svh">
      <div className="w-full h-20 bg-white flex items-center justify-center">
        <Logo />
      </div>
      <Stack gap={"xs"} className="px-[16px] py-[24px]">
        <p className="text-[24px] font-bold text-[#121212]">
          パスワードの再設定
        </p>
        <p className="text-[14px] text-[#595959] mb-5">
          sushmitswain@gmailcomの新しいパスワードを設定してください
        </p>
        <Stack gap="xs">
          <InputWithLabel
            label="メールアドレス"
            onChange={(data) => {}}
            value={""}
            type="password"
          />
          <InputWithLabel
            label="パスワード"
            onChange={(data) => {}}
            value={""}
            type="password"
          />
          <p className="text-[#44a9b2] text-[14px] font-semibold cursor-pointer">
            パスワードを忘れた場合
          </p>
          <CustomButton containerClassName="w-full mt-3">
            Reset Password
          </CustomButton>
        </Stack>
      </Stack>
    </div>
  );
}
