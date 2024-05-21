import Logo from "@/assets/brand/Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPerson } from "react-icons/io5";
import { useState } from "react";
import { Button } from "@mantine/core";
import AppMenu from "./components/AppMenu";
import AccountMenu from "./components/AccountMenu";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openAccount, setOpenAccount] = useState<boolean>(false);

  const toggleMenuOpenClose = () => {
    setOpenMenu((prev) => !prev);
  };

  const toggleAccountOpenClose = () => {
    setOpenAccount((prev) => !prev);
  };

  return (
    <>
      <AppMenu onClose={toggleMenuOpenClose} open={openMenu} />
      <AccountMenu onClose={toggleAccountOpenClose} open={openAccount} />
      <div className="flex items-center justify-between px-5 py-4 bg-white">
        <Logo />
        <div className="flex items-center gap-4 text-[20px]">
          <Button
            onClick={toggleAccountOpenClose}
            style={{ background: "none", color: "black", padding: "0px" }}
          >
            <IoPerson size={22} />
          </Button>
          <Button
            onClick={toggleMenuOpenClose}
            style={{ background: "none", color: "black", padding: "0px" }}
          >
            <GiHamburgerMenu size={22} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
