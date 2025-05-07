import React from "react";
import CompaniesLogo from "./CompaniesLogo";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Service1 from "./Service1";
import Service2 from "./Service2";
import Testimonial from "./Testimonial";
import Trial from "./Trial";

export default function Landingpage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <Hero />
      <CompaniesLogo />
      <Service1 />
      <Service2 />
      <Testimonial />
      <Pricing />
      <FAQ />
      <Trial />
      <Footer />
    </div>
  );
}
