
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
import { skillCard } from "@/lib/types";


type CarouselType = "skills" | "review";


interface CarouselProps {
  cards: skillCard[];
  variant: CarouselType;
}

const Carousel: React.FC<CarouselProps> = ({cards, variant}) => {

  return (
    <UIDCarousel className="md:w-full px-5 max-w-sm lg:max-w-full">
      <CarouselContent className="-ml-1">
        {cards?.map((card, idx) => (
          <CarouselItem key={idx} className="w-full basis-3/3  lg:basis-1/3">
            <InfoCard
            title={card.CardTitle}
            description={card.CardDescription}
            variant={variant}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious>
        <ArrowLeft />
      </CarouselPrevious>
      <CarouselNext>
        <ArrowRight />
      </CarouselNext>
    </UIDCarousel>
  );
};

export default Carousel;
