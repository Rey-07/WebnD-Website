import React from "react";
import MemberCard from "./MemberCard.jsx";
import Img1 from "../../assets/anuragbhaiya.jpg";
import Img2 from "../../assets/ayushbhaiya.jpg";
import Img3 from "../../assets/lalitbhaiya.jpg";
import Img4 from "../../assets/mohanbhaiya.jpg";

const Member = () => {
  return (
    <>
      <div className="bg-gradient-to-t from-slate-100 via-my-custom-cream to-slate-100  dark:bg-gray-900  dark:text-white">
        <section data-aos="fade-up" className="container mb-10 py-8">
          <h1 className="mb-8 py-2 pl-2 text-center text-4xl font-bold">
            Our Team
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <MemberCard
              Img={Img1}
              Name="Anurag Mani Tripathi"
              Pos="Secretary"
            />
            <MemberCard
              Img={Img2}
              Name="Ayush Tiwari"
              Pos="Governor, Web and Design"
            />
            <MemberCard Img={Img3} Name="Lalit Mohanani" Pos="Governor, Web" />
            <MemberCard
              Img={Img4}
              Name="Kattamuri Mohan Krishna"
              Pos="Governor, Design"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Member;
