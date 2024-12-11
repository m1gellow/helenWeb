"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { HeaderData } from "@/lib/types";
import { pageConfig } from "@/app/page.config";
import { Button } from "./ui/button";
import Link from "next/link";

interface HeaderProps {
  data: HeaderData;
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
    <div className="flex-center max-w-screen-2xl mt-72 px-4 lg:mt-12 h-screen w-full mx-auto">
      <div className="flex relative xl:flex-row flex-col lg:gap-8 gap-20 items-center ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start gap-8"
        >
          <span className="base-regular">{data.greeting}</span>
          <h1 className="heading1">{data.title}</h1>
          <p className="pharagraph lg:w-2/3">{data.headerDescription}</p>
          <div className="flex-center gap-3  flex-wrap">
            <Link href={pageConfig.blog}>
              <Button variant={"default"}>{data.mainButtonText}</Button>
            </Link>
            <Link href={pageConfig.blog}>
              <Button variant={"outline"}>{data.secondaryButtonText}</Button>
            </Link>
          </div>
        </motion.div>

        <div className="relative w-full h-[400px]">
          <Image
            src={data.image}
            alt="My skills image"
            fill
            priority
            style={{ objectFit: "cover" }}
            className="rounded-xl"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
