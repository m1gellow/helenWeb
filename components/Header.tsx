'use client'
import Image from "next/image";
import Teacher from "../app/Teacher.jpg";
import { Button } from "./ui/button";
import { motion } from 'framer-motion';
import { HeaderData } from "@/lib/types";


interface HeaderProps{
  data: HeaderData
}

const Header: React.FC<HeaderProps> = ({data}) => {

  

  return (
    <div className="flex-center max-w-screen-2xl mt-72 px-4 lg:mt-12 h-screen w-full mx-auto">
      <div className="lg:flex-row  flex flex-col lg:gap-8 gap-20 items-center ">
        <motion.div
         initial={{ opacity: 0, y: 50 }} // Initial state: invisible and slightly below
         whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
         transition={{ duration: 0.8, ease: 'easeOut' }} 
        className="flex-1 flex flex-col items-center lg:items-start gap-8">
          <span className="base-regular">{data.greeting}</span>
          <h1 className="heading1">{data.title}</h1>
          <p className="pharagraph lg:w-2/3">
            {data.headerDescription}
          </p>
          <div className="flex gap-3 flex-col lg:flex-row">
            <Button variant={"default"}>{data.mainButtonText} </Button>
            <Button variant={"outline"}>{data.secondaryButtonText}</Button>
          </div>
        </motion.div>

        <div className="relative  h-[400px] flex-1"> 
            <Image
              src={Teacher}
              alt="My skills image"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
      
      </div>
    </div>
  );
};

export default Header;
