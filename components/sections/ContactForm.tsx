/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { cn } from "../../lib/utils/cn";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const params = new URLSearchParams({
      subject: "Prise de contact portfolio",
      body: `Nom: ${data.get("name")}\nEmail: ${data.get("email")}\nMessage:\n${data.get("message")}`
    });
    window.location.href = `mailto:epembelefuala@gmail.com?${params.toString()}`;
    setStatus("sent");
  };

  return (
    <div className="card json-card fade-in-delayed">
      <h3 className="text-lg font-semibold">Écrire un message</h3>
      <p className="mt-2 text-white/70">
        Laissez vos coordonnées et un mot. L'email s'ouvrira automatiquement avec votre message.
      </p>
      <form onSubmit={onSubmit} className="mt-4 space-y-4">
        <div className="grid gap-3 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm text-white/80">
            Nom
            <input
              required
              name="name"
              className={inputClass}
              placeholder="Votre nom"
              autoComplete="name"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-white/80">
            Email
            <input
              required
              name="email"
              type="email"
              className={inputClass}
              placeholder="vous@example.com"
              autoComplete="email"
            />
          </label>
        </div>
        <label className="flex flex-col gap-2 text-sm text-white/80">
          Message
          <textarea
            required
            name="message"
            className={cn(inputClass, "min-h-[140px]")}
            placeholder="Expliquez votre besoin, vos délais, votre équipe..."
          />
        </label>
        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-string px-4 py-2 text-sm font-semibold text-black transition hover:scale-[1.02] hover:shadow-card active:translate-y-[1px]"
          >
            Envoyer
          </button>
          {status === "sent" && (
            <span className="text-sm text-white/70">Mail prêt à être envoyé dans votre client.</span>
          )}
        </div>
      </form>
    </div>
  );
}

const inputClass =
  "w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-white/40 shadow-inner focus:border-string focus:outline-none transition";
