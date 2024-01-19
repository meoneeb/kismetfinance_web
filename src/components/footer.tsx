import {
  EnvelopeIcon,
  PhoneIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        {/* SVG and background styling here */}
      </div>
      <div className="mx-auto max-w-7xl py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-3 md:gap-8">
          {/* Footer Columns */}
          {/* <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-white sm:text-3xl sm:tracking-tight">
              Contact Us
            </h2>
            <div className="mt-3 flex">
              <PhoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
              <p className="ml-3 text-base text-white">0426 475 749</p>
            </div>
            <div className="mt-3 flex">
              <EnvelopeIcon className="h-6 w-6 text-white" aria-hidden="true" />
              <p className="ml-3 text-base text-white">
                info@kismetfinancegroup.com
              </p>
            </div>
          </div> */}

          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-white sm:text-3xl sm:tracking-tight">
              Quick Links
            </h2>
            <a
              href="#about"
              className="mt-3 text-base text-white hover:text-gray-300"
            >
              About Us
            </a>
            <a
              href="#services"
              className="text-base text-white hover:text-gray-300"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-base text-white hover:text-gray-300"
            >
              Contact
            </a>
          </div>

          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-white sm:text-3xl sm:tracking-tight">
              Legal
            </h2>
            <Link
              href="/terms-and-conditions"
              className="mt-3 flex text-base text-white hover:text-gray-300"
            >
              <DocumentTextIcon className="h-6 w-6" aria-hidden="true" />
              Terms & Conditions
            </Link>
            <Link
              href="/privacy-policy"
              className="mt-3 text-base text-white hover:text-gray-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
