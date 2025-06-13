import PageHeroSection from "../../commonComponents/header/PageHeroSection";
import FormSection from "./FormSection";

export default function ContactPage() {
  return (
    <>
      <PageHeroSection
        title="Contact Us"
        desc="Get in touch with us for personalized support."
        imgUrl="https://i.ibb.co/DPbm0DwK/DSC01761.jpg" // Contact page image URL here
      />
      <FormSection />
    </>
  );
}
