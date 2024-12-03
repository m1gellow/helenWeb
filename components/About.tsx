
import React from "react";
import Teacher from "../app/Teacher.jpg";
import Image from "next/image";
import { Button } from "./ui/button";
import SectionName from "./SectionName";


const About = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 mt-52 flex-center w-full md:sectionMargins">
      <div className="flex-col flex  gap-[100px]">
        <SectionName
          variant="center"
          title="Обо мне!"
          description="Enjoy team diversity and increase their networks among others people in various fields by"
          sectionName="About"
        />
        <div className="flex flex-col lg:flex-row lg:flex-center  gap-10">
          <div className="lg:w-1/2">
            <Image src={Teacher} alt="about image" className="rounded-xl" />
          </div>
          <div className="lg:flex-1 flex-col flex gap-5">
            <div className="sectionCard">
              <h2 className="heading2">
                I am teacher and make ultimate things
              </h2>
            </div>
            <div className="lg:flex-1 sectionCard  flex-col flex gap-4">
              <p className="base-regular">
                Enjoy team diversity and increase their networks among others
                people in various fields by Enjoy team diversity and increase
                their networks among others people in various fields by Enjoy
                team diversity and increase their networks among others people
                in various fields by Enjoy team diversity and increase their
                networks among{" "}
              </p>
              <Button variant={"default"} className="">
                Связаться
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
