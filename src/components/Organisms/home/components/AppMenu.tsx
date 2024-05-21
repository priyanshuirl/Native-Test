import CustomButton from "@/components/Atoms/CustomButton";
import { Menu, MenuContentCard } from "@/components/Molecules/menu/Menu";
import { NATIVE_CARD_TYPES } from "@/constants/native-home";
import { Stack } from "@mantine/core";
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import GenerateNativeCardModal from "../../cardGeneration/GenerateNativeCardModal";

interface PropTypes {
  open: boolean;
  onClose: () => void;
}

const AppMenu = ({ onClose, open }: PropTypes) => {
  const [openGenerationModal, setOpenGenerationModal] =
    useState<boolean>(false);

  const toggleMenuOpenClose = () => {
    onClose();
    setOpenGenerationModal((prev) => !prev);
  };

  return (
    <>
      <GenerateNativeCardModal
        open={openGenerationModal}
        onClose={toggleMenuOpenClose}
      />
      <Menu onClose={onClose} open={open} title="Menu">
        <MenuContentCard>
          <Stack gap={"md"}>
            <p className="text-[#595959] text-[14px] font-bold">PROFILE</p>
            <CustomButton containerClassName="w-[200px]">
              プロフィール登録
            </CustomButton>
          </Stack>
        </MenuContentCard>
        <MenuContentCard>
          <Stack gap={"md"} style={{ width: "100%" }}>
            <p className="text-[#595959] text-[14px] font-bold">
              native. card を発行する
            </p>
            <Stack gap={"lg"} style={{ width: "100%" }}>
              {NATIVE_CARD_TYPES?.map(({ img, id, menuItemText }) => {
                return (
                  <div
                    className="flex items-center justify-between w-full"
                    key={id}
                    onClick={toggleMenuOpenClose}
                  >
                    <div className="flex items-center gap-6">
                      <img
                        src={img}
                        className="w-[53px] h-[53px] border-r-[2px]"
                        style={{
                          boxShadow:
                            "0px 0.667px 2.667px 0px rgba(0, 0, 0, 0.12)",
                        }}
                      />
                      <p className="text-[18px] font-semibold">
                        {menuItemText}
                      </p>
                    </div>
                    <GoArrowRight size={24} />
                  </div>
                );
              })}
            </Stack>
          </Stack>
        </MenuContentCard>
      </Menu>
    </>
  );
};

export default AppMenu;
