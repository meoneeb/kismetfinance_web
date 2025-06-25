import { Field, Input, Label, Switch, Textarea } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";

export default function ContactForm() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="mx-auto bg-white">
      <iframe
        aria-label="Contact Us"
        frameBorder="0"
        style={{ height: "1080px", width: "100%", border: "none" }}
        src="https://forms.zohopublic.com.au/kismetfinancegroup1/form/ContactUs/formperma/v__eca-m_N0ItXlPSYZHebm5IAovJav3E4E8Jndu7fA"
      ></iframe>
    </div>
  );
}

const inputs = [
  { type: "text", name: "name", required: true },
  { type: "email", name: "email", required: true },
  { type: "tel", name: "phone", required: true },
  { type: "textarea", name: "name", required: true },
];
