
import About from "@/components/About";
const Blog = React.lazy(() => import('@/components/Blog'));
const Contacts = React.lazy(() => import('@/components/Contacts'));
const MySkills = React.lazy(() => import('@/components/MySkills'));
const Review = React.lazy(() => import('@/components/Review'));
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getBlogs } from "@/sanity/actions";
import { domAnimation, LazyMotion } from "framer-motion";

import React from "react";



export const revalidate = 30;

interface Props {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

const Home = async ({ searchParams }: Props) => {
  
  const params = await searchParams;


  const posts = await getBlogs({
    query: params?.query || "",
    page: "1",
  });



  return (
    <main>
      <LazyMotion features={domAnimation}>
        <div className="relative z-10">
          <section id="header">
            <Header/>
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
      </LazyMotion>
    </main>
  );
};

export default Home;
