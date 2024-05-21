import CustomButton from "@/components/Atoms/CustomButton";
import CustomButtonLight from "@/components/Atoms/CustomButtonLight";
import InputWithLabel from "@/components/Atoms/InputWithLabel";
import { Avatar, Stack } from "@mantine/core";
import { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";

const PROFILE_PICTURE_INPUT = "PROFILE_PICTURE_INPUT";

const Register = () => {
  const [registerFormState, setRegisterFormState] = useState<any>();
  const [profileURLPreview, setProfileURLPreview] = useState<string>();

  const handleRegisterFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterFormState((prev: any) => {
      return { ...prev, [e.target.name]: [e.target.value] };
    });
  };

  const handleProfilePictureUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files) return;
    setProfileURLPreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleRemoveProfilePicture = () => {
    setProfileURLPreview("");
  };

  return (
    <Stack gap={"xs"} className="px-[16px] py-[24px]">
      <p className="text-[24px] font-bold text-[#121212]">新規登録</p>
      <p className="text-[14px] text-[#595959] mb-2">
        以下の情報を入力し、
        <br />
        native.のアカウントを作成してください。
      </p>
      <p className="text-[#0C3747] text-[14px] font-semibold mb-2">
        プロフィール写真(native. cardに挿入されます）
      </p>
      <div className="flex flex-row items-center gap-4 my-2 ">
        <Avatar src={profileURLPreview} alt="S" size={"xl"} />
        <div>
          <input
            style={{ display: "none" }}
            type="file"
            id={PROFILE_PICTURE_INPUT}
            onChange={handleProfilePictureUpload}
          />
          <div
            className="grid gap-3"
            style={{ gridTemplateColumns: "2fr 1fr" }}
          >
            <CustomButtonLight startDecorator={<FiUpload size={16} />}>
              <label htmlFor={PROFILE_PICTURE_INPUT}>写真をアップロード</label>
            </CustomButtonLight>
            <CustomButtonLight
              startDecorator={<RiDeleteBin2Line size={16} />}
              onClick={handleRemoveProfilePicture}
            >
              削除
            </CustomButtonLight>
          </div>
          <p className="text-[#444] text-[9px] mt-2">
            {" "}
            . *.png、*.jpegファイル 10MB以内 400px × 400px以上
          </p>
        </div>
      </div>
      <Stack gap="xs">
        <InputWithLabel
          label="名前(native. cardに挿入されます）"
          onChange={handleRegisterFormChange}
          value={registerFormState?.firstName}
          name="firstName"
        />
        <InputWithLabel
          label="メールアドレス"
          onChange={handleRegisterFormChange}
          value={registerFormState?.lastName}
          name="lastName"
        />
        <InputWithLabel
          label="パスワード"
          onChange={handleRegisterFormChange}
          value={registerFormState?.password}
          type="password"
          name={"password"}
        />
        <InputWithLabel
          label="パスワード再入力"
          onChange={handleRegisterFormChange}
          value={registerFormState?.confirmPassword}
          type="password"
          name={"confirmPassword"}
        />
        <CustomButton containerClassName="w-full mt-3">
          アカウント作成
        </CustomButton>
      </Stack>
      <p className="text-[#374151] text-[12px] font-semibold my-5 text-center">
        アカウントを作成することにより、
        <span className="text-[#44A9B2]">利用規約</span>および
        <span className="text-[#44A9B2]">プライバシーポリシー</span>
        に同意したものとみなされます
      </p>
    </Stack>
  );
};

export default Register;
