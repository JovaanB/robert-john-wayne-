import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const services = [
  "Maçonnerie & Gros œuvre",
  "Ravalement de façade",
  "Carrelage & Parquet",
  "Peinture & Enduits",
  "Plomberie sanitaire",
  "Électricité",
  "Terrasses & Extérieurs",
];

const zones = ["La Capelle", "Hirson", "Fourmies", "Avesnes-sur-Helpe", "Thiérache (02)"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0B09] text-[#A89C8F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p
              className="text-xl text-white font-bold"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Les Frères Taloches
            </p>
            <span className="text-[10px] tracking-[0.18em] uppercase text-[#C4944A]">
              Artisan BTP · La Capelle (02)
            </span>
            <p className="mt-4 text-sm leading-relaxed">
              Entreprise artisanale spécialisée dans la rénovation intérieure et
              extérieure, gros œuvre et second œuvre, en Thiérache.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 border border-[#C4944A] text-[#C4944A] text-xs px-3 py-1.5 rounded">
              <span className="font-semibold tracking-wider">RGE</span>
              <span className="text-[#A89C8F]">Reconnu Garant de l'Environnement</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">
              Prestations
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm hover:text-[#C4944A] transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zone */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">
              Zone d'intervention
            </h3>
            <ul className="space-y-2.5">
              {zones.map((z) => (
                <li key={z} className="text-sm">
                  {z}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+33300000000"
                  className="flex items-center gap-2.5 text-sm hover:text-[#C4944A] transition-colors"
                >
                  <Phone size={14} className="text-[#C4944A] shrink-0" />
                  03 00 00 00 00
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@lesfreres-taloches.fr"
                  className="flex items-start gap-2.5 text-sm hover:text-[#C4944A] transition-colors"
                >
                  <Mail size={14} className="text-[#C4944A] shrink-0 mt-0.5" />
                  contact@lesfreres-taloches.fr
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <MapPin size={14} className="text-[#C4944A] shrink-0 mt-0.5" />
                La Capelle, 02260 Aisne
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center px-5 py-2.5 bg-[#C4944A] hover:bg-[#D4A862] text-[#0D0B09] text-sm font-semibold rounded transition-colors"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1E1A16]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-[#5C5047]">
          <p>© {year} Les Frères Taloches. Tous droits réservés.</p>
          <div className="flex gap-5">
            <Link href="/mentions-legales" className="hover:text-[#A89C8F] transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-[#A89C8F] transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
