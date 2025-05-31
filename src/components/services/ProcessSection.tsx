import React, { ForwardRefExoticComponent, SVGProps, RefAttributes } from "react";
import {
  ChatBubbleLeftRightIcon,
  MagnifyingGlassCircleIcon,
  UserGroupIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

interface ProcessItem {
  title: string;
  desc: string;
  Icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>>;
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
      <div className="page-container py-12 max-w-7xl mx-auto">
        <h2 className="mb-16 text-center text-[22px] font-semibold text-[#1f2c52]">
          Process Overview
        </h2>
        <div className="mx-auto flex flex-col gap-16 max-w-5xl">
          {processOverview.map(({ title, desc, Icon }, idx) => (
            <div
              key={idx}
              className={`flex items-center w-full ${
                idx % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {idx % 2 === 0 ? (
                <>
                  <Icon className="w-20 h-20 text-[#c9a537] flex-shrink-0" />
                  <div className="ml-8 max-w-[480px]">
                    <h3 className="mb-1 text-[#c9a537] text-lg font-semibold">{title}</h3>
                    <p className="text-[#1f2c52] text-xs leading-tight">{desc}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="mr-8 max-w-[480px] text-right">
                    <h3 className="mb-1 text-[#c9a537] text-lg font-semibold">{title}</h3>
                    <p className="text-[#1f2c52] text-xs leading-tight">{desc}</p>
                  </div>
                  <Icon className="w-20 h-20 text-[#c9a537] flex-shrink-0" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
