
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


interface CarouselProps {
  content: skillCard[]
}

const SkillsCarousel: React.FC<CarouselProps> = ({content}) => {

  return (
    <UIDCarousel className="md:w-full px-5 max-w-sm  lg:max-w-full">
      <CarouselContent className="-ml-1">
        {content?.map((info, idx) => (
        
          <CarouselItem key={idx} className="w-full basis-3/3  lg:basis-1/3">
               <InfoCard
              variant="skills"
              title={info.CardTitle}
              description={info.CardDescription} 
              image={""}            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="md:flex hidden">
        <ArrowLeft />
      </CarouselPrevious>
      <CarouselNext className="md:flex hidden">
        <ArrowRight />
      </CarouselNext>
    </UIDCarousel>
  );
};

export default SkillsCarousel;
