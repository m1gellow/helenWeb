import React from "react";
import {
  Carousel as UIDCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import InfoCard from "./InfoCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

type CarouselType = "skills" | "review";

interface InfoItem {
  title: string;
  description: string;
}

type InfoArray = InfoItem[];

interface CarouselProps {
  content: InfoArray;
  variant: CarouselType;
}

const Carousel: React.FC<CarouselProps> = ({ content, variant }) => {
  return (
    <UIDCarousel className="md:w-full max-w-sm md:max-w-full">
      <div className=" flex-between md:hidden">
        <ArrowLeft color="gray" />

        <ArrowRight color="gray" />
      </div>

      <CarouselContent>
        {content.map((inf, index) => (
          <CarouselItem
            key={index}
            className={`${variant === "review" ? "md:basis-1/2 lg:basis-1/2" : "md:basis-1/2 lg:basis-1/3"}`}
          >
            <div className="p-1">
              <InfoCard
                title={inf.title}
                description={inf.description}
                variant={variant}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden  md:flex" />
      <CarouselNext className="hidden  md:flex" />
    </UIDCarousel>
  );
};

export default Carousel;
