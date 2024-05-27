import React from "react";
import { Button, Card, Drawer, Stack, Title } from "@mantine/core";
import styles from "./Menu.module.css";
import { IoMdClose } from "react-icons/io";
import { FOOTER_LINKS } from "@/constants/native-home";
import Link from "next/link";
import { svgLogo } from "@/assets/brand";

const MenuContentCard = ({ children }: { children: React.ReactNode }) => {
  return <Card className={styles.contentCard}>{children}</Card>;
};

interface PropTypes {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  withoutFooter?: boolean;
}

const Menu = ({
  onClose,
  open,
  children,
  title,
  withoutFooter = false,
}: PropTypes) => {
  return (
    <Drawer
      opened={open}
      onClose={onClose}
      position="top"
      offset={0}
      size={"100%"}
      styles={{
        content: { background: "#eee" },
      }}
      withCloseButton={false}
      padding={0}
      key={title}
    >
      <Card className={styles.headerCard}>
        <Title order={3}>{title}</Title>
        <Button
          onClick={onClose}
          style={{ background: "none", color: "black", padding: "0px" }}
        >
          <IoMdClose size={24} />
        </Button>
      </Card>
      <Stack gap="sm">
        <Stack gap="sm">{children}</Stack>
        {withoutFooter ? null : (
          <>
            <MenuContentCard>
              <div className="flex flex-col gap-3 py-6">
                {FOOTER_LINKS.map((item: any) => (
                  <Link
                    className="text-sm font-medium"
                    key={item.title}
                    href={item.link}
                  >
                    <p className="text-black">{item.title}</p>
                  </Link>
                ))}
              </div>
            </MenuContentCard>
            <div className="flex flex-col items-center mb-5">
              <img
                className="w-[120px] h-[75px]"
                src={svgLogo.src}
                alt="Logo Img"
              />
            </div>
          </>
        )}
      </Stack>
    </Drawer>
  );
};

export { Menu, MenuContentCard };
