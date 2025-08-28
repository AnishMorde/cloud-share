import React from "react";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import PricingSection from "../components/PricingSection";
import Testomonials from "../components/Testomonials";
import FooterSection from "../components/FooterSection";
import CTASections from "../components/CtaSections.jsx";

function Landing() {
  return (
    <div className="landing-page bg-gradient-to-b from-gray-50">
      {/* Hero section  */}
      <HeroSection/>
      
      {/* features section */}
      <FeatureSection/>


      {/* pricing section */}
      <PricingSection/>

      {/* testomonials */}
      <Testomonials/>

      {/* CTA section */}
     <CTASections/>

      {/* footer */}
      <FooterSection/>
    </div>
  );
}

export default Landing;
