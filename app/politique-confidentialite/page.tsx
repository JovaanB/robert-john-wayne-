import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité du site Les Frères Taloches.",
  robots: { index: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="bg-[#FAF8F4] py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1
          className="text-3xl text-[#1A1614] mb-10"
          style={{ fontFamily: "var(--font-dm-serif)" }}
        >
          Politique de confidentialité
        </h1>

        <div className="space-y-8 text-sm text-[#5C5047] leading-relaxed">
          <div>
            <h2 className="text-base font-semibold text-[#1A1614] mb-2">
              Données collectées
            </h2>
            <p>
              Le formulaire de contact collecte votre nom, numéro de téléphone,
              adresse email (facultatif), commune du chantier et description du
              projet. Ces informations sont utilisées exclusivement pour répondre
              à votre demande de devis.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#1A1614] mb-2">
              Conservation des données
            </h2>
            <p>
              Vos données sont conservées le temps nécessaire au traitement de
              votre demande, et supprimées dès lors que notre relation
              commerciale est terminée, et au plus tard 3 ans après le dernier
              contact.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#1A1614] mb-2">
              Vos droits
            </h2>
            <p>
              Conformément au RGPD, vous disposez d'un droit d'accès, de
              rectification et de suppression de vos données. Pour exercer ces
              droits, contactez-nous à :{" "}
              <a
                href="mailto:contact@lesfreres-taloches.fr"
                className="text-[#C4944A] hover:underline"
              >
                contact@lesfreres-taloches.fr
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#1A1614] mb-2">
              Cookies
            </h2>
            <p>
              Ce site n'utilise pas de cookies publicitaires ni de traceurs
              tiers. Aucune donnée n'est partagée à des fins commerciales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
