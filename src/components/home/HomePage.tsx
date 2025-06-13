import AboutSection from "./AboutSection";
import CallToActionSection from "./CallToActionSection";
import HeroSection from "./HeroSection";
import ReviewsSection from "./ReviewsSection"; // <-- default import

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ReviewsSection />
      <CallToActionSection />
    </>
  );
}
