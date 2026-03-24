"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#solutions", label: "Solutions" },
  { href: "#showcase", label: "Showcase" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`site-header${isMenuOpen ? " site-header-open" : ""}`}>
      <Link className="brand" href="#top" aria-label="Undugu Triad home" onClick={closeMenu}>
        <Image
          src="/Undugu%20Logo.png"
          alt="Undugu Triad Engineering logo"
          width={114}
          height={76}
          priority
        />
        <span className="brand-text">
          <strong>Undugu Triad</strong>
          <span>Engineering</span>
        </span>
      </Link>

      <button
        type="button"
        className="menu-toggle"
        aria-expanded={isMenuOpen}
        aria-controls="primary-menu"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`site-nav${isMenuOpen ? " site-nav-open" : ""}`} id="primary-menu" aria-label="Primary">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="button button-nav" href="#contact" onClick={closeMenu}>
        Start an enquiry
      </a>
    </header>
  );
}
