import AffiliateDisclosureStatement from "./AffiliateDisclosureStatement";

const services = [
  {
    title: "SMSF Compliance & Administration",
    desc:
      "We introduce you to licensed SMSF administrators who can simplify compliance and ensure your fund is structured correctly.",
    img: "https://i.ibb.co/wrhXz1nq/servisec-1.png",
  },
  {
    title: "Finance & Mortgage Broking",
    desc:
      "We refer you to brokers who can assist with lending options, tailored to your situation and goals.",
    img: "https://i.ibb.co/My6NFSmF/services-2.png",
  },
  {
    title: "Accountants",
    desc:
      "We connect you with trusted accountants who can help with tax, compliance, and financial clarity.",
    img: "https://i.ibb.co/QjYWSj5s/services-3.png",
  },
  {
    title: "Retirement Pathways",
    desc:
      "We help you explore retirement strategies by referring you to professionals who can support long-term planning.",
    img: "https://i.ibb.co/k6KhpB0q/services-4.png",
  },
  {
    title: "Investment Strategies",
    desc:
      "We connect you with licensed advisors who can guide you through strategic investment planning.",
    img: "https://i.ibb.co/zWLd5JCY/services-5.png",
  },
];

export default function ServicesSection() {
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
                <button className="mx-auto border border-[#b59d2d] text-[#b59d2d] text-sm font-medium py-1.5 px-8 hover:bg-[#b59d2d] hover:text-white transition-colors duration-300 rounded">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Second row: 2 cards centered */}
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
                <button className="mx-auto border border-[#b59d2d] text-[#b59d2d] text-sm font-medium py-1.5 px-8 hover:bg-[#b59d2d] hover:text-white transition-colors duration-300 rounded">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <AffiliateDisclosureStatement />
      </div>
    </div>
  );
}
