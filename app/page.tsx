import Link from "next/link";
import {
  ArrowRight,
  Phone,
  MapPin,
  Building2,
  Home,
  PaintBucket,
  Grid2x2,
  Paintbrush,
  Wrench,
  Zap,
  TreePine,
  CheckCircle2,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";

const services = [
  {
    Icon: Building2,
    title: "Maçonnerie & Gros œuvre",
    desc: "Fondations, murs porteurs, dalles, agglos, béton. On intervient dès la structure, avant comme après le plancher.",
  },
  {
    Icon: Home,
    title: "Extensions & Agrandissements",
    desc: "Véranda, pièce supplémentaire, garage accolé. On conçoit et réalise les travaux de A à Z.",
  },
  {
    Icon: PaintBucket,
    title: "Ravalement de façade",
    desc: "Nettoyage, enduit, badigeon, peinture extérieure. La façade de votre maison retrouve son aspect d'origine.",
  },
  {
    Icon: Grid2x2,
    title: "Carrelage & Parquet",
    desc: "Pose sur chape neuve ou ancienne, joints, finitions. Tous types de matériaux, toutes surfaces.",
  },
  {
    Icon: Paintbrush,
    title: "Peinture & Enduits",
    desc: "Lissage, enduit de finition, peinture intérieure et extérieure. Préparation des supports comprise.",
  },
  {
    Icon: Wrench,
    title: "Plomberie sanitaire",
    desc: "Salle de bain, cuisine, WC. Installation, remplacement ou rénovation complète de vos équipements.",
  },
  {
    Icon: Zap,
    title: "Électricité",
    desc: "Mise aux normes, tableau électrique, points lumineux, prises. Travaux courants forts et faibles.",
  },
  {
    Icon: TreePine,
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

const process = [
  { n: "01", title: "Contact", desc: "Appelez-nous ou remplissez le formulaire. On vous répond sous 24h." },
  { n: "02", title: "Visite gratuite", desc: "On se déplace sur votre chantier pour évaluer les travaux." },
  { n: "03", title: "Devis détaillé", desc: "Vous recevez un devis clair, sans frais cachés, sous 48h." },
  { n: "04", title: "Réalisation", desc: "Nos équipes interviennent et assurent le suivi jusqu'à la livraison." },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <HeroSection />

      {/* ===== INTRO ===== */}
      <section className="bg-[#F0EBE3] border-b border-[#E2D9CD]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label">Notre philosophie</span>
            <span className="gold-bar mb-6" />
            <h2
              className="text-3xl sm:text-4xl text-[#1A1614] leading-snug"
              style={{ fontFamily: "var(--font-display)" }}
            >
              L'artisanat qui tient ses murs.
            </h2>
            <p
              className="mt-5 leading-relaxed text-[#5C5047]"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              Les Frères Taloches, c'est une entreprise artisanale fondée sur un
              principe simple : bien faire le travail, du premier coup. On n'est
              pas un prestataire qui sous-traite — on intervient directement sur
              vos chantiers, avec nos propres équipes.
            </p>
            <p
              className="mt-4 leading-relaxed text-[#5C5047]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Gros œuvre, second œuvre, rénovation intérieure ou extérieure :
              on a les compétences pour gérer l'ensemble de votre projet sans
              que vous ayez à coordonner plusieurs corps de métier.
            </p>
            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold transition-colors group"
              style={{ color: "#C4944A", fontFamily: "var(--font-body)" }}
            >
              Découvrir nos prestations
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "+15 ans", label: "d'expérience en BTP", sub: "Fondés sur le savoir-faire" },
              { value: "8", label: "corps de métier", sub: "Un seul interlocuteur" },
              { value: "RGE", label: "Certifié & qualifié", sub: "Garant de l'Environnement" },
              { value: "Aisne 02", label: "zone d'intervention", sub: "& communes limitrophes" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white border border-[#E2D9CD] rounded-lg p-6 hover:border-[#C4944A]/30 hover:shadow-sm transition-all"
              >
                <p
                  className="text-3xl text-[#C4944A]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.value}
                </p>
                <p
                  className="mt-1.5 text-sm font-medium text-[#1A1614]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {s.label}
                </p>
                <p
                  className="mt-0.5 text-xs text-[#9B8E84]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {s.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="bg-[#FAF8F4] py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="mb-14">
            <span className="section-label">Ce qu'on fait</span>
            <span className="gold-bar mb-6" />
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2
                className="text-3xl sm:text-4xl text-[#1A1614]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Nos prestations
              </h2>
              <Link
                href="/services"
                className="btn-gold-outline shrink-0 self-start sm:self-auto"
              >
                Toutes nos prestations <ArrowRight size={14} />
              </Link>
            </div>
            <p
              className="mt-4 text-[#7A7168] max-w-xl"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Du premier parpaing à la dernière couche de peinture — on couvre
              l'ensemble des travaux de rénovation intérieure et extérieure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map(({ Icon, title, desc }) => (
              <div key={title} className="service-card group">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                  style={{ background: "rgba(196,148,74,0.1)", transition: "background 0.3s ease" }}
                >
                  <Icon
                    size={19}
                    style={{ color: "#C4944A" }}
                    className="transition-transform group-hover:scale-110"
                  />
                </div>
                <h3
                  className="text-base font-semibold text-[#1A1614] mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm text-[#7A7168] leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="bg-[#F0EBE3] border-y border-[#E2D9CD] py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="mb-14 text-center">
            <span className="section-label mx-auto">Comment ça se passe</span>
            <span className="gold-bar mb-6 mx-auto" />
            <h2
              className="text-3xl sm:text-4xl text-[#1A1614]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              De votre appel à la livraison.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map(({ n, title, desc }, i) => (
              <div key={n} className="relative">
                {/* Connector line */}
                {i < process.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-6 left-full w-full h-px z-0"
                    style={{ background: "linear-gradient(90deg, #E2D9CD, transparent)", width: "calc(100% - 3rem)", left: "calc(3rem + 1px)" }}
                    aria-hidden
                  />
                )}
                <div className="relative z-10">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-5 text-sm font-bold border-2"
                    style={{
                      fontFamily: "var(--font-body)",
                      borderColor: "#C4944A",
                      color: "#C4944A",
                      background: "#FAF8F4",
                    }}
                  >
                    {n}
                  </div>
                  <h3
                    className="text-base font-semibold text-[#1A1614] mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-sm text-[#7A7168] leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ZONE ===== */}
      <section className="bg-[#0A0807] py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-label">Où on intervient</span>
              <span className="gold-bar mb-6" />
              <h2
                className="text-3xl sm:text-4xl text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                On intervient en Thiérache
                <br />
                et alentours.
              </h2>
              <p
                className="mt-5 leading-relaxed"
                style={{ color: "#9B8E84", fontFamily: "var(--font-body)" }}
              >
                Basés à La Capelle dans l'Aisne (02), on se déplace sur
                l'ensemble de la Thiérache et les secteurs limitrophes.{" "}
                <strong className="text-[#C8BFB4] font-medium">
                  Pas de surcoût de déplacement dans un rayon d'environ 40 km.
                </strong>
              </p>

              {/* Guarantees */}
              <ul className="mt-7 flex flex-col gap-3">
                {[
                  "Déplacement gratuit pour l'estimation",
                  "Devis détaillé sans engagement",
                  "Intervention rapide selon disponibilités",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm"
                    style={{ color: "#9B8E84", fontFamily: "var(--font-body)" }}
                  >
                    <CheckCircle2 size={14} style={{ color: "#C4944A", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/zone-intervention"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold group"
                style={{ color: "#C4944A", fontFamily: "var(--font-body)", transition: "color 0.2s" }}
              >
                Voir la zone complète
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-3">
              {zones.map((zone) => (
                <div key={zone} className="zone-badge">
                  <MapPin size={11} style={{ color: "#C4944A", flexShrink: 0 }} />
                  {zone}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section
        className="py-20 sm:py-28 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1A1614 0%, #0A0807 100%)" }}
      >
        {/* Subtle gold glow */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(196,148,74,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <span className="section-label mx-auto">Prêt à démarrer ?</span>
          <span className="gold-bar mb-7 mx-auto" />
          <h2
            className="text-3xl sm:text-5xl text-white leading-snug"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Un projet de rénovation ?
          </h2>
          <p
            className="mt-5 text-lg leading-relaxed"
            style={{ color: "#9B8E84", fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            On se déplace gratuitement pour étudier votre chantier et vous
            remettre un devis détaillé sous 48h.{" "}
            <span style={{ color: "#C8BFB4" }}>Pas d'engagement, pas de frais cachés.</span>
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold group">
              <span>Demander un devis gratuit</span>
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a href="tel:+33300000000" className="btn-outline">
              <Phone size={14} style={{ color: "#C4944A" }} />
              03 00 00 00 00
            </a>
          </div>

          {/* Trust signals */}
          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs"
            style={{ color: "#7A7168", fontFamily: "var(--font-body)" }}
          >
            {["Devis gratuit sous 48h", "RGE certifié", "15+ ans d'expérience", "Zéro sous-traitance"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <span style={{ color: "#C4944A" }}>✓</span>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
