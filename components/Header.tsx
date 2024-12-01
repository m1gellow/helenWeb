'use client'
import Image from "next/image";
import Teacher from "../app/Teacher.jpg";
import { Button } from "./ui/button";
import { motion } from 'framer-motion';


const Header = () => {
  return (
    <div className="flex-center max-w-screen-2xl mt-72 px-4 lg:mt-12 h-screen w-full mx-auto">
      <div className="lg:flex-row  flex flex-col lg:gap-8 gap-20 items-center ">
        <motion.div
         initial={{ opacity: 0, y: 50 }} // Initial state: invisible and slightly below
         whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
         transition={{ duration: 0.8, ease: 'easeOut' }} 
        className="flex-1 flex flex-col items-center lg:items-start gap-8">
          <span className="base-regular">-Hi, меня зовут Елена</span>
          <h1 className="heading1">I am here for your personal business</h1>
          <p className="pharagraph lg:w-2/3">
            Enjoy team diversity and increase their networks among others people
            in various fields by
          </p>
          <div className="flex gap-3 flex-col lg:flex-row">
            <Button variant={"default"}>Связаться </Button>
            <Button variant={"outline"}>Блог</Button>
          </div>
        </motion.div>

        <Image
          width={607}
          height={630}
          alt="Main image"
          src={Teacher}
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Header;
