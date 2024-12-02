import React from "react";
import SectionName from "./SectionName";
import Teacher from "../app/Teacher.jpg";
import Image from "next/image";
import { Button } from "./ui/button";
import Carousel from "./CarouselComponent";

const info = [
  {
    title: "hello",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "hello",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "привет",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const MySkills = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 flex-center w-full sectionMargins">
      <div className="flex-col flex gap-10">
        <SectionName
          variant="start"
          title="Мои навыки!"
          description="Enjoy team diversity and increase their networks among others people in various fields by"
          sectionName="Skills"
        />
        <div className=" flex flex-col lg:flex-row gap-10">
          <div className="relative h-[300px] lg:h-[400px] lg:w-2/3">
            <Image
              src={Teacher}
              alt="My skills image"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>

          <div className="lg:w-1/3 items-center lg:items-start flex flex-col gap-4">
            <h2 className="heading2 text-center  lg:text-start">
              I am teacher and make ultimate things
            </h2>

            <p className="body-text lg:text-start text-center">
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

        <div className="flex flex-col justify-center items-center gap-4">
          <p className="pharagraph">Листай</p>
          <Carousel info={info} />
        </div>
      </div>
    </div>
  );
};

export default MySkills;
