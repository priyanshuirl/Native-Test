import Link from "next/link";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";

interface IBackHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  backUrl: string;
  title?: string;
}

const BackHeader = ({
  backUrl,
  title,
  className,
  ...props
}: IBackHeaderProps) => {
  const classes =
    "px-5 py-4 flex items-center gap-4 bg-white text-xl font-bold";

  return (
    <div className={classes} {...props}>
      <Link href={backUrl}>
        <IoMdArrowBack size={24} />
      </Link>
      <p>{title}</p>
    </div>
  );
};

export default BackHeader;
