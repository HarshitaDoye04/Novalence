"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import SmoothScrollLink from "./SmoothScrollLink";

const NAV_LINKS = [
  { href: "#services",   label: "Services" },
  { href: "#expertise",  label: "Expertise" },
  { href: "#why",        label: "Why Us" },
  { href: "#technology", label: "Our Approach" },
  { href: "#contact",    label: "Contact Us" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-teal-800 hover:bg-teal-50 transition-colors"
      >
        <Menu size={22} />
      </button>

      {/* Backdrop */}
      <div
        onClick={close}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-50 w-[280px] h-screen bg-white shadow-2xl flex flex-col md:hidden transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 shrink-0">
          <Image
            src="/logo.png"
            alt="Novalence"
            width={110}
            height={30}
            className="object-contain mix-blend-multiply"
          />
          <button
            onClick={close}
            aria-label="Close menu"
            className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:bg-teal-50 hover:text-teal-700 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Breadcrumb */}
        <div className="px-5 pt-4 pb-3 shrink-0">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-teal-500 mb-1.5">
            Navigation
          </p>
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <span className="text-teal-700 font-semibold">Home</span>
            <span>›</span>
            <span>Sections</span>
          </div>
          <div className="mt-3 h-px bg-gray-100" />
        </div>

        {/* Links */}
        <nav className="flex-1 px-3 py-1 overflow-y-auto">
          {NAV_LINKS.map(({ href, label }, i) => {
            const isContact = label === "Contact Us";
            return (
              <SmoothScrollLink
                key={href}
                href={href}
                onClick={close}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all group mb-1 ${
                  isContact
                    ? "mt-2 bg-teal-800 text-white hover:bg-teal-700"
                    : "text-gray-700 hover:bg-teal-50 hover:text-teal-700"
                }`}
              >
                {!isContact && (
                  <span className="w-6 h-6 shrink-0 rounded-full bg-teal-50 border border-teal-200 text-teal-600 text-[10px] font-bold flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600 transition-all">
                    {i + 1}
                  </span>
                )}
                {label}
              </SmoothScrollLink>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-gray-100 shrink-0">
          <p className="text-[10px] text-gray-400 text-center">
            © 2026 Novalence. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
