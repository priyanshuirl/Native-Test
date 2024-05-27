import CustomButton from "@/components/Atoms/CustomButton";
import InputWithLabel from "@/components/Atoms/InputWithLabel";
import { Stack } from "@mantine/core";
import { useState } from "react";

const ResetPassword = ({
  handleShowHideResetPassword,
}: {
  handleShowHideResetPassword: () => void;
}) => {
  const [email, setEmail] = useState<string>();
  return (
    <Stack gap={"xs"} className="px-[16px] py-[24px]">
      <p className="text-[24px] font-bold text-[#121212]">パスワードの再設定</p>
      <p className="text-[14px] text-[#595959] mb-5">
        ご登録いただいているメールアドレス宛に再設定用のURLを送付いたします。
      </p>
      <Stack gap="xs">
        <InputWithLabel
          label="メールアドレス"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name={"email"}
        />
        <CustomButton containerClassName="w-full mt-1">
          メールを送信する
        </CustomButton>
        <div className="w-full" onClick={handleShowHideResetPassword}>
          <p className="text-center text-[14px] mt-2 font-semibold">戻る</p>
        </div>
      </Stack>
    </Stack>
  );
};

const Login = () => {
  const [showResetPassword, setShowResetPassword] = useState<boolean>(false);
  const [loginFormState, setLoginFormState] = useState<any>();

  const handleLoginFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginFormState((prev: any) => {
      return { ...prev, [e.target.name]: [e.target.value] };
    });
  };

  const handleShowHideResetPassword = () => {
    setShowResetPassword((prev) => !prev);
  };

  return showResetPassword ? (
    <ResetPassword handleShowHideResetPassword={handleShowHideResetPassword} />
  ) : (
    <Stack gap={"xs"} className="px-[16px] py-[24px]">
      <p className="text-[24px] font-bold text-[#121212]">
        Login to <span className="text-[#44a9b2]">native.</span>
      </p>
      <p className="text-[14px] text-[#595959] mb-5">
        Please login to your account with registered email address
      </p>
      <Stack gap="xs">
        <InputWithLabel
          label="メールアドレス"
          onChange={handleLoginFormChange}
          value={loginFormState?.email}
          name={"email"}
        />
        <InputWithLabel
          label="パスワード"
          onChange={handleLoginFormChange}
          value={loginFormState?.password}
          type="password"
          name={"password"}
        />
        <p
          className="text-[#44a9b2] text-[14px] font-semibold cursor-pointer"
          onClick={handleShowHideResetPassword}
        >
          パスワードを忘れた場合
        </p>
        <CustomButton containerClassName="w-full mt-3">ログイン</CustomButton>
      </Stack>
    </Stack>
  );
};

export default Login;
