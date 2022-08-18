import React from "react";
import Features from "../../components/home/features";
import Hero from "../../components/home/hero-section";
import Benefits from "../../components/home/investor-benefits";
import RoadMap from "../../components/home/roadmap";
import TokenMetrics from "../../components/home/tokenmetrics";
import WhatIsShonen from "../../components/home/what-is-shonen";


function Home() {
    return (
       <>
      <Hero />
      <WhatIsShonen />
      <Features />
      <Benefits />
      <TokenMetrics />
      <RoadMap />
      </>
    );
  }
  
  export default Home;