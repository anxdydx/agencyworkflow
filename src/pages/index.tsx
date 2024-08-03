import React, { useRef } from "react";
import fonts from "@/utils/fonts";
import { Button } from "@nextui-org/react";
import { motion, useTransform, useScroll } from "framer-motion";
import { HiOutlineBeaker } from "react-icons/hi";
import { HiOutlineCircleStack } from "react-icons/hi2";

const TextRevealer = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <motion.div className={className}>
        <p>{children}</p>
      </motion.div>
    </>
  );
};

const index = () => {
  return (
    <>
     
    </>
  );
};

export default index;
