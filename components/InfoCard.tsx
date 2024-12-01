import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Pen } from "lucide-react";

interface InfoCardProps {
  title: string;
  icon?: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = (props) => {

    const {title, description} = props

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <Pen size={47}/>
        <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default InfoCard;
