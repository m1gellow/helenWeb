

import About from "@/components/About";
import Header from "@/components/Header";
import MySkills from "@/components/MySkills";

import React from "react";


const Home = () => {



  return (
    <main>
      <section>
        <Header />
      </section>
      <section>
        <About />
      </section>
      <section>
        <MySkills />
      </section>
    </main>
  );
};

export default Home;
