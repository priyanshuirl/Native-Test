"use client";
import React from "react";
import { Button, MantineSize } from "@mantine/core";
import styles from "./CustomButton.module.css";

export default function CustomButton({
  children,
  onClick,
  containerClassName,
  size = "md",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  containerClassName?: string;
  size?: MantineSize;
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
      >
        {children}
      </Button>
    </div>
  );
}
