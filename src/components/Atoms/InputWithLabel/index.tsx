import { Input, PasswordInput, Stack } from "@mantine/core";
import styles from "./InputWithLabel.module.css";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

interface PropTypes {
  name: string;
  label: string;
  value: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDateChange?: (value: any) => void;
  type?: "text" | "password" | "date";
}

const InputWithLabel = ({
  name,
  label,
  onChange,
  value,
  type = "text",
  onDateChange,
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
      {type === "date" ? (
        <DatePicker
          name={name}
          value={value}
          onChange={onDateChange}
          className={styles.input}
        />
      ) : null}
    </Stack>
  );
};

export default InputWithLabel;
