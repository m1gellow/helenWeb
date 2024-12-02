import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Pen } from "lucide-react";

interface InfoCardProps {
  title: string;
  icon?: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = (props) => {
  const { title, description } = props;

  return (
    <Card className="max-w-[426px] border-none rounded-[35px]   duration-75 shadow-md">
      <CardHeader className="flex flex-col gap-[30px]">
        <Pen size={47} />
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