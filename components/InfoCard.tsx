import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Pen } from "lucide-react";
import { cn } from "@/lib/utils";

type InfoCardVariant = "skills" | "review";

interface InfoCardProps {
  title: string;
  icon?: string;
  description: string;
  variant: InfoCardVariant;
}

const InfoCard: React.FC<InfoCardProps> = (props) => {
  const { title, description, variant, icon } = props;

  const baseStyle = "border-none rounded-[35px]   duration-75 shadow-md";

  return (
    <Card
      className={cn(
        baseStyle,
        variant === "skills"
          ? "max-w-[350px] md:max-w-[426px]"
          : "sm:max-w-full md:max-w-max"
      )}
    >
      <CardHeader className="flex flex-col gap-[30px]">
        {icon && <Pen size={47} />}

        <CardTitle>
          <h2 className="heading2">{title}</h2>
        </CardTitle>
        <CardDescription>
          <p className="body-text">{description}</p>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default InfoCard;
