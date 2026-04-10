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
    <header className="sticky top-0 z-50 bg-[#0A0807] border-b border-[#1E1B18]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[4.5rem]">

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group" aria-label="Les Frères Taloches — Accueil">
            <span
              className="text-xl sm:text-2xl font-bold tracking-tight text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Les Frères Taloches
            </span>
            <span
              className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase mt-0.5"
              style={{ color: "#C4944A", fontFamily: "var(--font-body)", fontWeight: 600 }}
            >
              Artisan BTP · La Capelle (02)
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link text-sm text-[#C8BFB4] hover:text-white transition-colors"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+33300000000"
              className="hidden sm:flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: "#C4944A", fontFamily: "var(--font-body)" }}
            >
              <Phone size={13} strokeWidth={2} />
              03 00 00 00 00
            </a>
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded transition-all"
              style={{
                background: "linear-gradient(135deg, #C4944A 0%, #D4A862 100%)",
                color: "#0A0807",
                fontFamily: "var(--font-body)",
                boxShadow: "0 2px 12px rgba(196,148,74,0.25)",
              }}
            >
              Devis gratuit
            </Link>
            <button
              className="lg:hidden text-white p-1.5 rounded"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="lg:hidden border-t"
          style={{ background: "#0D0B09", borderColor: "#1E1B18" }}
        >
          <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1" aria-label="Menu mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 px-2 text-sm border-b transition-colors"
                style={{
                  color: "#C8BFB4",
                  borderColor: "#1E1B18",
                  fontFamily: "var(--font-body)",
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+33300000000"
              className="mt-3 flex items-center justify-center gap-2 py-3.5 rounded text-sm font-semibold"
              style={{
                background: "linear-gradient(135deg, #C4944A 0%, #D4A862 100%)",
                color: "#0A0807",
                fontFamily: "var(--font-body)",
              }}
            >
              <Phone size={14} />
              03 00 00 00 00 — Appeler
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
