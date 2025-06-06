import React, {
  ForwardRefExoticComponent,
  SVGProps,
  RefAttributes,
} from "react";
import {
  ChatBubbleLeftRightIcon,
  MagnifyingGlassCircleIcon,
  UserGroupIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

interface ProcessItem {
  title: string;
  desc: string;
  Icon: ForwardRefExoticComponent<
    SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>
  >;
}

const processOverview: ProcessItem[] = [
  {
    title: "Consultation",
    desc: "We take the time to understand your financial goals, needs, and aspirations through a personalized consultation, ensuring a tailored approach to help you make informed decisions.",
    Icon: ChatBubbleLeftRightIcon,
  },
  {
    title: "Evaluation",
    desc: "Our team evaluates your current situation and identifies opportunities that align with your objectives, helping you explore financial strategies that match your long-term vision.",
    Icon: MagnifyingGlassCircleIcon,
  },
  {
    title: "Connection",
    desc: "We connect you with our network of trusted, licensed professionals and tailored financial solutions, ensuring you receive expert support to meet your financial goals.",
    Icon: UserGroupIcon,
  },
  {
    title: "Ongoing Support",
    desc: "We remain by your side, offering continuous support and guidance to ensure your financial journey stays on track, with a focus on long-term success and growth.",
    Icon: PhoneIcon,
  },
];

export default function ProcessSection() {
  return (
    <div className="w-full bg-white">
      <div className="page-container mx-auto max-w-7xl py-12">
        <h2 className="mb-12 text-center text-gray-900">Process Overview</h2>
        <div className="mx-auto flex max-w-5xl flex-col gap-8">
          {processOverview.map(({ title, desc, Icon }, idx) => (
            <div
              key={idx}
              className={`flex w-full items-center gap-6 ${
                idx % 2 === 0
                  ? "flex-col md:flex-row"
                  : "flex-col md:flex-row-reverse"
              }`}
            >
              {/* Icon */}
              <Icon className="h-24 w-24 flex-shrink-0 text-secondary" />

              {/* Vertical line */}
              <div className="hidden h-40 w-[1px] bg-gray-200 md:block"></div>

              {/* Text content */}
              <div className="flex max-w-[480px] flex-col md:px-6">
                <h3 className="mb-2 text-gray-900">{title}</h3>
                <p className="leading-relaxed text-gray-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
