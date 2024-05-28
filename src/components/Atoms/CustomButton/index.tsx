"use client";
import React from "react";
import { Button, MantineSize } from "@mantine/core";
import styles from "./CustomButton.module.css";

export default function CustomButton({
  children,
  onClick,
  containerClassName,
  size = "md",
  icon,
  color = "black",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  containerClassName?: string;
  size?: MantineSize;
  icon?: React.ReactNode;
  color?: string;
}) {
  return (
    <div className={containerClassName}>
      <Button
        onClick={onClick}
        color={color}
        fullWidth
        size={size}
        classNames={{
          root: styles.root,
          label: styles.label,
        }}
        leftSection={icon}
      >
        {children}
      </Button>
    </div>
  );
}
