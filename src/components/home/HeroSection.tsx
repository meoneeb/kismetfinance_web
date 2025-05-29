import ButtonCTA from "../../commonComponents/ButtonCTA";

export default function HeroSection() {
  return (
    <div className="h-screen w-full bg-indigo-700 bg-home bg-cover bg-center">
      <div className="page-container flex h-full flex-col items-start justify-center">
        <h1 className="mb-4 w-full text-primary lg:max-w-4xl">
          Guiding Your Towards Smarter Financial Decisions with Strategic
          Connections
        </h1>
        <ButtonCTA label="Explore Opportunites Today" />
      </div>
    </div>
  );
}
