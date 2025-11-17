import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

// 🔗 GLOBAL LINK
const PROPERTY_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSe1G0A6BjzUyeZONN8mazt3Eo9FB9YkuFXnxWGoSa0-7v0HFA/viewform";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
      ${
        scrolled || open
          ? "bg-black/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* LEFT: Logo + Name */}
        <div className="flex items-center gap-3">
          <img
            src="/logo png1.png"
            alt="RentSetters Logo"
            className="w-10 h-10 object-cover"
          />
          <span
            className="text-white font-bold text-xl tracking-wide"
            style={{ fontFamily: "MyFont" }}
          >
            RentSetters
          </span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-white hover:text-indigo-300 transition text-sm font-semibold">
            About
          </a>
          <a href="#services" className="text-white hover:text-indigo-300 transition text-sm font-semibold">
            Services
          </a>
          <a href="#areas" className="text-white hover:text-indigo-300 transition text-sm font-semibold">
            Area
          </a>
          <a href="#contact" className="text-white hover:text-indigo-300 transition text-sm font-semibold">
            Contact
          </a>

          {/* BUTTON */}
          <a
            target="_blank"
            href={PROPERTY_LINK}
            className="property-button text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-all"
          >
            List or Find Property
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden text-3xl"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`md:hidden bg-black/90 backdrop-blur-md transition-all duration-300 overflow-hidden
          ${open ? "max-h-60 py-2" : "max-h-0 py-0"}
        `}
      >
        <div className="flex flex-col items-center gap-4 text-white text-lg font-medium">
          <a onClick={() => setOpen(false)} href="#about" className="hover:text-indigo-300">
            About
          </a>
          <a onClick={() => setOpen(false)} href="#services" className="hover:text-indigo-300">
            Services
          </a>
          <a onClick={() => setOpen(false)} href="#areas" className="hover:text-indigo-300">
            Area
          </a>
          <a onClick={() => setOpen(false)} href="#contact" className="hover:text-indigo-300">
            Contact
          </a>

          {/* MOBILE BUTTON */}
          <a
            target="_blank"
            onClick={() => setOpen(false)}
            href={PROPERTY_LINK}
            className="property-button px-4 py-2 rounded-lg shadow text-white"
          >
            List or Find Property
          </a>
        </div>
      </div>
    </nav>
  );
}
