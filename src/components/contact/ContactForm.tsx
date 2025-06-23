import { Field, Input, Label, Switch, Textarea } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";

export default function ContactForm() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="mx-auto max-w-4xl border bg-white p-4 md:p-16">
      <form className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Field>
            <Label htmlFor="fname" className="style-label">
              First name
            </Label>
            <Input
              id="fname"
              name="fname"
              type="text"
              className="style-input"
              autoComplete="given-name"
              placeholder="Enter your first name"
            />
          </Field>
          <Field>
            <Label htmlFor="lname" className="style-label">
              Last name
            </Label>
            <Input
              id="lname"
              name="lname"
              type="text"
              autoComplete="family-name"
              className="style-input"
              placeholder="Enter your last name"
            />
          </Field>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Field>
            <Label htmlFor="email" className="style-label">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              className="style-input"
              autoComplete="email"
              placeholder="Enter your email"
            />
          </Field>
          <Field>
            <Label htmlFor="phone" className="style-label">
              Phone number
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className="style-input"
              placeholder="Enter your phone number"
            />
          </Field>
        </div>
        <Field>
          <Label htmlFor="message" className="style-label">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            className="style-input"
            placeholder="Enter your messageerterty"
          />
        </Field>
        <Field className="flex gap-x-4 sm:col-span-2">
          <div className="flex h-6 items-center">
            <Switch
              checked={agreed}
              onChange={setAgreed}
              className="group flex h-4 w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 data-[checked]:bg-sky-600"
            >
              <span className="sr-only">Agree to policies</span>
              <span
                aria-hidden="true"
                className="size-4 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
              />
            </Switch>
          </div>
          <Label className="text-base text-gray-600">
            By selecting this, you agree to our{" "}
            <Link
              href="/privacy-policy"
              className="font-medium underline"
              passHref
            >
              privacy&nbsp;policy
            </Link>
            .
          </Label>
        </Field>
        <button type="submitttt"></button>
      </form>
    </div>
  );
}

const inputs = [
  { type: "text", name: "name", required: true },
  { type: "email", name: "email", required: true },
  { type: "tel", name: "phone", required: true },
  { type: "textarea", name: "name", required: true },
];
