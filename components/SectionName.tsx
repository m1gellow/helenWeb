import { cn } from "@/lib/utils";
import React from "react";

type SectionNameVariant = "start" | "center" | "end"

interface SectionNameProps {
  title: string;
  sectionName: string;
  description: string;
  variant: SectionNameVariant;
}

const SectionName: React.FC<SectionNameProps> = (props) => {

  const baseClasses = "flex flex-col justify-center"

  const variantClasses = {
    start: " flex items-start justify-start text-start",
    center: " flex items-center justify-center text-center",
    end: " flex items-end text-end",

  }

  const { sectionName, title, description, variant } = props;




  return (
    <>
      {props ? (
        <div className={cn(baseClasses, variantClasses[variant])}>
          <p className="base-regular">{sectionName}</p>
          <h1 className="heading1">{title}</h1>
          <h2 className="suptitle">{description}</h2>
        </div>
      ) : null}
    </>
  );
};

export default SectionName;
