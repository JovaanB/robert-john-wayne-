import Link from "next/link";
import { ArrowRight, Shield, Wrench, Home, CheckCircle, MapPin, Phone } from "lucide-react";

const services = [
  {
    icon: "🧱",
    title: "Maçonnerie & Gros œuvre",
    desc: "Fondations, murs porteurs, dalles, agglos, béton. On intervient dès la structure, avant comme après le plancher.",
  },
  {
    icon: "🏠",
    title: "Extensions & Agrandissements",
    desc: "Véranda, pièce supplémentaire, garage accolé. On conçoit et réalise les travaux de A à Z.",
  },
  {
    icon: "🪟",
    title: "Ravalement de façade",
    desc: "Nettoyage, enduit, badigeon, peinture extérieure. La façade de votre maison retrouve son aspect d'origine.",
  },
  {
    icon: "🔲",
    title: "Carrelage & Parquet",
    desc: "Pose sur chape neuve ou ancienne, joints, finitions. Tous types de matériaux, toutes surfaces.",
  },
  {
    icon: "🎨",
    title: "Peinture & Enduits",
    desc: "Lissage, enduit de finition, peinture intérieure et extérieure. Préparation des supports comprise.",
  },
  {
    icon: "🔧",
    title: "Plomberie sanitaire",
    desc: "Salle de bain, cuisine, WC. Installation, remplacement ou rénovation complète de vos équipements.",
  },
  {
    icon: "⚡",
    title: "Électricité",
    desc: "Mise aux normes, tableau électrique, points lumineux, prises. Travaux courants forts et faibles.",
  },
  {
    icon: "🪵",
    title: "Terrasses & Extérieurs",
    desc: "Dalle béton, terrasse bois ou composite, allée, escalier extérieur. Conception et réalisation.",
  },
];

const zones = [
  "La Capelle",
  "Hirson",
  "Fourmies",
  "Avesnes-sur-Helpe",
  "Vervins",
  "Mondrepuis",
  "Sains-Richaumont",
  "Thiérache (02)",
];

