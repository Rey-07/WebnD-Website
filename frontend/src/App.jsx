import React from "react";
import { useEffect } from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import OverviewCounter from "./components/overview-counter/OverviewCounter.jsx";
import BannerDetails from "./components/bannerDetails/BannerDetails.jsx";
import Blogs from "./components/blogs/Blogs.jsx";
import Footer from "./components/footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Member from "./components/member/member.jsx";
import "./index.css";
import image1 from "./assets/canva5.png";
import image3 from "./assets/block.png";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="dark:bg-gray-900 bg-slate-100">
      <Navbar />
      <Hero />
      <OverviewCounter />
      <h1
        data-aos="fade-up"
        className="mb-5 mt-4  md:pt-10 pl-2 text-center text-4xl font-bold "
      >
        Our Clubs
      </h1>
      <BannerDetails
        reverse={false}
        image={image1}
        heading="DevSquad: The Web Development Club"
        content="Your Hub for Web Development Excellence! A community where passionate developers converge to learn, collaborate, and create. From mastering the latest frameworks to exploring cutting-edge technologies, we're dedicated to honing skills and crafting innovative solutions."
        l1="Learn"
        l2="Collaborate"
        l3="Innovate"
      />

      {/* Second BannerDetails component with reverse */}
      <BannerDetails
        reverse={true}
        image={image1}
        heading="UXphere: The UI UX Club"
        content=" Introducing UXphere, where design meets innovation! A vibrant community of designers, thinkers, and creators as we explore the dynamic world of user interface and user experience. From mastering design principles to crafting intuitive digital experiences, we're here to inspire, educate, and empower our members."
      />

      {/* Third BannerDetails component */}
      <BannerDetails
        reverse={false}
        image={image3}
        heading="ChainCrafters: The Blockchain Club"
        content="Your gateway to the future of decentralized innovation! Here's our dynamic community of blockchain enthusiasts. From understanding the fundamentals of blockchain to diving into smart contracts and decentralized applications (DApps), we're committed to educating and empowering our members on this transformative technology."
      />

      <Blogs />
      <Member />
      <Footer />
    </div>
  );
}

export default App;
