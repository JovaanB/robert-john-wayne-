"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Phone,
  CheckCircle,
  Award,
  Hammer,
  Star,
} from "lucide-react";

const ARGS = [
  "Devis gratuit sous 48h",
  "Certifié RGE",
  "Artisan local, travail soigné",
  "Interlocuteur unique de A à Z",
  "Plus de 15 ans d'expérience",
];

function useCounter(target: number, duration: number, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf: number;
    const start = performance.now();
    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, active]);
  return value;
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [countersActive, setCountersActive] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setCountersActive(true), 600);
    return () => clearTimeout(t);
  }, []);

  const years = useCounter(15, 1400, countersActive);
  const projects = useCounter(150, 1800, countersActive);

  return (
    <section className="hero-bg relative overflow-hidden">
      {/* Decorative geometric lines */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none select-none"
        style={{ opacity: 0.035 }}
      >
        <div
          className="absolute border border-white rounded-sm"
          style={{ width: 480, height: 480, top: "5%", right: "-4%", transform: "rotate(14deg)" }}
        />
        <div
          className="absolute border border-white rounded-sm"
          style={{ width: 340, height: 340, top: "18%", right: "7%", transform: "rotate(14deg)" }}
        />
        <div
          className="absolute border border-white rounded-sm"
          style={{ width: 220, height: 220, bottom: "10%", right: "22%", transform: "rotate(-8deg)" }}
        />
      </div>

      {/* Left accent bar */}
      <div
        aria-hidden
        className="absolute left-0 top-0 bottom-0 w-[3px]"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, #C4944A 30%, #C4944A 70%, transparent 100%)",
          opacity: 0.55,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 pt-20 pb-28 sm:pt-28 sm:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* ── LEFT COLUMN ─────────────────────────────────── */}
          <div
            className="lg:col-span-3"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "none" : "translateY(20px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 border text-xs px-4 py-2 rounded-full mb-10"
              style={{
                borderColor: "rgba(196,148,74,0.35)",
                background: "rgba(196,148,74,0.08)",
                color: "#C4944A",
                animation: "fade-up 0.6s ease forwards",
              }}
            >
              <Shield size={11} />
              <span className="tracking-widest font-semibold uppercase" style={{ fontFamily: "var(--font-body)" }}>
                Certifié RGE
              </span>
              <span className="w-1 h-1 rounded-full bg-current opacity-60" />
              <span className="tracking-wide opacity-80">Reconnu Garant de l'Environnement</span>
            </div>

            {/* Headline */}
            <h1
              className="text-5xl sm:text-6xl lg:text-[4.25rem] text-white leading-[1.06] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Votre rénovation,{" "}
              <br />
              <span className="text-gradient">de A à Z.</span>
            </h1>

            <p
              className="mt-7 text-lg leading-relaxed max-w-lg"
              style={{
                color: "#9B8E84",
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                opacity: mounted ? 1 : 0,
                transition: "opacity 0.8s ease 0.2s",
              }}
            >
              Artisan BTP en Thiérache — maçonnerie, carrelage, peinture,
              plomberie, électricité. Un seul interlocuteur, zéro sous-traitance,
              des chantiers livrés dans les règles de l'art.
            </p>

            {/* CTAs */}
            <div
              className="mt-10 flex flex-col sm:flex-row gap-4"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "none" : "translateY(8px)",
                transition: "opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s",
              }}
            >
              <Link href="/contact" className="btn-gold group">
                <span>Demander un devis gratuit</span>
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <a href="tel:+33300000000" className="btn-outline">
                <Phone size={14} style={{ color: "#C4944A" }} />
                03 00 00 00 00
              </a>
            </div>

            {/* Arguments */}
            <ul className="mt-9 flex flex-wrap gap-x-5 gap-y-3">
              {ARGS.map((arg, i) => (
                <li
                  key={arg}
                  className="flex items-center gap-2 text-sm"
                  style={{
                    color: "#9B8E84",
                    fontFamily: "var(--font-body)",
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? "none" : "translateY(6px)",
                    transition: `opacity 0.6s ease ${0.5 + i * 0.08}s, transform 0.6s ease ${0.5 + i * 0.08}s`,
                  }}
                >
                  <CheckCircle size={13} style={{ color: "#C4944A", flexShrink: 0 }} />
                  {arg}
                </li>
              ))}
            </ul>
          </div>

          {/* ── RIGHT COLUMN — Stat cards ────────────────────── */}
          <div
            className="lg:col-span-2 flex flex-col gap-4"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "none" : "translateY(24px)",
              transition: "opacity 0.9s ease 0.25s, transform 0.9s ease 0.25s",
            }}
          >
            {/* Years card */}
            <div className="stat-card">
              <div className="flex items-start justify-between">
                <div>
                  <p
                    className="text-5xl text-white leading-none"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {years}
                    <span style={{ color: "#C4944A" }}>+</span>
                  </p>
                  <p
                    className="mt-2 text-sm"
                    style={{ color: "#7A7168", fontFamily: "var(--font-body)" }}
                  >
                    années d'expérience en BTP
                  </p>
                </div>
                <Award size={22} style={{ color: "#C4944A", opacity: 0.5, marginTop: 4 }} />
              </div>
            </div>

            {/* Projects card */}
            <div className="stat-card">
              <div className="flex items-start justify-between">
                <div>
                  <p
                    className="text-5xl text-white leading-none"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {projects}
                    <span style={{ color: "#C4944A" }}>+</span>
                  </p>
                  <p
                    className="mt-2 text-sm"
                    style={{ color: "#7A7168", fontFamily: "var(--font-body)" }}
                  >
                    chantiers réalisés en Thiérache
                  </p>
                </div>
                <Star size={22} style={{ color: "#C4944A", opacity: 0.5, marginTop: 4 }} />
              </div>
            </div>

            {/* Trades card */}
            <div className="stat-card">
              <div className="flex items-start justify-between">
                <div>
                  <p
                    className="text-5xl text-white leading-none"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    8
                  </p>
                  <p
                    className="mt-2 text-sm"
                    style={{ color: "#7A7168", fontFamily: "var(--font-body)" }}
                  >
                    corps de métier maîtrisés
                  </p>
                </div>
                <Hammer size={22} style={{ color: "#C4944A", opacity: 0.5, marginTop: 4 }} />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Maçonnerie", "Carrelage", "Peinture", "Électricité", "Plomberie"].map((m) => (
                  <span
                    key={m}
                    className="text-xs px-2.5 py-1 rounded border"
                    style={{
                      color: "#A89C8F",
                      background: "#0D0B09",
                      borderColor: "#2A2420",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 scroll-cue" aria-hidden>
        <div
          className="w-px h-10 mx-auto"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(196,148,74,0.5))" }}
        />
        <div
          className="w-1.5 h-1.5 rounded-full mx-auto mt-1"
          style={{ background: "rgba(196,148,74,0.5)" }}
        />
      </div>
    </section>
  );
}
