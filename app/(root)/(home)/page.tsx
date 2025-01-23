import About from "@/components/About";
import dynamic from "next/dynamic"; 
const Blog = dynamic(() => import('@/components/Blog'));
const Contacts = dynamic(() => import('@/components/Contacts'));
const MySkills = dynamic(() => import('@/components/MySkills'));
const Review = dynamic(() => import('@/components/Review'));
const Footer = dynamic(() => import('@/components/Footer'));
import Header from "@/components/Header";
import { getBlogs } from "@/sanity/actions";
import { domAnimation, LazyMotion } from "framer-motion";
import React from "react";


interface Props {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

export const revalidate = 30;


const Home = async ({ searchParams }: Props) => {
  const resolvedSearchParams = await searchParams;
  const posts = await getBlogs({
    query: resolvedSearchParams?.query || "",
    page: "1",
  });

  return (
    <main>
      <LazyMotion features={domAnimation}>
        <div className="relative z-10">
          <section id="header">
            <Header />
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