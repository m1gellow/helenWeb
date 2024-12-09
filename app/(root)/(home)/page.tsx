// app/(root)/(home)/page.tsx
import About from "@/components/About";
import Blog from "@/components/Blog";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MySkills from "@/components/MySkills";
import Review from "@/components/Review";
import { getBlogs, getHeaderData } from "@/sanity/actions";

import React from "react";

export const revalidate = 30;

interface Props {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}


const Home = async ({ searchParams }: Props) => {

  const params = await searchParams;

  const headerData = await getHeaderData();

  const posts = await getBlogs({
    query: params?.query || "",
    page: "1"
  });


  return (
    <main>
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
          <Blog posts={posts} />
        </section>
        <section id="review">
          <Review />
        </section>
        <section id="contacts">
          <Contacts />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>
    </main>
  );
};

export default Home;