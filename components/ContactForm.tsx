"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const services = [
  "Maçonnerie / Gros œuvre",
  "Extension / Agrandissement",
  "Ravalement de façade",
  "Carrelage / Parquet",
  "Peinture / Enduits",
  "Plomberie sanitaire",
  "Électricité",
  "Terrasse / Extérieur",
  "Rénovation complète",
  "Autre",
];

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");

    // TODO: wire to a real backend / email service (Resend, Formspree, etc.)
    await new Promise((r) => setTimeout(r, 800));
    setState("success");
  };

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6 bg-white border border-[#E2D9CD] rounded-lg">
        <CheckCircle size={40} className="text-[#C4944A] mb-4" />
        <h3
          className="text-2xl text-[#1A1614] mb-3"
          style={{ fontFamily: "var(--font-dm-serif)" }}
        >
          Message bien reçu.
        </h3>
        <p className="text-[#7A7168] max-w-sm">
          Merci pour votre demande. On revient vers vous sous 48h pour
          convenir d'un rendez-vous sur chantier.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-white border border-[#E2D9CD] rounded px-4 py-3 text-sm text-[#1A1614] placeholder:text-[#B0A89E] focus:outline-none focus:border-[#C4944A] transition-colors";
  const labelClass = "block text-xs font-semibold uppercase tracking-wider text-[#7A7168] mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Nom & prénom <span className="text-[#C4944A]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jean Dupont"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Téléphone <span className="text-[#C4944A]">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="06 00 00 00 00"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jean@exemple.fr"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="city" className={labelClass}>
            Commune du chantier <span className="text-[#C4944A]">*</span>
          </label>
          <input
            id="city"
            name="city"
            type="text"
            required
            value={form.city}
            onChange={handleChange}
            placeholder="La Capelle, Hirson…"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>
          Type de travaux <span className="text-[#C4944A]">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          value={form.service}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="" disabled>
            Sélectionner une prestation
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Description du projet <span className="text-[#C4944A]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Décrivez votre chantier : surface, état actuel, travaux souhaités, délai envisagé…"
          className={inputClass + " resize-none"}
        />
      </div>

      <p className="text-xs text-[#B0A89E]">
        * Champs obligatoires. Vos informations sont utilisées uniquement pour
        répondre à votre demande, conformément à notre politique de
        confidentialité.
      </p>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#C4944A] hover:bg-[#D4A862] disabled:opacity-60 text-[#0D0B09] font-semibold rounded transition-colors"
      >
        {state === "submitting" ? (
          "Envoi en cours…"
        ) : (
          <>
            Envoyer la demande
            <Send size={14} />
          </>
        )}
      </button>
    </form>
  );
}
