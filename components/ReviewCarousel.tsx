
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
import { reviewCard} from "@/lib/types";


interface CarouselProps {
  content: reviewCard[]
}

const ReviewCarousel: React.FC<CarouselProps> = ({content}) => {

  return (
    <UIDCarousel className="md:w-full px-5 max-w-sm h-full  lg:max-w-full">
      <CarouselContent className="-ml-1">
        {content?.map((info, idx) => (
        
          <CarouselItem key={idx} className="w-full basis-3/3  lg:basis-2/3">
               <InfoCard
               variant="review"
            title={info.name}
            description={"получилось очень классно, удачно нашли нашего репетитора классно советую всем кто есть рядом сейчас хотелось бы попрпосить сделать глубокий вдох и расслабиться. так как работы будет много думаю что мы сможет пройти через все трудности, я в вас верю друзья мои"}
            image={info.image}
            />
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

export default ReviewCarousel;
