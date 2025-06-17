import Image from "next/image";

interface ProcessItem {
  title: string;
  desc: string;
  Icon: string;
  // ForwardRefExoticComponent<
  //   SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>
  // >;
  isReverse: boolean;
}

const processOverview: ProcessItem[] = [
  {
    title: "Consultation",
    desc: "We take the time to understand your financial goals, needs, and aspirations through a personalized consultation, ensuring a tailored approach to help you make informed decisions.",
    Icon: "/icons/talk.svg",
    isReverse: false,
  },
  {
    title: "Evaluation",
    desc: "Our team evaluates your current situation and identifies opportunities that align with your objectives, helping you explore financial strategies that match your long-term vision.",
    Icon: "/icons/evaluation.svg",
    isReverse: true,
  },
  {
    title: "Connection",
    desc: "We connect you with our network of trusted, licensed professionals and tailored financial solutions, ensuring you receive expert support to meet your financial goals.",
    Icon: "/icons/connection.svg",
    isReverse: false,
  },
  {
    title: "Ongoing Support",
    desc: "We remain by your side, offering continuous support and guidance to ensure your financial journey stays on track, with a focus on long-term success and growth.",
    Icon: "/icons/customer-support.svg",
    isReverse: true,
  },
];

export default function ProcessSection() {
  return (
    <div className="w-full bg-white">
      <div className="page-container py-12 ">
        <h2 className="mb-8 text-center font-semibold text-primary">
          Process Overview
        </h2>

        <div className="mx-auto flex max-w-5xl flex-col gap-8">
          {processOverview.map(({ title, desc, Icon, isReverse }, idx) => (
            <div
              key={idx}
              className={`flex justify-start p-8 md:items-center ${
                isReverse
                  ? "flex-col md:flex-row-reverse"
                  : "flex-col md:flex-row"
              }`}
            >
              {/* <Icon className="mb-4 w-24 text-secondary md:w-40" /> */}
              <Image
                src={Icon}
                alt={title}
                width={128}
                height={128}
                className="fill-secondary"
              />
              <div className="mx-6 hidden h-[128px] w-0 border border-gray-400 md:block"></div>
              <div className="">
                <h3 className="mb-2 font-semibold text-secondary">{title}</h3>
                <p className="text-sm leading-relaxed sm:text-base">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
