
import About from "@/components/About";
import Blog from "@/components/Blog";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import MySkills from "@/components/MySkills";
import Review from "@/components/Review";

import React from "react";

const Home = () => {


  return (
    <main>
      <div className="relative z-50">
        <CustomCursor />
      </div>
      <div className="relative z-10">
        <section>
          <Header />
        </section>
        <section>
          <About />
        </section>
        <section>
          <MySkills />
        </section>
        <section>
          <Blog />
        </section>
        <section>
          <Review />
        </section>
      </div>
    </main>
  );
};

export default Home;
