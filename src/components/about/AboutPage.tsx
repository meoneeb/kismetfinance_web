import PageHeroSection from "../../commonComponents/header/PageHeroSection";
import ApproachSection from "./ApproachSection";
import IntroSection from "./IntroSection";
import MissionVisionSection from "./MissionVisionSection";

export default function AboutPage() {
  return (
    <>
    <PageHeroSection
        title="About us"
        imgUrl="https://i.ibb.co/Mkqj2b6t/DSC01638.jpg"
      />
      <IntroSection />
      <MissionVisionSection />
      <ApproachSection />
    </>
  );
}
