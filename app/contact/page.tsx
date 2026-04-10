import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Devis gratuit sous 48h",
  description:
    "Contactez Les Frères Taloches pour un devis gratuit. Artisan BTP à La Capelle (02), interventions à Hirson, Fourmies, Avesnes-sur-Helpe et en Thiérache.",
  alternates: {
    canonical: "https://www.lesfreres-taloches.fr/contact",
  },
};

export default function ContactPage() {
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
            Demander un devis
          </h1>
          <p className="mt-5 text-[#A89C8F] max-w-xl leading-relaxed">
            Remplissez le formulaire ou appelez-nous directement. On se déplace
            gratuitement pour voir le chantier et vous remettre un devis
            détaillé sous 48h.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#FAF8F4] py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2
                className="text-2xl text-[#1A1614] mb-8"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                Coordonnées
              </h2>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded bg-[#C4944A]/10 flex items-center justify-center shrink-0">
                    <Phone size={15} className="text-[#C4944A]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#7A7168] mb-1">Téléphone</p>
                    <a
                      href="tel:+33300000000"
                      className="text-[#1A1614] font-medium hover:text-[#C4944A] transition-colors"
                    >
                      03 00 00 00 00
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded bg-[#C4944A]/10 flex items-center justify-center shrink-0">
                    <Mail size={15} className="text-[#C4944A]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#7A7168] mb-1">Email</p>
                    <a
                      href="mailto:contact@lesfreres-taloches.fr"
                      className="text-[#1A1614] font-medium hover:text-[#C4944A] transition-colors break-all"
                    >
                      contact@lesfreres-taloches.fr
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded bg-[#C4944A]/10 flex items-center justify-center shrink-0">
                    <MapPin size={15} className="text-[#C4944A]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#7A7168] mb-1">Secteur</p>
                    <p className="text-[#1A1614] font-medium">La Capelle, 02260 Aisne</p>
                    <p className="text-sm text-[#7A7168] mt-0.5">
                      Hirson · Fourmies · Avesnes-sur-Helpe<br />et toute la Thiérache
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded bg-[#C4944A]/10 flex items-center justify-center shrink-0">
                    <Clock size={15} className="text-[#C4944A]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#7A7168] mb-1">Horaires</p>
                    <p className="text-[#1A1614] font-medium">Lundi – Vendredi</p>
                    <p className="text-sm text-[#7A7168] mt-0.5">7h30 – 18h00</p>
                  </div>
                </li>
              </ul>

              {/* Info box */}
              <div className="mt-10 bg-[#0D0B09] rounded-lg p-6">
                <p className="text-sm font-semibold text-[#C4944A] mb-2">Comment ça marche ?</p>
                <ol className="space-y-3">
                  {[
                    "Vous décrivez votre projet par téléphone ou via le formulaire.",
                    "On convient d'un rendez-vous sur site, sans engagement.",
                    "On vous remet un devis détaillé sous 48h.",
                    "Validation, planification des travaux, c'est parti.",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#A89C8F]">
                      <span className="text-[#C4944A] font-semibold shrink-0 w-4">{i + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <h2
                className="text-2xl text-[#1A1614] mb-8"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                Décrivez votre projet
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
