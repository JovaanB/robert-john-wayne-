import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Nos prestations — Maçonnerie, Rénovation, Carrelage, Peinture",
  description:
    "Découvrez toutes les prestations des Frères Taloches : maçonnerie, gros œuvre, ravalement, carrelage, parquet, peinture, plomberie, électricité, terrasses. Artisan BTP à La Capelle (02).",
  alternates: {
    canonical: "https://www.lesfreres-taloches.fr/services",
  },
};

const categories = [
  {
    id: "gros-oeuvre",
    label: "Gros œuvre",
    color: "bg-[#1A1614]",
    services: [
      {
        title: "Maçonnerie générale",
        items: [
          "Fondations filantes ou isolées",
          "Murs en parpaing, brique, pierre",
          "Dalles béton, chapes",
          "Linteaux, poutres, poteaux",
          "Ouvertures dans murs porteurs",
          "Démolition & terrassement léger",
        ],
        desc: "On intervient sur toute la structure de votre bâtiment, neuf comme en rénovation. Reprise de fondation, création d'ouverture, construction d'extension — chaque intervention est réalisée dans les règles de l'art.",
      },
      {
        title: "Extensions & Agrandissements",
        items: [
          "Extension de maison individuelle",
          "Garage accolé ou intégré",
          "Véranda et abri de terrasse maçonné",
          "Surélévation partielle ou totale",
          "Aménagement de combles perdus",
        ],
        desc: "Vous manquez de place ? On conçoit et réalise votre projet d'extension en coordonnant l'ensemble des corps de métier. Un seul interlocuteur du plan à la clé.",
      },
    ],
  },
  {
    id: "exterieur",
    label: "Extérieur",
    color: "bg-[#2E2925]",
    services: [
      {
        title: "Ravalement de façade",
        items: [
          "Nettoyage haute pression",
          "Enduit traditionnel ou monocouche",
          "Peinture façade minérale ou acrylique",
          "Badigeon, crépi",
          "Réparation de fissures",
          "Traitement des remontées capillaires",
        ],
        desc: "Une façade soignée, c'est la première impression de votre maison. On travaille avec des matériaux adaptés aux bâtiments anciens comme récents, en respectant les contraintes locales.",
      },
      {
        title: "Terrasses & Aménagements extérieurs",
        items: [
          "Dalle béton coulée sur place",
          "Terrasse bois ou composite",
          "Allée et chemin de jardin",
          "Escalier extérieur",
          "Muret et clôture maçonnée",
          "Platerie & empierrement",
        ],
        desc: "Du dallage à l'escalier en pierre reconstituée, on aménage vos espaces extérieurs avec soin. Travaux préparés correctement, sur terrain sain — pas de précipitation.",
      },
    ],
  },
  {
    id: "second-oeuvre",
    label: "Second œuvre",
    color: "bg-[#F0EBE3]",
    services: [
      {
        title: "Carrelage & Revêtements de sol",
        items: [
          "Carrelage intérieur toutes pièces",
          "Faïence salle de bain et cuisine",
          "Parquet massif et flottant",
          "Parquet contrecollé",
          "Ragréage et préparation de support",
          "Plinthes et finitions",
        ],
        desc: "Pose sur chape neuve ou sur l'existant, avec préparation soignée du support. Tous formats de carreaux, toutes essences de bois. On coupe, on pose, on finit proprement.",
      },
      {
        title: "Peinture & Enduits",
        items: [
          "Enduit de lissage plâtre ou placo",
          "Peinture intérieure toutes pièces",
          "Impression, sous-couche, finition",
          "Peinture à la chaux",
          "Enduit décoratif et tadelakt",
          "Peinture extérieure",
        ],
        desc: "La peinture, c'est souvent l'étape finale — celle qui valorise tout le reste. On prépare les supports correctement avant d'appliquer : pas de raccourci, pas de cache-misère.",
      },
      {
        title: "Plomberie sanitaire",
        items: [
          "Installation de salle de bain complète",
          "Pose de WC, lavabo, douche, baignoire",
          "Remplacement de chauffe-eau",
          "Réseau d'alimentation et évacuation",
          "Raccordement lave-linge, lave-vaisselle",
          "Dépannage et recherche de fuite",
        ],
        desc: "Rénovation ou création de salle de bain, mise en place d'une cuisine équipée : on gère la plomberie dans le cadre d'un chantier global ou en prestation indépendante.",
      },
      {
        title: "Électricité",
        items: [
          "Tableau électrique et mise aux normes",
          "Création de circuits et points lumineux",
          "Prises, interrupteurs, variateurs",
          "VMC et ventilation",
          "Câblage informatique et fibre",
          "Éclairage extérieur",
        ],
        desc: "Mise aux normes NF C 15-100, création de tableau, tirage de câbles pour une rénovation complète. On travaille proprement, en gaines ou sous moulures selon la configuration.",
      },
    ],
  },
];

export default function ServicesPage() {
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
            Nos prestations
          </h1>
          <p className="mt-5 text-[#A89C8F] max-w-2xl leading-relaxed">
            Gros œuvre, second œuvre, aménagements extérieurs — on couvre
            l'ensemble des travaux de rénovation sans toiture ni isolation.
            Tout ce qui est listé ici, on le fait nous-mêmes, sur place.
          </p>
        </div>
      </section>

      {/* Categories */}
      {categories.map((cat) => (
        <section key={cat.id} className="py-14 sm:py-20 border-b border-[#E2D9CD]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="mb-10 flex items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C4944A]">
                {cat.label}
              </span>
              <div className="flex-1 h-px bg-[#E2D9CD]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cat.services.map((service) => (
                <div
                  key={service.title}
                  className="bg-white border border-[#E2D9CD] rounded-lg overflow-hidden"
                >
                  <div className="p-7">
                    <h2
                      className="text-xl text-[#1A1614] mb-3"
                      style={{ fontFamily: "var(--font-dm-serif)" }}
                    >
                      {service.title}
                    </h2>
                    <p className="text-sm text-[#7A7168] leading-relaxed mb-5">
                      {service.desc}
                    </p>
                    <ul className="space-y-2">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-[#5C5047]"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C4944A] shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-[#0D0B09] py-16 sm:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <span className="gold-bar mb-6 mx-auto" />
          <h2
            className="text-3xl text-white"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Votre prestation n'est pas listée ?
          </h2>
          <p className="mt-4 text-[#A89C8F]">
            Appelez-nous ou envoyez une description de votre projet. On vous
            dit rapidement si on peut intervenir, et dans quels délais.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#C4944A] hover:bg-[#D4A862] text-[#0D0B09] font-semibold rounded transition-colors"
            >
              Nous contacter <ArrowRight size={15} />
            </Link>
            <a
              href="tel:+33300000000"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[#2E2925] hover:border-[#C4944A]/50 text-white rounded transition-colors"
            >
              <Phone size={15} className="text-[#C4944A]" />
              03 00 00 00 00
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
