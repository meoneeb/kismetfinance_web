import React from "react";
import PageHeroSection from "../../commonComponents/header/PageHeroSection";
import ProcessSection from "./ProcessSection";
import ServicesSection from "./ServicesSection";

export default function ServicesPage() {
  return (
    <>
      <PageHeroSection
        title="Services"
        desc="Kismet Finance Group helps you take the next step by introducing you to qualified professionals who understand your situation. We don't offer financial advice — we simply connect you with experts so you can explore your options with confidence."
        imgUrl="https://i.ibb.co/9dG4LpB/Capture-3.png" // Services page image URL here
      />
      <ServicesSection />
      <ProcessSection />
    </>
  );
}
