"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { menu, options } from "../../db/options";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Header */}
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-primary" : "bg-primary/95"
        }`}
      >
        <div className="page-container flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" passHref>
            <Image
              src={options.siteLogoSquare} // <- you can switch to `options.siteLogo` if preferred
              alt={options.siteName}
              height={60}
              width={120}
              className="w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-6 md:flex">
            {menu.map((item, idx) => (
              <Link href={item.href} key={idx} className="text-white" passHref>
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="text-white md:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </button>
        </div>
      </header>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in Mobile Menu */}
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-[80%] max-w-sm transform bg-primary text-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          {/* Logo */}
          <Link href="/" passHref>
            <Image
              src={options.siteLogoSquare} // <- you can switch to `options.siteLogo` if preferred
              alt={options.siteName}
              height={60}
              width={120}
              className="h-auto w-auto"
            />
          </Link>
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <FontAwesomeIcon icon={faX} className="text-xl" />
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-4">
          {menu.map((item, idx) => (
            <li key={idx}>
              <Link href={item.href} onClick={() => setIsOpen(false)} passHref>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
