import React from "react";
import SectionName from "./SectionName";
import Teacher from "../app/Teacher.jpg";
import Image from "next/image";
import { Button } from "./ui/button";
import InfoCard from "./InfoCard";


const MySkills = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4  flex-center w-full sectionMargins">
      <div className="flex-col flex gap-[50px]">
        <SectionName
          variant="start"
          title="Мои навыки!"
          description="Enjoy team diversity and increase their networks among others people in various fields by"
          sectionName="Skills"
        />
        <div className=" flex flex-col lg:flex-row gap-10">
          <div className="relative h-[500px] lg:h-[400px] lg:w-2/3 ">
            <Image
              src={Teacher}
              alt="My skills image"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>

          <div className="lg:w-1/3 items-center lg:items-start flex flex-col gap-4">
            <h2 className="heading2">I am teacher and make ultimate things</h2>

            <p className="body-text">
              Enjoy team diversity and increase their networks among others
              people in various fields by Enjoy team diversity and increase
              their networks among others people in various fields by Enjoy team
              diversity and increase their networks among others people in
              various fields by Enjoy team diversity and increase their networks
              among{" "}
            </p>
            <Button variant={"default"} className="">
              Связаться
            </Button>
          </div>
        </div>

        <div className=" gap-10 flex-center flex-wrap">
            <InfoCard title="About me" description="Enjoy team diversity and increase their networks among others people in various fields by" />
            <InfoCard title="About me" description="Enjoy team diversity and increase their networks among others people in various fields by" />
            <InfoCard title="About me" description="Enjoy team diversity and increase their networks among others people in various fields by" />
        </div>
      </div>
    </div>
  );
};

export default MySkills;
