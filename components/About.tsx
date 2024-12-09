import React from "react";
import Image from "next/image";
import SectionName from "./SectionName";
import { getAboutMeData } from "@/sanity/actions";
import LinkButton from "./LinkButton";
import { AboutMeData } from "@/lib/types";

export const revalidate = 30;

const About = async () => {
  const data: AboutMeData = await getAboutMeData();

  if(data){
     return (
    <div className="max-w-screen-2xl mx-auto px-4 mt-80 flex-center w-full md:sectionMargins">
      <div className="flex-col flex  gap-[100px]">
        <SectionName
          variant="center"
          title={data.sectionTitle}
          description={data.sectionDescription}
          sectionName="About"
        />
        <div className="flex flex-col lg:flex-row lg:flex-center  gap-10">
          <div className="lg:w-1/2 h-[700px] relative">
            <Image
              src={data.image}
              alt="about image"
              style={{ objectFit: 'cover' }}
              fill
              className="rounded-xl"
            />
          </div>
          <div className="lg:flex-1 flex-col flex gap-5">
            <div className="sectionCard">
              <h2 className="heading2">{data.title}</h2>
            </div>
            <div className="lg:flex-1 sectionCard  flex-col flex gap-4">
              <p className="base-regular">{data.description}</p>
              {data.aboutButton &&  <LinkButton variant="default" href={data.ButtonLink} text={data.aboutButton}/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }else{
    return null;
  }
  

 
};

export default About;
