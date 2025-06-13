interface PageHeroSectionProps {
  title?: string;
  desc?: string;
  imgUrl?: string;
}

export default function PageHeroSection({
  title = "Page Title",
  desc,
  imgUrl = "",
}: PageHeroSectionProps) {
  return (
    <div
      className="relative h-[90vh] w-full bg-cover bg-no-repeat pt-32"
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundPosition: "center top",
      }}
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />

      <div className="page-container relative z-10 flex h-full flex-col justify-end py-12 text-center">
        <h1 className="text-white">{title}</h1>
        {desc && <p className="mt-4 text-lg text-white">{desc}</p>}
      </div>
    </div>
  );
}
