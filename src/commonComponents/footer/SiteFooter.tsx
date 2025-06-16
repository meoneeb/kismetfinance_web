import Image from "next/image";
import { contact, options, socialMediaLinks } from "../../db/options";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SiteFooter() {
  const disclaimer =
    "Kismet Finance Group connects Australians with licensed professionals tailored to their needs. We do not provide financial, legal, or tax services directly. Our Service is referral-based, and we do not charge clients. We encourage clients to seek professional guidance before making financial decisions.";
  return (
    <div className="w-full bg-primary">
      <div className="page-container flex flex-col items-end py-6 md:flex-row md:gap-8">
        <div className="flex w-full items-center justify-center md:w-1/5">
          <Image
            src={options.siteLogoSquare}
            width={256}
            height={256}
            alt={options.siteName}
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center  md:w-3/5">
          <div className="mb-6 flex w-full flex-col gap-6  md:flex-row">
            <div className="w-full">
              <p className="mb-4 text-center text-3xl font-semibold tracking-tight text-white">
                Contact us
              </p>

              <div className="mx-auto flex w-fit flex-col gap-2 md:flex-row md:gap-4">
                {contact.map((item, idx) => (
                  <Link href="/" key={idx} className="flex w-fit gap-2">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="mt-1 text-secondary"
                    />
                    <p className="font-medium text-white">{item.value}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <p className="mb-4 text-center text-sm font-light text-white md:text-left">
            {disclaimer}
          </p>
        </div>
        <div className="flex w-full flex-col items-center justify-start md:w-1/5">
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

      <div className="page-container py-4">
        <p className=" text-center text-sm text-white">
          &copy; {new Date().getFullYear()} Kismet Finance. All rights reserved.
        </p>
      </div>
    </div>
  );
}
