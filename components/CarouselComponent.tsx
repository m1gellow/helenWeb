import React from "react";
import {
    Carousel as UIDCarousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import InfoCard from "./InfoCard";


type variant  = "review" | "skills"

interface InfoItem {
    title: string;
    description: string;
}

type InfoArray = InfoItem[];

interface CarouselProps {
    info: InfoArray; 
    variant?: string; 
}

const Carousel: React.FC<CarouselProps> = ({ info, variant}) => {
    return (
      <UIDCarousel
      className="md:w-full max-w-sm md:max-w-full"
    >
      <CarouselContent>
        {info.map((inf, index) => (
          <CarouselItem key={index} className={`md:basis-1/2 lg:basis-1/3 ${variant === "review" && "basis-2"}`}>
            <div className="p-1">
              <InfoCard  title={inf.title} description={inf.description}/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex"/>
      <CarouselNext className="hidden md:flex"/>
    </UIDCarousel>
    );
};

export default Carousel;