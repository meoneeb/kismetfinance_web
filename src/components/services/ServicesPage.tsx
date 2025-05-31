import React from "react";
import PageHeroSection from "../../commonComponents/header/PageHeroSection";
import ProcessSection from "./ProcessSection";
import ServicesSection from "./ServicesSection";

export default function ServicesPage() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <section className="mb-12">
        <PageHeroSection
          title="Services"
          desc="Kismet Finance Group helps you take the next step by introducing you to qualified professionals who understand your situation. We don't offer financial advice — we simply connect you with experts so you can explore your options with confidence."
          imgUrl="https://i.ibb.co/9dG4LpB/Capture-3.png"  // Services page image URL here
        />
      </section>

      <section className="mb-16">
        <ServicesSection />
      </section>

      <section>
        <ProcessSection />
      </section>
    </main>
  );
}
