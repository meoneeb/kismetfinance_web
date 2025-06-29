import { faFacebook, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMapMarker, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";

export const options = {
  siteName: "Kismet Financials",
  siteLogo: "/logo/logo.png",
  siteLogoSquare: "/logo/logo-square.png",
};

export const socialMediaLinks = [
  {
    name: "facebook",
    icon: faFacebookF,
    href: "#",
  },
  {
    name: "facebook",
    icon: faInstagram,
    href: "#",
  },
];
export const contact = [
  {
    name: "Phone",
    icon: faPhone,
    value: "+08 6285 8501",
    href: "#",
  },
  {
    name: "Address",
    icon: faMapMarkerAlt,
    value: (
      <>
        52 Cooper Road
        <br />
        Cockburn Central, WA 6164
      </>
    ),
    href: "#",
  },
];
export const menu = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About us",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  { name: "Calculate", href: "/calculator" },
  {
    name: "Contact",
    href: "/contact",
  },
];
