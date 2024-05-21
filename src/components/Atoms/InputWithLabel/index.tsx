import { Input, PasswordInput, Stack } from "@mantine/core";
import { BsEyeFill } from "react-icons/bs";
import styles from "./InputWithLabel.module.css";

interface PropTypes {
  name: string;
  label: string;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "password";
}

const InputWithLabel = ({
  name,
  label,
  onChange,
  value,
  type = "text",
}: PropTypes) => {
  return (
    <Stack gap={"xs"}>
      <p className="text-[#595959] text-[14px] font-[400] mb-[-6px]">{label}</p>
      {type === "text" ? (
        <Input
          name={name}
          type={type}
          value={value}
          classNames={{
            input: styles.input,
          }}
          onChange={onChange}
        />
      ) : null}
      {type === "password" ? (
        <PasswordInput
          type={type}
          value={value}
          classNames={{
            input: styles.input,
            innerInput: styles.innerInput,
          }}
          onChange={onChange}
        />
      ) : null}
    </Stack>
  );
};

export default InputWithLabel;
