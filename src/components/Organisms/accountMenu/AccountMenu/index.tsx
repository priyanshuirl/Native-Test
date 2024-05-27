import CustomButton from "@/components/Atoms/CustomButton";
import InputWithLabel from "@/components/Atoms/InputWithLabel";
import { Menu } from "@/components/Molecules/menu/Menu";
import { Divider, Stack } from "@mantine/core";
import Login from "./components/login";
import Register from "./components/register";

interface PropTypes {
  open: boolean;
  onClose: () => void;
}

const AccountMenu = ({ onClose, open }: PropTypes) => {
  return (
    <Menu onClose={onClose} open={open} title="Account">
      <Login />
      <Divider />
      <Register />
    </Menu>
  );
};

export default AccountMenu;
