import { CheckIcon } from "@heroicons/react/20/solid";

import { BsPiggyBank, BsCalculator } from "react-icons/bs";
import { GiChart, GiHouse } from "react-icons/gi";
import { FaWpforms, FaHouseUser } from "react-icons/fa";

const features = [
  {
    name: "Finance Specialist",
    description:
      "Finance Specialist Review your existing loan arrangements carefully and explore the possibility of restructuring your finances. This may lead to significant savings amounting to thousands of dollars annually.",
    icon: BsPiggyBank,
  },
  // { name: 'List view', description: 'Corporis asperiores ea nulla temporibus asperiores non tempore assumenda aut.' },
  {
    name: "Financial Planner",
    description:
      "Accountant Our firm collaborates with professionals to offer accounting insights for all, from the self-employed to business owners. Our partnered team is ready to provide the guidance you need to make the best financial decisions.",
    icon: GiChart,
  },
  // {
  //   name: "Accountant",
  //   description:
  //     "Property Specialists Achieve financial security through real estate and construction projects with the support of our affiliated experts.",
  //   icon: BsCalculator,
  // },
  {
    name: "Property Specialists",
    description:
      "Property Specialists Achieve financial security through real estate and construction projects with the support of our affiliated experts.",

    icon: GiHouse,
  },
  {
    name: "Quantity Surveyors",
    description:
      "Quantity Surveyors Maximize the tax advantages available to you, both for properties you already own and any new properties you may acquire, with assistance from our partnered Quantity Surveyors.",
    icon: FaWpforms,
  },
  {
    name: "First Home Buyers",
    description:
      "First Home Buyers Navigate the process of managing your finances, finding the right house and land package, and ensuring everything is in order for you to settle into your new home, all through our network of trusted partners at Kismet. Remember, at Kismet, we don't provide services directly; our partners do.",
    icon: FaHouseUser,
  },
  // {
  //   name: 'Mobile app',
  //   description: 'Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.',
  // },
];

export const TeamFeature = () => {
  return (
    <div className="bg-white py-24 sm:py-32" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary">
              Everything you need
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Team
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Kismets Partnership platform simplifies the process of getting the
              right help - offering access to full accredited and independent
              partners. Our mission is to make your journey as smooth and simple
              as possible. If youre already in a good financial situation and
              want to take the next step, we can explore various property
              investment strategies to get you closer to your goals
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900 ">
                  <feature.icon
                    className="absolute top-1 left-0 h-5 w-5 flex-none text-primary"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
