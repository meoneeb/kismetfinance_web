import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactForm from "./ContactForm";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function FormSection() {
  return (
    <div className="w-full bg-zinc-100">
      <div className="page-container py-12">
        <div className="mx-auto flex w-fit flex-row items-center gap-2 pb-8">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-lg text-secondary"
          />
          <Link
            href="mailto:admin@kismetfinancegroup.com"
            passHref
            className="text-lg text-gray-600"
          >
            admin@kismetfinancegroup.com
          </Link>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
