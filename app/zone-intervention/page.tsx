import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Zone d'intervention — Thiérache et Aisne (02)",
  description:
    "Les Frères Taloches interviennent à La Capelle, Hirson, Fourmies, Avesnes-sur-Helpe et dans tout le secteur de la Thiérache (Aisne, 02). Devis gratuit.",
  alternates: {
    canonical: "https://www.lesfreres-taloches.fr/zone-intervention",
  },
};

const zones = [
  {
    region: "Secteur principal",
    communes: [
      { name: "La Capelle", cp: "02260", note: "Siège de l'entreprise" },
      { name: "Mondrepuis", cp: "02360" },
      { name: "Saint-Michel", cp: "02830" },
      { name: "Gergny", cp: "02260" },
      { name: "Dorengt", cp: "02450" },
    ],
  },
  {
    region: "Hirson & alentours",
    communes: [
      { name: "Hirson", cp: "02500" },
      { name: "Neuve-Maison", cp: "02500" },
      { name: "Watigny", cp: "02830" },
      { name: "Étréaupont", cp: "02580" },
      { name: "Wimy", cp: "02500" },
    ],
  },
  {
    region: "Fourmies & Avesnois",
    communes: [
      { name: "Fourmies", cp: "59610" },
      { name: "Wignehies", cp: "59212" },
      { name: "Avesnes-sur-Helpe", cp: "59440" },
      { name: "Trélon", cp: "59132" },
      { name: "Sémeries", cp: "59440" },
    ],
  },
  {
    region: "Vervins & Laon",
    communes: [
      { name: "Vervins", cp: "02140" },
      { name: "Sains-Richaumont", cp: "02120" },
      { name: "La Fère", cp: "02800" },
      { name: "Marle", cp: "02250" },
      { name: "Rozoy-sur-Serre", cp: "02360" },
    ],
  },
];

export default function ZonePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D0B09] py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <span className="gold-bar mb-6" />
          <h1
            className="text-4xl sm:text-5xl text-white"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Zone d'intervention
          </h1>
          <p className="mt-5 text-[#A89C8F] max-w-xl leading-relaxed">
            On intervient principalement dans un rayon de 40 km autour de La
            Capelle, dans l'Aisne (02) et les communes limitrophes du Nord.
            Pas de surcoût de déplacement dans ce secteur.
          </p>
        </div>
      </section>

      {/* Main info */}
      <section className="bg-[#F0EBE3] border-b border-[#E2D9CD] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Rayon habituel",
                body: "40 km autour de La Capelle, sans frais de déplacement supplémentaires.",
              },
              {
                title: "Déplacement au-delà",
                body: "On peut intervenir plus loin selon la nature et l'ampleur du chantier. Nous demander.",
              },
              {
                title: "Devis sur place",
                body: "On se déplace gratuitement pour estimer vos travaux, quelle que soit la distance dans la zone.",
              },
            ].map((info) => (
              <div key={info.title} className="bg-white border border-[#E2D9CD] rounded-lg p-6">
                <p
                  className="text-sm font-semibold text-[#C4944A] uppercase tracking-wider mb-2"
                >
                  {info.title}
                </p>
                <p className="text-sm text-[#5C5047] leading-relaxed">{info.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communes grid */}
      <section className="bg-[#FAF8F4] py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2
            className="text-2xl sm:text-3xl text-[#1A1614] mb-10"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Communes desservies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {zones.map((zone) => (
              <div key={zone.region}>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-[#C4944A] mb-4">
                  {zone.region}
                </h3>
                <ul className="space-y-2.5">
                  {zone.communes.map((c) => (
                    <li key={c.name} className="flex items-start gap-2.5">
                      <MapPin
                        size={13}
                        className="text-[#C4944A] shrink-0 mt-0.5"
                      />
                      <div>
                        <span className="text-sm text-[#1A1614] font-medium">
                          {c.name}
                        </span>
                        <span className="ml-1.5 text-xs text-[#B0A89E]">
                          {c.cp}
                        </span>
                        {c.note && (
                          <p className="text-xs text-[#C4944A] mt-0.5">{c.note}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm text-[#7A7168] border-t border-[#E2D9CD] pt-6">
            Cette liste n'est pas exhaustive. Si votre commune n'est pas listée,
            contactez-nous : on étudie chaque demande.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0D0B09] py-14 sm:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <span className="gold-bar mb-6 mx-auto" />
          <h2
            className="text-3xl text-white"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Vous êtes dans la zone ?
          </h2>
          <p className="mt-4 text-[#A89C8F]">
            Décrivez votre projet et on se déplace pour un devis gratuit.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 px-7 py-3.5 bg-[#C4944A] hover:bg-[#D4A862] text-[#0D0B09] font-semibold rounded transition-colors"
          >
            Demander un devis <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
