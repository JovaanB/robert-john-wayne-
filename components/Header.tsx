"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Nos prestations" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/zone-intervention", label: "Zone d'intervention" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0D0B09] border-b border-[#2E2925]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span
              className="text-xl sm:text-2xl font-bold tracking-tight text-white"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Les Frères Taloches
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.18em] uppercase text-[#C4944A] mt-0.5">
              Artisan BTP · La Capelle (02)
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link text-sm text-[#C8BFB4] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+33300000000"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-[#C4944A] hover:text-[#D4A862] transition-colors"
            >
              <Phone size={14} strokeWidth={2} />
              03 00 00 00 00
            </a>
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center px-5 py-2.5 bg-[#C4944A] hover:bg-[#D4A862] text-[#0D0B09] text-sm font-semibold rounded transition-colors"
            >
              Devis gratuit
            </Link>
            <button
              className="lg:hidden text-white p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#111009] border-t border-[#2E2925]">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 px-2 text-[#C8BFB4] hover:text-white border-b border-[#2E2925] last:border-0 text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+33300000000"
              className="mt-3 flex items-center justify-center gap-2 py-3 bg-[#C4944A] text-[#0D0B09] font-semibold rounded text-sm"
            >
              <Phone size={15} />
              03 00 00 00 00 — Appeler
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
