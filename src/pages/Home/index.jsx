import React from "react";
import Header from "../../componets/Header";
import HeroBanner from "../../componets/HeroBanner";
import ServiceSection from "../../componets/ServiceSection";
import TeamSection from "../../componets/TeamSection";

const HomePage = () => {
  return (
    <>
      <div className="main">
        <Header />
        <HeroBanner />
        <ServiceSection />
      </div>
      <TeamSection />
    </>
  );
};

export default HomePage;
