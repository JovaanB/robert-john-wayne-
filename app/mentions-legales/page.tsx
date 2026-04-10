import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Les Frères Taloches.",
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <section className="bg-[#FAF8F4] py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1
          className="text-3xl text-[#1A1614] mb-10"
          style={{ fontFamily: "var(--font-dm-serif)" }}
        >
          Mentions légales
        </h1>

        <div className="space-y-8 text-sm text-[#5C5047] leading-relaxed">
          <div>
            <h2 className="text-base font-semibold text-[#1A1614] mb-2">
              Éditeur du site
            </h2>
            <p>
              Les Frères Taloches<br />
              La Capelle, 02260 Aisne<br />
              Téléphone : 03 00 00 00 00<br />
              Email : contact@lesfreres-taloches.fr<br />
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#1A1614] mb-2">
              Hébergement
            </h2>
            <p>
              Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 701,
              San Francisco, CA 94104, États-Unis.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#1A1614] mb-2">
              Propriété intellectuelle
            </h2>
            <p>
              L'ensemble du contenu de ce site (textes, structure, visuels)
              est la propriété de Les Frères Taloches, sauf mention contraire.
              Toute reproduction sans autorisation écrite est interdite.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#1A1614] mb-2">
              Responsabilité
            </h2>
            <p>
              Les informations fournies sur ce site sont données à titre
              indicatif et peuvent être modifiées sans préavis. Nous ne saurions
              être tenus responsables d'erreurs ou d'omissions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
