import React from "react";
import BlogCard from "./BlogCard.jsx";
import Img3 from "../../assets/pm.png";
import Img1 from "../../assets/cd.jpg";
import Img2 from "../../assets/uiux.png";

const Blogs = () => {
  return (
    <>
      <div className="bg-gradient-to-t from-slate-100 via-my-custom-pink3 to-slate-100 dark:bg-gray-900 dark:text-white pt-4">
        <section data-aos="fade-up" className="container mb-10 py-8">
          <h1 className="mb-8  py-2 pl-2 text-center text-4xl font-bold">
            Our Events
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            <BlogCard
              Img={Img1}
              Head="CODE RELAY"
              Date="July 15th - July 18th"
              Des="Code Relay is the annual hackathon presented by WebnD."
              By="By WebnD"
            />
            <BlogCard
              Img={Img2}
              Head="DESIGN WORKSHOP"
              Date="4th November"
              Des="UI, UX workshop organized by UXphere, the design club."
              By="By WebnD"
            />
            <BlogCard
              Img={Img3}
              Head="PRODIFY"
              Date="Jan 8th - Jan 13th"
              Des="A week long Product Management workshop organized by WebnD in collaboration with FEBS."
              By="By WebnD and FEBS"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Blogs;
