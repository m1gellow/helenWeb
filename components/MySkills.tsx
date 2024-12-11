import React from "react";
import SectionName from "./SectionName";
import Image from "next/image";
import Carousel from "./SkillsCarousel";
import { getSkillsData } from "@/sanity/actions";
import { skillsData } from "@/lib/types";
import LinkButton from "./LinkButton";

export const revalidate = 30;

const MySkills = async() => {

  const data: skillsData = await getSkillsData();



  return (
    <div className="max-w-screen-2xl mx-auto flex-center w-full sectionMargins">
      <div className="flex-col flex gap-10 ">
        <SectionName
          variant="start"
          title={data.sectionTitle}
          description={data.sectionDescription}
          sectionName="Skills"
        />
        <div className="flex flex-col items-center justify-center px-4 lg:flex-row gap-10">
          <div className="relative w-full h-[500px] "> 
            <Image
              src={data.image}
              alt="My skills image"
              fill
              loading="lazy"
              style={{ objectFit: 'cover' }}
              className="rounded-xl"
            />
          </div>

          <div className="lg:w-1/3 w-full items-center lg:items-start flex flex-col gap-4">
            <h2 className="heading2 text-center lg:text-start">
             {data.title}
            </h2>

            <p className="body-text lg:text-start text-center">
             {data.description}
            </p>
            <LinkButton text={data.Button} href={data.ButtonLink} variant="default"/>
          </div>
        </div>

        <div className="flex flex-col  justify-center items-center gap-4">
          <p className="paragraph">Листай</p>
          <Carousel content={data.skillsCards} />
        </div>
      </div>
    </div>
  );
};

export default MySkills;