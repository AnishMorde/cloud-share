import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import PricingSection from "../components/PricingSection";
import Testomonials from "../components/Testomonials";
import FooterSection from "../components/FooterSection";
import CTASections from "../components/CtaSections.jsx";
import { useClerk, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function Landing() {

   
   const{ openSignIn , openSignUp } = useClerk();
   const{isSignedIn} = useUser();
   const naviagte = useNavigate();

   useEffect(()=>{   
    if(isSignedIn){
      naviagte("/dashboard");
    }

   }),[isSignedIn , naviagte]

 


  return (


    <div className="landing-page bg-gradient-to-b from-gray-50">
      {/* Hero section  */}
      <HeroSection openSignIn={openSignIn} openSignUp={openSignUp} />
      
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
