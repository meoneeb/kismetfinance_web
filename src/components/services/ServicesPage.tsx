import PageHeroSection from "../../commonComponents/header/PageHeroSection";
import ProcessSection from "./ProcessSection";
import ServicesSection from "./ServicesSection";

export default function ServicesPage() {
  return (
    <>
      <PageHeroSection
        title="Services"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus ligula turpis, ac fermentum lectus dictum in."
      />
      <ServicesSection />
      <ProcessSection />
    </>
  );
}
