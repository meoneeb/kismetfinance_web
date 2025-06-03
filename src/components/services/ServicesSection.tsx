import React, { useState } from "react";
import AffiliateDisclosureStatement from "./AffiliateDisclosureStatement";

interface Service {
  title: string;
  desc: string;
  img: string;
  iframeSrc: string;
}

const services: Service[] = [
  {
    title: "SMSF Compliance & Administration",
    desc:
      "We introduce you to licensed SMSF administrators who can simplify compliance and ensure your fund is structured correctly.",
    img: "https://i.ibb.co/wrhXz1nq/servisec-1.png",
    iframeSrc:
      "https://shane-kismetfinancegroup84.zohobookings.com.au/portal-embed#/26865000000045006",
  },
  {
    title: "Finance & Mortgage Broking",
    desc:
      "We refer you to brokers who can assist with lending options, tailored to your situation and goals.",
    img: "https://i.ibb.co/My6NFSmF/services-2.png",
    iframeSrc:
      "https://shane-kismetfinancegroup84.zohobookings.com.au/portal-embed#/26865000000045006",
  },
  {
    title: "Accountants",
    desc:
      "We connect you with trusted accountants who can help with tax, compliance, and financial clarity.",
    img: "https://i.ibb.co/QjYWSj5s/services-3.png",
    iframeSrc:
      "https://shane-kismetfinancegroup84.zohobookings.com.au/portal-embed#/26865000000045006",
  },
  {
    title: "Retirement Pathways",
    desc:
      "We help you explore retirement strategies by referring you to professionals who can support long-term planning.",
    img: "https://i.ibb.co/k6KhpB0q/services-4.png",
    iframeSrc:
      "https://shane-kismetfinancegroup84.zohobookings.com.au/portal-embed#/26865000000045006",
  },
  {
    title: "Investment Strategies",
    desc:
      "We connect you with licensed advisors who can guide you through strategic investment planning.",
    img: "https://i.ibb.co/zWLd5JCY/services-5.png",
    iframeSrc:
      "https://shane-kismetfinancegroup84.zohobookings.com.au/portal-embed#/26865000000045006",
  },
];

export default function ServicesSection(): JSX.Element {
  const [activeIframe, setActiveIframe] = useState<string | null>(null);

  const openIframe = (src: string): void => {
    setActiveIframe(src);
  };

  const closeIframe = (): void => {
    setActiveIframe(null);
  };

  return (
    <div className="w-full bg-zinc-100">
      <div className="page-container py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First row: 3 cards */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-12 mb-12">
          {services.slice(0, 3).map((service, idx) => (
            <div
              key={idx}
              className="w-full sm:w-[30%] bg-[#0f2b4e] rounded-md shadow-lg overflow-hidden flex flex-col"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full object-cover rounded-t-md mb-4"
                style={{ maxHeight: "200px" }}
              />
              <div className="p-6 flex flex-col justify-between flex-grow">
                <h3 className="text-center text-[#b59d2d] font-semibold mb-4 text-lg sm:text-xl">
                  {service.title}
                </h3>
                <p className="text-center text-white text-sm sm:text-base mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <button
                  onClick={() => openIframe(service.iframeSrc)}
                  className="mx-auto border border-[#b59d2d] text-[#b59d2d] text-sm font-medium py-1.5 px-8 hover:bg-[#b59d2d] hover:text-white transition-colors duration-300 rounded"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {}
        <div className="flex justify-center gap-x-8 flex-wrap">
          {services.slice(3, 5).map((service, idx) => (
            <div
              key={idx}
              className="w-full sm:w-[40%] bg-[#0f2b4e] rounded-md shadow-lg overflow-hidden flex flex-col mb-8 sm:mb-0"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full object-cover rounded-t-md mb-4"
                style={{ maxHeight: "200px" }}
              />
              <div className="p-6 flex flex-col justify-between flex-grow">
                <h3 className="text-center text-[#b59d2d] font-semibold mb-4 text-lg sm:text-xl">
                  {service.title}
                </h3>
                <p className="text-center text-white text-sm sm:text-base mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <button
                  onClick={() => openIframe(service.iframeSrc)}
                  className="mx-auto border border-[#b59d2d] text-[#b59d2d] text-sm font-medium py-1.5 px-8 hover:bg-[#b59d2d] hover:text-white transition-colors duration-300 rounded"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <AffiliateDisclosureStatement />
      </div>

      {/* Iframe Modal */}
      {activeIframe && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={closeIframe}
        >
          <div
            className="bg-white rounded-md overflow-hidden max-w-4xl w-full max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeIframe}
              className="absolute top-2 right-2 text-black bg-gray-300 rounded-full px-3 py-1 font-bold hover:bg-gray-400"
              aria-label="Close iframe modal"
            >
              X
            </button>
            <iframe
              src={activeIframe}
              width="100%"
              height="750px"
              frameBorder="0"
              allowFullScreen
              title="Learn More Details"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
