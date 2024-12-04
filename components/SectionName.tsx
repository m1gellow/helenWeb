"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

type SectionNameVariant = "start" | "center" | "end";

interface SectionNameProps {
  title: string;
  sectionName: string;
  description?: string;
  variant: SectionNameVariant;
}

const SectionName: React.FC<SectionNameProps> = (props) => {
  const baseClasses = "flex flex-col justify-center mx-auto w-full gap-4 ";

  const variantClasses = {
    start:
      " flex items-center justify-center xl:items-start md:justify-start ",
    center: " flex items-center justify-center text-center",
    end: " flex items-end text-end",
  };

  const { sectionName, title, description, variant } = props;

  return (
    <>
      {props ? (
        <motion.div
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={cn(baseClasses, variantClasses[variant])}
        >
          <p className="base-regular">{sectionName}</p>
          <h1 className="heading1">{title}</h1>
          <h2 className="suptitle">{description}</h2>
        </motion.div>
      ) : null}
    </>
  );
};

export default SectionName;
