import React from "react";
import SectionName from "./SectionName";
import { getReviewData } from "@/sanity/actions";
import ReviewCarousel from "./ReviewCarousel";




const Review = async() => {

  const data = await getReviewData();

  return (
    <div className="max-w-screen-2xl mx-auto px-4  flex-center w-full sectionMargins">
      <div className="flex-col flex  gap-[100px]">
        <SectionName
          variant="center"
          title="Что люди говорят обо мне?"
          sectionName="Отзывы"
        />
        <div className="flex-center">
          <ReviewCarousel content={data} />
        </div>
      </div>
    </div>
  );
};

export default Review;
