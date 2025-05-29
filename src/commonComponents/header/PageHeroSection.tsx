interface PageHeroSectionProps {
  title?: string;
  imgUrl?: string;
}

export default function PageHeroSection({
  title = "Page Title",
  imgUrl = "https://img.freepik.com/free-photo/diverse-business-people-dinner-party_53876-98341.jpg?t=st=1748542778~exp=1748546378~hmac=5194c3211b63b4452182f321fa7727761c4bd8cb0ec9be29c9e1f9b0849c77b8&w=1380",
}: PageHeroSectionProps) {
  return (
    <div
      className="relative h-[90vh] w-full bg-cover bg-bottom pt-20"
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />

      {/* Content */}
      <div className="page-container relative z-10 flex h-full flex-col justify-end py-12">
        <h1 className="text-center text-white">{title}</h1>
      </div>
    </div>
  );
}
