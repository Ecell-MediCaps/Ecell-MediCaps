import React from "react";
import AboutUs from "../components/AboutUs";
import HeroSection from "../components/HeroSection/HeroSection";
import Initiatives from "../components/Initiatives";
import { Parallax } from 'react-parallax';
import building from '../assets/images/building.jpg'
import cardimg from '../assets/images/cardimg.jpg'
// import Marquee from "../components/Marquee/Marquee";


function Home() {
  return (
    <div>
      {/* <Marquee /> */}
      <HeroSection />
      <Parallax strength={800} bgImage={cardimg} bgImageAlt="building">
        <AboutUs />
      </Parallax>
      <Parallax strength={800} bgImage={building} bgImageAlt="building">
        <Initiatives />
      </Parallax>
    </div>
  );
}

export default Home;
