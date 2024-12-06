import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";

type InfoCardVariant = "skills" | "review";

interface InfoCardProps {
  title: string;
  description: string;
  variant: InfoCardVariant
}

const InfoCard: React.FC<InfoCardProps> = async(props) => {
  const {variant, title, description} = props;

  const baseStyle = "border-none rounded-[35px]   duration-75 shadow-md";

  return (
    <Card className={cn(baseStyle, "sm:max-w-full md:max-w-max")}>
      <CardHeader>
        {variant === "skills" ? (
          <div className="flex flex-col gap-4">
            <CardTitle>
              <h2 className="heading2">{title}</h2>
            </CardTitle>
            <CardDescription>
              <p className="body-text">{description}</p>
            </CardDescription>
          </div>
        ) : (
          <div className="flex-col flex gap-4">
            {" "}
            <CardDescription>
              <p className="body-text">{description}</p>
            </CardDescription>
            <CardTitle>
              <h2 className="body-text">{title}</h2>
            </CardTitle>
          </div>
        )}
      </CardHeader>
    </Card>
  );
};

export default InfoCard;
