import React from "react";
import Features from "../../components/home/features";
import Hero from "../../components/home/hero-section";
import MoreDetails from "../../components/home/more-details";
import RoadMap from "../../components/home/roadmap";
import Tokenomics from "../../components/home/tokenomics";
import WhatIsShonen from "../../components/home/what-is-shonen";


function Home() {
    return (
       <>
      <Hero />
      <WhatIsShonen />
      <Features />
      <MoreDetails/>
      <Tokenomics/>
      <RoadMap/>
      </>
    );
  }
  
  export default Home;