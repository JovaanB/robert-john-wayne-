import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Réalisations — Nos chantiers en Thiérache",
  description:
    "Découvrez les chantiers réalisés par Les Frères Taloches : rénovations intérieure et extérieure, maçonnerie, carrelage, peinture en Thiérache (02).",
  alternates: {
    canonical: "https://www.lesfreres-taloches.fr/realisations",
  },
};

const placeholderProjects = [
  {
    label: "Rénovation complète",
    location: "La Capelle",
    desc: "Rénovation de A à Z : maçonnerie, plomberie, électricité, peinture.",
  },
  {
    label: "Extension de maison",
    location: "Hirson",
    desc: "Agrandissement sur 35 m² — fondations, murs, chape, second œuvre.",
  },
  {
    label: "Salle de bain",
    location: "Fourmies",
    desc: "Création d'une salle de bain : carrelage, faïence, plomberie, électricité.",
  },
  {
    label: "Ravalement de façade",
    location: "Avesnes-sur-Helpe",
    desc: "Enduit monocouche teinté sur maison années 70.",
  },
  {
    label: "Terrasse béton",
    location: "Sains-Richaumont",
    desc: "Dalle béton désactivé sur 60 m², escalier d'accès maçonné.",
  },
  {
    label: "Rénovation cuisine",
    location: "Vervins",
    desc: "Carrelage sol et mur, plomberie, raccordements électriques.",
  },
];

export default function RealisationsPage() {
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
            Réalisations
          </h1>
          <p className="mt-5 text-[#A89C8F] max-w-xl leading-relaxed">
            Quelques chantiers représentatifs de notre savoir-faire, en
            Thiérache et dans les environs.
          </p>
        </div>
      </section>

      {/* Coming soon notice */}
      <section className="bg-[#F0EBE3] border-b border-[#E2D9CD]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex items-start gap-4 bg-white border border-[#E2D9CD] rounded-lg p-5">
            <Camera size={20} className="text-[#C4944A] shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-[#1A1614]">Photos en cours d'ajout</p>
              <p className="text-sm text-[#7A7168] mt-1">
                La galerie photos est en cours de constitution. En attendant, vous
                pouvez nous contacter directement — on peut vous transmettre des
                photos de chantiers similaires à votre projet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project grid */}
      <section className="bg-[#FAF8F4] py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {placeholderProjects.map((project) => (
              <div
                key={project.label + project.location}
                className="bg-white border border-[#E2D9CD] rounded-lg overflow-hidden group"
              >
                {/* Placeholder image area */}
                <div className="h-48 bg-[#E2D9CD] flex items-center justify-center">
                  <Camera size={32} className="text-[#C4944A]/40" />
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h2
                      className="text-base font-semibold text-[#1A1614]"
                      style={{ fontFamily: "var(--font-dm-serif)" }}
                    >
                      {project.label}
                    </h2>
                    <span className="text-xs text-[#C4944A] bg-[#C4944A]/10 px-2 py-0.5 rounded">
                      {project.location}
                    </span>
                  </div>
                  <p className="text-sm text-[#7A7168]">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F0EBE3] border-t border-[#E2D9CD] py-14 sm:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <span className="gold-bar mb-6 mx-auto" />
          <h2
            className="text-3xl text-[#1A1614]"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Un projet similaire ?
          </h2>
          <p className="mt-4 text-[#7A7168]">
            Décrivez votre chantier, on vous rappelle rapidement pour discuter
            des travaux et établir un devis sans frais.
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
