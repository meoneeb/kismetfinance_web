// import {
//   ArrowPathIcon,
//   CloudArrowUpIcon,
//   LockClosedIcon,
// } from "@heroicons/react/20/solid";

import { BiLineChart } from "react-icons/bi";
import { FaPeopleArrows } from "react-icons/fa";

// import { FcProcess } from 'react-icons/fc'
import { ImLoop2 } from "react-icons/im";

const features = [
  {
    name: "Fully Accredited Partners",
    description:
      "Working in unison with our highly qualified financial experts, we strive to provide the best possible options, outcomes, and satisfaction for our customers.",
    href: "#",
    icon: BiLineChart,
  },
  {
    name: "50+ years of combined experience",
    description:
      "We are proud to have a team with more than 50 years of combined expertise in the industry, ensuring you receive the highest quality care and attention.",
    href: "#",
    icon: FaPeopleArrows,
  },
  {
    name: "Kismet's 5 Simple step process",
    description:
      "Kismet Group makes it effortless to reach your financial objectives with our five-step process. We provide a straightforward and transparent experience for you to maximize your financial success.",
    href: "#",
    icon: ImLoop2,
  },
];

export const AboutFeature = () => {
  return (
    <div className="bg-white py-24 sm:py-32" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary">
            Quality and Dependable Services
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Empowering Your Financial Wellbeing
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At Kismet Finance Group, we make it easy for you to access quality
            and dependable financial and wealth creation services. Our services
            platform provides you with the flexibility to select the methods
            that are most suitable for your goals of improving your financial
            wellbeing.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon
                    className="h-5 w-5 flex-none text-primary "
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-base font-semibold leading-7 text-primary"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
