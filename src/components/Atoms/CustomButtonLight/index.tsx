"use client";
import React from "react";
import { Button, MantineSize } from "@mantine/core";
import styles from "./CustomButtonLight.module.css";

export default function CustomButtonLight({
  children,
  onClick,
  containerClassName,
  size = "md",
  startDecorator,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  containerClassName?: string;
  size?: MantineSize;
  startDecorator?: React.ReactNode;
}) {
  return (
    <div className={containerClassName}>
      <Button
        onClick={onClick}
        color="black"
        fullWidth
        size={size}
        classNames={{
          root: styles.root,
          label: styles.label,
        }}
        leftSection={startDecorator}
      >
        {children}
      </Button>
    </div>
  );
}
