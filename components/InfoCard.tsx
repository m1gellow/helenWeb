import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";
import Avatar from "./Avatar";

type InfoCardVariant = "skills" | "review";

interface InfoCardProps {
  title: string;
  description: string;
  variant: InfoCardVariant
  image: string;
}

const InfoCard: React.FC<InfoCardProps> = async(props) => {
  const {variant, title, description, image} = props;

  const baseStyle = "border-none rounded-[35px] mb-1  duration-75 shadow-md";

  return (
    <Card className={cn(baseStyle, variant  === "skills" ? "sm:max-w-full md:max-w-max" : "max-w-full md:max-w-full")}>
      <CardHeader>
        {variant === "skills" && (
          <div className="flex flex-col gap-4">
            <CardTitle>
              <h2 className="heading2">{title}</h2>
            </CardTitle>
            <CardDescription>
              <p className="body-text">{description}</p>
            </CardDescription>
          </div>
        ) }
        {variant === "review" && (
          <div className="flex-col flex items-center justify-center gap-8">
              <Avatar src={image}/>
            <CardDescription>
              <p className="base-regular">{description}</p>
            </CardDescription>
            <CardTitle>
              <h2 className="">{title}</h2>
            </CardTitle>
          </div>
        )}
          
      </CardHeader>
    </Card>
  );
};

export default InfoCard;
