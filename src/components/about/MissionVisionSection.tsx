export default function MissionVisionSection() {
  const mission = {
    title: "Mission",
    text: `Kismet Finance Group was created to simplify the process of exploring financial strategies by acting as a bridge between everyday Australians and licensed professionals. We don't provide financial advice or charge for our service - our role is purely to facilitate referrals to specialists based on your goals and needs.`,
    imgUrl: "https://i.ibb.co/m5TTqXmR/Capture-2.png",
  };
  const vision = {
    title: "Vision",
    text: `Kismet Finance Group aims to empower individuals with the knowledge and connections necessary to make informed financial decisions by fostering a network of trustworthy financial specialists.`,
    imgUrl: "https://i.ibb.co/DfVY1700/DSC01664.jpg",
  };

  const SectionBlock = ({
    title,
    text,
    imgUrl,
    reverse = false,
  }: {
    title: string;
    text: string;
    imgUrl: string;
    reverse?: boolean;
  }) => (
    <div
      className={`flex min-h-[60vh] w-full flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image side */}
      <div
        className="h-60 w-full bg-cover bg-center md:h-auto md:w-1/2"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />

      {/* Text side */}
      <div
        className={`flex w-full flex-col justify-center bg-primary py-8 px-6 md:w-1/2 md:px-12 ${
          reverse ? "lg:pl-32" : "lg:pr-32"
        }`}
      >
        <h2 className="mb-6 text-secondary">{title}</h2>
        <p className="leading-relaxed text-white">{text}</p>
      </div>
    </div>
  );

  return (
    <div className="">
      <SectionBlock {...mission} />
      <SectionBlock {...vision} reverse />
    </div>
  );
}
