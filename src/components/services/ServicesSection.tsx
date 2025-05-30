import AffiliateDisclosureStatement from "./AffiliateDisclosureStatement";

export default function ServicesSection() {
  return (
    <div className="w-full bg-zinc-100">
      <div className="page-container py-12">
        <div className="mb-8 flex flex-1 flex-wrap items-stretch justify-center">
          {services.map((service, idx) => {
            return (
              <div
                key={idx}
                className="group mb-6 w-full md:mb-0 md:w-1/2 md:p-6 lg:w-1/3"
              >
                <div className="flex h-full flex-col  bg-primary">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="flex h-full flex-col justify-between p-4">
                    <div>
                      <h3 className="mb-2 text-center text-white ">
                        {service.title}
                      </h3>
                      <p className="mb-4 text-center text-gray-400">
                        {service.desc}
                      </p>
                    </div>
                    <button className="text-medium mx-auto w-full border border-secondary py-2 text-center text-white hover:bg-secondary hover:text-gray-900">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <AffiliateDisclosureStatement />
      </div>
    </div>
  );
}

const services = [
  {
    title: "SMSF Compliance & Administration",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus ligula turpis, ac fermentum lectus dictum in.",
    img: "https://placehold.co/600?text=service+image+here",
  },
  {
    title: "Finance & Mortage Broking",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus ligula turpis, ac fermentum lectus dictum in.",
    img: "https://placehold.co/600?text=service+image+here",
  },
  {
    title: "SMSF Compliance & Administration",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus ligula turpis, ac fermentum lectus dictum in.",
    img: "https://placehold.co/600?text=service+image+here",
  },
  {
    title: "SMSF Compliance & Administration",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus ligula turpis, ac fermentum lectus dictum in.",
    img: "https://placehold.co/600?text=service+image+here",
  },
  {
    title: "SMSF Compliance & Administration",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus ligula turpis, ac fermentum lectus dictum in.",
    img: "https://placehold.co/600?text=service+image+here",
  },
];
