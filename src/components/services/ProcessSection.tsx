<<<<<<< HEAD
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
=======
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
    <div className="w-full bg-zinc-100">
      <div className="page-container py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 text-center text-2xl sm:text-3xl font-semibold text-[#0f2b4e]">
          Process Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {processOverview.map(({ title, desc, Icon }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center bg-[#0f2b4e] text-white rounded-lg shadow-lg p-8"
            >
              <Icon className="w-16 h-16 text-[#b59d2d] mb-4" />
              <h3 className="text-[#b59d2d] text-xl font-semibold mb-2">
                {title}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed">{desc}</p>
>>>>>>> 04983d8 (Initial commit with updated logo and layout redesign)
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
<<<<<<< HEAD

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
=======
>>>>>>> 04983d8 (Initial commit with updated logo and layout redesign)
