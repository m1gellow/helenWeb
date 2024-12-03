import About from "@/components/About";
import Blog from "@/components/Blog";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import MySkills from "@/components/MySkills";
import Review from "@/components/Review";
import { getHeaderData } from "@/sanity/actions";

import React from "react";

export const revalidate = 30;
const Home = async () => {
  const headerData = await getHeaderData();

  return (
    <main>
      <div className="relative z-50">
        <CustomCursor />
      </div>
      <div className="relative z-10">
        <section id="header">
          <Header data={headerData} />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <MySkills />
        </section>
        <section id="blog">
          <Blog />
        </section>
        <section id="review">
          <Review />
        </section>
      </div>
    </main>
  );
};

export default Home;
