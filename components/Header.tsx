
import Image from "next/image";
import { HeaderData } from "@/lib/types";
import { pageConfig } from "@/app/page.config";
import { Button } from "./ui/button";
import Link from "next/link";
import { getHeaderData } from "@/sanity/actions";

const Header = async() => {


    const headerData: HeaderData = await getHeaderData();

  return (
    <div className="flex-center max-w-screen-2xl mt-72 px-4 lg:mt-12 h-screen w-full mx-auto">
      <div className="flex relative xl:flex-row flex-col lg:gap-8 gap-20 items-center ">
        <div
          className="flex flex-col items-center lg:items-start gap-8"
        >
          <span className="base-regular">{headerData.greeting}</span>
          <h1 className="heading1">{headerData.title}</h1>
          <p className="pharagraph lg:w-2/3">{headerData.headerDescription}</p>
          <div className="flex-center gap-3  flex-wrap">
            <Link href={pageConfig.blog}>
              <Button variant={"default"}>{headerData.mainButtonText}</Button>
            </Link>
            <Link href={pageConfig.blog}>
              <Button variant={"outline"}>{headerData.secondaryButtonText}</Button>
            </Link>
          </div>
        </div>

        <div className="relative w-full h-[400px]">
          <Image
            src={headerData.image}
            alt="My skills image"
            fill
            priority
            style={{ objectFit: "cover" }}
            className="rounded-xl"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
