import Link from "next/link";
import ButtonCTA from "../../commonComponents/ButtonCTA";

export default function HeroSection() {
  return (
    <div className="h-screen w-full bg-indigo-700 bg-home bg-cover bg-center">
      <div className="page-container flex h-full">
        <div className="flex h-full w-2/3 flex-col items-center justify-center">
          <h1 className="mb-8 w-full text-center text-primary">
            Guiding Your Towards Smarter Financial Decisions with Strategic
            Connections
          </h1>
          <Link href={"/contact"} passHref>
            <ButtonCTA label="Explore Opportunites Today" />
          </Link>
        </div>
      </div>
    </div>
  );
}
