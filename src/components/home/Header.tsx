import Logo from "@/assets/brand/Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPerson } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-5 py-4 bg-white">
      <Logo />
      <div className="flex items-center gap-4 text-[20px]">
        <IoPerson />
        <GiHamburgerMenu />
      </div>
    </div>
  );
};

export default Header;
