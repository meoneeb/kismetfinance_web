export default function MissionVisionSection() {
  const mission = {
    title: "Mission",
    text: `Kismet Finance Group was created to simplify the process of exploring financial strategies by acting as a bridge between everyday Australians and licensed professionals. We don't provide financial advice or charge for our service - our role is purely to facilitate referrals to specialists based on your goals and needs.`,
<<<<<<< HEAD
    img: "https://placehold.co/600?text=mission",
=======
    imgUrl: "https://i.ibb.co/m5TTqXmR/Capture-2.png",
>>>>>>> 04983d8 (Initial commit with updated logo and layout redesign)
  };
  const vision = {
    title: "Vision",
    text: `Kismet Finance Group aims to empower individuals with the knowledge and connections necessary to make informed financial decisions by fostering a network of trustworthy financial specialists.`,
<<<<<<< HEAD
    img: "https://placehold.co/600?text=vision",
  };

  const SectionBlock = ({ title, text, img, reverse = false }: any) => (
    <div
      className={`flex min-h-[60vh] flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } w-full`}
    >
      <div
        className="h-64 w-full bg-cover bg-center md:h-auto md:w-1/2"
        style={{ backgroundImage: `url(${img})` }}
      />
      <div
        className={`flex w-full flex-col justify-center bg-primary py-8 md:w-1/2 ${
          reverse ? "px-4 md:px-8 lg:pl-32 " : " px-4 md:px-8 lg:pr-32"
        }`}
      >
        <h2 className="mb-4 text-secondary">{title}</h2>
        <p className="text-white">{text}</p>
=======
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
        className="w-full h-64 md:h-auto md:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />

      {/* Text side */}
      <div
        className={`flex w-full md:w-1/2 flex-col justify-center bg-primary py-8 px-6 md:px-12 ${
          reverse ? "lg:pl-32" : "lg:pr-32"
        }`}
      >
        <h2 className="mb-6 text-secondary text-3xl font-bold">{title}</h2>
        <p className="text-white text-lg leading-relaxed">{text}</p>
>>>>>>> 04983d8 (Initial commit with updated logo and layout redesign)
      </div>
    </div>
  );

  return (
<<<<<<< HEAD
    <div className="">
=======
    <div className="space-y-5">
>>>>>>> 04983d8 (Initial commit with updated logo and layout redesign)
      <SectionBlock {...mission} />
      <SectionBlock {...vision} reverse />
    </div>
  );
}
