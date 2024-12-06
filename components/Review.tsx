import React from "react";
import SectionName from "./SectionName";
// import Carousel from "./CarouselComponent";

// const reviews = [
//   {
//     title: "hello",
//     description:
//       "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   },
//   {
//     title: "hello",
//     description:
//       "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   },
//   {
//     title: "привет",
//     description:
//       "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   },
// ];

const Review = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4  flex-center w-full sectionMargins">
      <div className="flex-col flex  gap-[100px]">
        <SectionName
          variant="center"
          title="Что люди говорят обо мне?"
          sectionName="Отзывы"
        />
        {/* <div className="flex-center">
          <Carousel variant="review" content={reviews} />
        </div> */}
      </div>
    </div>
  );
};

export default Review;
