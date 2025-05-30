export default function ProcessSection() {
  return (
    <div className="w-full bg-white">
      <div className="page-container py-12">
        <h2 className="mb-8 text-center text-gray-900">Process Overview</h2>
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 md:gap-12">
          {processOverview.map((process, idx) => (
            <div
              className={`flex w-full items-center gap-4 ${
                process.flip
                  ? "flex-col md:flex-row"
                  : "flex-col md:flex-row-reverse"
              }`}
              key={idx}
            >
              <img
                src={process.icon}
                alt={process.title}
                className="aspect-square w-40"
              />
              <div className="flex flex-col md:px-6">
                <h3 className="mb-2 text-center text-gray-900 md:text-left">
                  {process.title}
                </h3>
                <p className="text-center text-gray-600 md:text-left">
                  {process.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const processOverview = [
  {
    title: "Consultation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus ligula turpis, ac fermentum lectus dictum in.",
    icon: "https://placehold.co/256?text=icon+here",
    flip: true,
  },
  {
    title: "Consultation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus ligula turpis, ac fermentum lectus dictum in.",
    icon: "https://placehold.co/256?text=iconhere",
    flip: false,
  },
  {
    title: "Consultation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus ligula turpis, ac fermentum lectus dictum in.",
    icon: "https://placehold.co/256?text=icon+here",
    flip: true,
  },
  {
    title: "Consultation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus ligula turpis, ac fermentum lectus dictum in.",
    icon: "https://placehold.co/256?text=iconhere",
    flip: false,
  },
];
