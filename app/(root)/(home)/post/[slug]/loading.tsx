import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
    return (
      <div className="flex-center max-w-screen-2xl mt-[200px] px-4 w-full mx-auto">
        <div className="flex flex-col gap-12 items-center justify-center">
          <Skeleton className="w-1/4 h-6 bg-gray-300 rounded" /> {/* Placeholder for Blog label */}
          <Skeleton className="w-3/4 h-10 bg-gray-300 rounded" /> {/* Placeholder for Title */}
          <div className="relative w-full h-[700px]">
            <Skeleton className="w-full h-full bg-gray-300 rounded-xl" /> {/* Placeholder for Image */}
          </div>
          <div className='max-w-[1000px]'>
            <Skeleton className="w-full h-40 bg-gray-300 rounded" /> {/* Placeholder for Content */}
            <Skeleton className="w-full h-10 bg-gray-300 rounded mt-4" /> {/* Placeholder for additional content */}
          </div>
          <Skeleton className="w-1/4 h-10 bg-gray-300 rounded" /> {/* Placeholder for Button */}
        </div>
      </div>
    );
  };
  
  export default loading;