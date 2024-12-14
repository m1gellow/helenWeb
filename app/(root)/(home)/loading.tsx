import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <main className="flex-center paddigs mx-auto w-full max-w-screen-2xl flex-col">
      <section className="flex relative w-full flex-center flex-col xl:flex-row h-screen flex-center  lg:gap-8 gap-20 items-center">
        <div className="flex flex-col items-center justify-center md:items-start md:justify-start gap-8 relative w-full">
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
    </main>
  );
};

export default loading;
