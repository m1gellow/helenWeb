import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <main className="flex-center paddigs mx-auto w-full max-w-screen-2xl flex-col">
      <section className="flex relative w-full flex-col xl:flex-row h-screen flex-center  lg:gap-8 gap-20 items-center">
        <div className="flex flex-col gap-8 relative w-full">
          <Skeleton className="w-1/3 bg-gray-300 h-[60px] rounded-lg" />
          <Skeleton className="w-full bg-gray-300 h-[200px] rounded-lg" />
          <Skeleton className="w-2/3 bg-gray-300 h-[100px] rounded-lg" />
          <div className="flex flex-row gap-3  flex-wrap">
            <Skeleton className="w-[200px] bg-gray-300 h-[60px] rounded-lg" />
          <Skeleton className="w-[200px] bg-gray-300 h-[60px] rounded-lg" />
          </div>
          
        </div>

        <Skeleton className="w-full bg-gray-300 h-[500px] rounded-lg" />
      </section>
      <section className="max-w-screen-2xl mx-auto px-4 mt-80 flex-center w-full md:sectionMargins">
      <div className="flex-col flex gap-[100px]">
        <Skeleton className="w-1/4 h-8 bg-gray-300 rounded" /> {/* Placeholder for Section Name */}
        <div className="flex flex-col lg:flex-row lg:flex-center gap-10">
          <div className="lg:w-1/2 h-[700px] relative">
            <Skeleton className="w-full h-full bg-gray-300 rounded-xl" /> {/* Placeholder for Image */}
          </div>
          <div className="lg:flex-1 flex-col flex gap-5">
            <div className="sectionCard">
              <Skeleton className="w-3/4 h-8 bg-gray-300 rounded" /> {/* Placeholder for Title */}
            </div>
            <div className="lg:flex-1 sectionCard flex-col flex gap-4">
              <Skeleton className="w-full h-20 bg-gray-300 rounded" /> {/* Placeholder for Description */}
              <Skeleton className="w-1/4 h-10 bg-gray-300 rounded" /> {/* Placeholder for Button */}
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
};

export default loading;
