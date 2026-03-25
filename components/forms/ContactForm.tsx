"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    // Simulate sending — replace with actual API endpoint
    await new Promise((r) => setTimeout(r, 1000));
    setSending(false);
    setSubmitted(true);
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-dark border border-white/5 rounded-xl p-12 text-center"
        >
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={32} className="text-primary" />
          </div>
          <h3 className="text-2xl font-black text-white">
            VIELEN DANK FUR IHRE NACHRICHT!
          </h3>
          <p className="mt-3 text-body-text">
            Ich melde mich innerhalb von 24 Stunden bei Ihnen.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          exit={{ opacity: 0 }}
          className="space-y-5"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-xs uppercase tracking-wide text-text-secondary mb-2"
            >
              Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
              placeholder="Ihr Name"
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-xs uppercase tracking-wide text-text-secondary mb-2"
            >
              Unternehmen
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
              placeholder="Ihr Unternehmen"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs uppercase tracking-wide text-text-secondary mb-2"
            >
              E-Mail *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
              placeholder="ihre@email.ch"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-xs uppercase tracking-wide text-text-secondary mb-2"
            >
              Telefon
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
              placeholder="+41 ..."
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-xs uppercase tracking-wide text-text-secondary mb-2"
            >
              Betreff
            </label>
            <select
              id="subject"
              name="subject"
              className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors appearance-none"
            >
              <option value="general">Allgemeine Anfrage</option>
              <option value="project">Projektanfrage</option>
              <option value="abo">Abo-Interesse</option>
              <option value="quote">Offerte anfordern</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs uppercase tracking-wide text-text-secondary mb-2"
            >
              Nachricht *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors resize-none"
              placeholder="Ihre Nachricht..."
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="w-full bg-primary text-dark font-semibold uppercase tracking-wide py-4 rounded-full text-sm hover:bg-primary/90 transition-colors disabled:opacity-60"
          >
            {sending ? "Wird gesendet..." : "Nachricht senden"}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