const arguments_ = [
  "Devis gratuit sous 48h",
  "Certifié RGE",
  "Artisan local, travail soigné",
  "Gros œuvre et second œuvre",
  "Interlocuteur unique de A à Z",
  "Plus de 15 ans d'expérience",
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative bg-[#0D0B09] overflow-hidden">
        {/* Texture overlay */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 3px)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
          {/* RGE badge */}
          <div className="inline-flex items-center gap-2 border border-[#C4944A]/40 bg-[#C4944A]/10 text-[#C4944A] text-xs px-3 py-1.5 rounded mb-8">
            <Shield size={12} />
            <span className="tracking-wider font-medium">Certifié RGE · Reconnu Garant de l'Environnement</span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl text-white leading-tight max-w-3xl"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Du gros œuvre au
            <br />
            <span className="text-[#C4944A]">dernier coup de pinceau.</span>
          </h1>

          <p className="mt-6 text-[#A89C8F] text-base sm:text-lg max-w-xl leading-relaxed">
            Artisan BTP en Thiérache, on prend en charge votre rénovation de bout en
            bout — maçonnerie, carrelage, peinture, plomberie, électricité.
            Basés à La Capelle, on intervient à Hirson, Fourmies, Avesnes-sur-Helpe
            et dans tout le département de l'Aisne.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#C4944A] hover:bg-[#D4A862] text-[#0D0B09] font-semibold rounded transition-colors"
            >
              Demander un devis gratuit
              <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+33300000000"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[#2E2925] hover:border-[#C4944A]/50 text-white rounded transition-colors"
            >
              <Phone size={15} className="text-[#C4944A]" />
              03 00 00 00 00
            </a>
          </div>

          {/* Arguments */}
          <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-2.5">
            {arguments_.map((arg) => (
              <li key={arg} className="flex items-center gap-2 text-sm text-[#A89C8F]">
                <CheckCircle size={13} className="text-[#C4944A] shrink-0" />
                {arg}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="bg-[#F0EBE3] border-b border-[#E2D9CD]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="gold-bar mb-5" />
            <h2
              className="text-3xl sm:text-4xl text-[#1A1614] leading-snug"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              L'artisanat qui tient ses murs.
            </h2>
            <p className="mt-5 text-[#5C5047] leading-relaxed">
              Les Frères Taloches, c'est une entreprise artisanale fondée sur
              un principe simple : bien faire le travail, du premier coup. On
              n'est pas un prestataire qui sous-traite — on intervient
              directement sur vos chantiers, avec nos propres équipes.
            </p>
            <p className="mt-4 text-[#5C5047] leading-relaxed">
              Gros œuvre, second œuvre, rénovation intérieure ou extérieure :
              on a les compétences pour gérer l'ensemble de votre projet sans
              que vous ayez à coordonner plusieurs corps de métier.
            </p>
            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#C4944A] hover:text-[#A67C35] transition-colors"
            >
              Découvrir nos prestations <ArrowRight size={14} />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-5">
            {[
              { value: "+15 ans", label: "d'expérience en BTP" },
              { value: "8", label: "corps de métier maîtrisés" },
              { value: "RGE", label: "Certifié & qualifié" },
              { value: "02", label: "et communes limitrophes" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-[#E2D9CD] rounded-lg p-6"
              >
                <p
                  className="text-3xl text-[#C4944A]"
                  style={{ fontFamily: "var(--font-dm-serif)" }}
                >
                  {stat.value}
                </p>
                <p className="mt-1.5 text-sm text-[#7A7168]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="bg-[#FAF8F4] py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <span className="gold-bar mb-5" />
            <h2
              className="text-3xl sm:text-4xl text-[#1A1614]"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Nos prestations
            </h2>
            <p className="mt-4 text-[#7A7168] max-w-xl">
              Du premier parpaing à la dernière couche de peinture — on couvre
              l'ensemble des travaux de rénovation intérieure et extérieure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-white border border-[#E2D9CD] rounded-lg p-6 hover:border-[#C4944A]/50 hover:shadow-sm transition-all"
              >
                <span className="text-2xl mb-4 block">{service.icon}</span>
                <h3
                  className="text-base font-semibold text-[#1A1614] mb-2"
                  style={{ fontFamily: "var(--font-dm-serif)" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm text-[#7A7168] leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3 border border-[#C4944A] text-[#C4944A] hover:bg-[#C4944A] hover:text-white rounded font-medium text-sm transition-colors"
            >
              Voir toutes nos prestations <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ZONE ===== */}
      <section className="bg-[#0D0B09] py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="gold-bar mb-5" />
              <h2
                className="text-3xl sm:text-4xl text-white"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                On intervient
                <br />
                en Thiérache et alentours.
              </h2>
              <p className="mt-5 text-[#A89C8F] leading-relaxed">
                Basés à La Capelle dans l'Aisne (02), on se déplace sur
                l'ensemble de la Thiérache et les secteurs limitrophes. Pas de
                surcoût de déplacement dans un rayon d'environ 40 km.
              </p>
              <Link
                href="/zone-intervention"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#C4944A] hover:text-[#D4A862] transition-colors"
              >
                Voir la zone complète <ArrowRight size={14} />
              </Link>
            </div>

            <div className="flex flex-wrap gap-3">
              {zones.map((zone) => (
                <div
                  key={zone}
                  className="flex items-center gap-2 bg-[#1A1614] border border-[#2E2925] text-[#C8BFB4] text-sm px-4 py-2.5 rounded"
                >
                  <MapPin size={12} className="text-[#C4944A] shrink-0" />
                  {zone}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#F0EBE3] border-t border-[#E2D9CD] py-16 sm:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <span className="gold-bar mb-6 mx-auto" />
          <h2
            className="text-3xl sm:text-4xl text-[#1A1614]"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Un projet de rénovation ?
          </h2>
          <p className="mt-4 text-[#7A7168] leading-relaxed">
            On se déplace gratuitement pour étudier votre chantier et vous
            remettre un devis détaillé sous 48h. Pas d'engagement, pas de
            frais cachés.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#C4944A] hover:bg-[#D4A862] text-[#0D0B09] font-semibold rounded transition-colors"
            >
              Demander un devis gratuit <ArrowRight size={15} />
            </Link>
            <a
              href="tel:+33300000000"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-[#C4944A] text-[#C4944A] hover:bg-[#C4944A] hover:text-white rounded font-medium transition-colors"
            >
              <Phone size={15} />
              03 00 00 00 00
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
