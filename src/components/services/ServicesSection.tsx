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
    desc: "We introduce you to licensed SMSF administrators who can simplify compliance and ensure your fund is structured correctly.",
    img: "https://i.ibb.co/wrhXz1nq/servisec-1.png",
    iframeSrc:
      "https://shane-kismetfinancegroup84.zohobookings.com.au/portal-embed#/26865000000045006",
  },
  {
    title: "Finance & Mortgage Broking",
    desc: "We refer you to brokers who can assist with lending options, tailored to your situation and goals.",
    img: "https://i.ibb.co/My6NFSmF/services-2.png",
    iframeSrc:
      "https://shane-kismetfinancegroup84.zohobookings.com.au/portal-embed#/26865000000045006",
  },
  {
    title: "Accountants",
    desc: "We connect you with trusted accountants who can help with tax, compliance, and financial clarity.",
    img: "https://i.ibb.co/QjYWSj5s/services-3.png",
    iframeSrc:
      "https://shane-kismetfinancegroup84.zohobookings.com.au/portal-embed#/26865000000045006",
  },
  {
    title: "Retirement Pathways",
    desc: "We help you explore retirement strategies by referring you to professionals who can support long-term planning.",
    img: "https://i.ibb.co/k6KhpB0q/services-4.png",
    iframeSrc:
      "https://shane-kismetfinancegroup84.zohobookings.com.au/portal-embed#/26865000000045006",
  },
  {
    title: "Investment Strategies",
    desc: "We connect you with licensed advisors who can guide you through strategic investment planning.",
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
      <div className="page-container py-12">
        <div className="mb-12 flex flex-wrap justify-center">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="mb-8 flex w-full md:w-1/2 md:px-4 lg:w-1/3"
            >
              <div className="flex w-full flex-col overflow-hidden bg-primary shadow-lg ">
                <img
                  src={service.img}
                  alt={service.title}
                  className="mb-4 w-full rounded-t-md object-cover"
                  style={{ maxHeight: "200px" }}
                />
                <div className="flex flex-grow flex-col justify-between p-6">
                  <h3 className="mb-4 text-center text-lg font-semibold text-secondary sm:text-xl">
                    {service.title}
                  </h3>
                  <hr className="mx-auto mb-4 w-1/3 border border-secondary" />
                  <p className="mb-6 text-center text-sm leading-relaxed text-white sm:text-base">
                    {service.desc}
                  </p>
                  <button
                    onClick={() => openIframe(service.iframeSrc)}
                    className="mx-auto border border-secondary px-8 py-1.5 text-sm font-medium text-secondary transition-colors duration-300 hover:bg-secondary hover:text-white"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <AffiliateDisclosureStatement />
      </div>

      {/* Iframe Modal */}
      {activeIframe && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={closeIframe}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-md bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeIframe}
              className="absolute right-2 top-2 rounded-full bg-gray-300 px-3 py-1 font-bold text-black hover:bg-gray-400"
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
