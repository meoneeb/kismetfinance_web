import type { NextPage } from "next";
import { AboutFeature } from "../components/about-feature";
import { Contact } from "../components/contact";
import { CTA } from "../components/cta";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { TeamFeature } from "../components/team-feature";
import { Testimonials } from "../components/testimonials";
import HomePage from "../components/home/HomePage";

const Landing: NextPage = () => {
  return (
    <div className="bg-white">
      <main>
        {/* Hero section */}
        <HomePage /> <AboutFeature />
        {/* <Hero />
        <AboutFeature />
        <CTA />
        <TeamFeature />
        <Testimonials />
        <Contact />
        <Footer /> */}
      </main>
    </div>
  );
};

export default Landing;
