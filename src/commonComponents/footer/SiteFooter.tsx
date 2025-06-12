import Image from "next/image";
import { contact, options, socialMediaLinks } from "../../db/options";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SiteFooter() {
  const disclaimer =
    "Kismet Finance Group connects Australians with licensed professionals tailored to their needs. We do not provide financial, legal, or tax services directly. Our Service is referral-based, and we do not charge clients. We encourage clients to seek professional guidance before making financial decisions.";
<<<<<<< HEAD
=======

>>>>>>> 04983d8 (Initial commit with updated logo and layout redesign)
  return (
    <div className="w-full bg-primary">
      <div className="page-container flex flex-col items-center py-12 md:flex-row">
        <Image
          src={options.siteLogoSquare}
          width={256}
          height={256}
          alt={options.siteName}
        />
        <div>
          <div className="mb-6 flex flex-col gap-6 md:flex-row">
            <div className="w-full md:w-2/3">
              <p className="mb-2 text-center text-lg font-semibold tracking-tight text-white md:text-left">
                Contact us
              </p>
<<<<<<< HEAD
              <div className="mx-auto flex flex flex-1 flex-col gap-2 md:flex-row md:gap-4">
                {contact.map((item, idx) => (
                  <Link
                    href={"/"}
=======
              <div className="mx-auto flex flex-1 flex-col gap-2 md:flex-row md:gap-4">
                {contact.map((item, idx) => (
                  <Link
                    href="/"
>>>>>>> 04983d8 (Initial commit with updated logo and layout redesign)
                    key={idx}
                    className="flex w-fit flex-1 gap-2"
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="mt-1 text-secondary"
                    />
<<<<<<< HEAD

=======
>>>>>>> 04983d8 (Initial commit with updated logo and layout redesign)
                    <p className="text-white">{item.value}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-start md:w-1/3 md:items-start">
              <p className="mb-2 text-lg font-semibold tracking-tight text-white">
                Follow us
              </p>
              <div className="flex items-center gap-2">
                {socialMediaLinks.map((item, idx) => (
                  <Link href={item.href} key={idx}>
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="text-2xl text-secondary"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <p className="mb-4 text-center text-sm font-light text-white md:text-left">
            {disclaimer}
          </p>
<<<<<<< HEAD
          <p className="text-center text-sm  text-white md:text-left">
            &copy; {new Date().getFullYear()} Kismet Finance. All rights
            reserved.
=======
          <p className="text-center text-sm text-white md:text-left">
            &copy; {new Date().getFullYear()} Kismet Finance. All rights reserved.
>>>>>>> 04983d8 (Initial commit with updated logo and layout redesign)
          </p>
        </div>
      </div>
    </div>
  );
}
