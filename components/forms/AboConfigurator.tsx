"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Share2,
  Camera,
  Video,
  Palette,
  Globe,
  Mail,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const serviceOptions = [
  { id: "social", label: "Social Media Beiträge", icon: Share2 },
  { id: "foto", label: "Fotoshooting", icon: Camera },
  { id: "video", label: "Video", icon: Video },
  { id: "grafik", label: "Grafikdesign", icon: Palette },
  { id: "website", label: "Website", icon: Globe },
  { id: "newsletter", label: "Newsletter", icon: Mail },
  { id: "beratung", label: "Beratung", icon: Lightbulb },
];

const contentTypes = [
  { id: "geliefert", label: "Gelieferter Content", desc: "Kunde liefert Material" },
  { id: "fotos", label: "Fotos erstellen", desc: "b-emotion erstellt Fotos" },
  { id: "videos", label: "Videos erstellen", desc: "b-emotion erstellt Videos" },
  { id: "mix", label: "Mix", desc: "Kombination" },
];

const budgetOptions = [
  "< CHF 500",
  "CHF 500-1000",
  "CHF 1000-2000",
  "CHF 2000-5000",
  "> CHF 5000",
  "Noch offen",
];

const postCounts = [4, 8, 12, 16, 20];

export function AboConfigurator() {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [socialPosts, setSocialPosts] = useState(8);
  const [selectedContentType, setSelectedContentType] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    preferredContact: "email",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const hasSocial = selectedServices.includes("social");
  const totalSteps = hasSocial ? 4 : 3;
  const adjustedStep = !hasSocial && step >= 2 ? step + 1 : step;

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const toggleContentType = (id: string) => {
    setSelectedContentType((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const canNext = () => {
    if (step === 1) return selectedServices.length > 0;
    if (step === 2 && hasSocial) return true;
    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!contact.name || !contact.company || !contact.email) return;
    setSending(true);
    setError("");

    try {
      const serviceLabels = serviceOptions
        .filter((s) => selectedServices.includes(s.id))
        .map((s) => s.label);

      const contentLabels = contentTypes
        .filter((c) => selectedContentType.includes(c.id))
        .map((c) => c.label);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "abo",
          name: contact.name,
          company: contact.company,
          email: contact.email,
          phone: contact.phone,
          preferredContact: contact.preferredContact,
          services: serviceLabels,
          socialPosts: hasSocial ? socialPosts : null,
          contentType: hasSocial ? contentLabels : null,
          budget,
          description,
        }),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || "Fehler beim Senden.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Fehler beim Senden. Bitte versuchen Sie es erneut.");
    } finally {
      setSending(false);
    }
  };

  const nextStep = () => {
    if (step === 1 && !hasSocial) {
      setStep(3);
    } else if (step < 4) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step === 3 && !hasSocial) {
      setStep(1);
    } else if (step > 1) {
      setStep(step - 1);
    }
  };

  const currentDisplay = !hasSocial && step >= 3 ? step - 1 : step;

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-dark border border-white/5 rounded-xl p-12 text-center"
      >
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check size={32} className="text-primary" />
        </div>
        <h3 className="text-2xl font-black text-white">
          VIELEN DANK FÜR IHRE ANFRAGE!
        </h3>
        <p className="mt-3 text-body-text">
          Ich melde mich innerhalb von 24 Stunden bei Ihnen.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-dark border border-white/5 rounded-xl p-6 md:p-10">
      {/* Progress */}
      <div className="flex items-center justify-between mb-8">
        <span className="text-xs uppercase tracking-wide text-text-secondary" aria-live="polite">
          Schritt {currentDisplay} von {totalSteps}
        </span>
        <div className="flex gap-1.5">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={`h-1 w-8 rounded-full transition-colors ${
                i < currentDisplay ? "bg-primary" : "bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* Step 1: Services */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-lg font-black text-white uppercase mb-6">
              Welche Leistungen benötigen Sie?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {serviceOptions.map((opt) => {
                const selected = selectedServices.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => toggleService(opt.id)}
                    aria-pressed={selected}
                    className={`flex items-center gap-3 p-4 rounded-lg border text-left transition-all ${
                      selected
                        ? "border-primary bg-primary/10 text-white"
                        : "border-white/10 text-body-text hover:border-white/20"
                    }`}
                  >
                    <opt.icon
                      size={20}
                      className={selected ? "text-primary" : "text-white/40"}
                    />
                    <span className="text-sm font-medium">{opt.label}</span>
                    {selected && (
                      <Check size={16} className="text-primary ml-auto" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Step 2: Social Media Details */}
        {step === 2 && hasSocial && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-lg font-black text-white uppercase mb-6">
              Social Media Details
            </h3>
            <div className="mb-6">
              <label className="block text-xs uppercase tracking-wide text-text-secondary mb-3">
                Anzahl Beiträge pro Monat
              </label>
              <div className="flex gap-2">
                {postCounts.map((count) => (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setSocialPosts(count)}
                    className={`px-4 py-2 rounded-lg text-sm border transition-all ${
                      socialPosts === count
                        ? "border-primary bg-primary/10 text-primary font-semibold"
                        : "border-white/10 text-body-text hover:border-white/20"
                    }`}
                  >
                    {count}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wide text-text-secondary mb-3">
                Art des Contents
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {contentTypes.map((ct) => {
                  const sel = selectedContentType.includes(ct.id);
                  return (
                    <button
                      key={ct.id}
                      type="button"
                      onClick={() => toggleContentType(ct.id)}
                      aria-pressed={sel}
                      className={`p-4 rounded-lg border text-left transition-all ${
                        sel
                          ? "border-primary bg-primary/10"
                          : "border-white/10 hover:border-white/20"
                      }`}
                    >
                      <span className="text-sm font-medium text-white">
                        {ct.label}
                      </span>
                      <p className="text-xs text-body-text mt-1">{ct.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 3: Budget */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-lg font-black text-white uppercase mb-6">
              Budget & Projekt
            </h3>
            <div className="mb-6">
              <label className="block text-xs uppercase tracking-wide text-text-secondary mb-2">
                Monatliches Budget
              </label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full bg-bg-page border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors appearance-none"
              >
                <option value="">Bitte wählen...</option>
                {budgetOptions.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wide text-text-secondary mb-2">
                Projektbeschreibung
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="w-full bg-bg-page border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors resize-none"
                placeholder="Erzählen Sie mir von Ihrem Projekt..."
              />
            </div>
          </motion.div>
        )}

        {/* Step 4: Contact */}
        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-lg font-black text-white uppercase mb-6">
              Kontaktdaten
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wide text-text-secondary mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={contact.name}
                    onChange={(e) =>
                      setContact({ ...contact, name: e.target.value })
                    }
                    className="w-full bg-bg-page border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wide text-text-secondary mb-2">
                    Unternehmen *
                  </label>
                  <input
                    type="text"
                    required
                    value={contact.company}
                    onChange={(e) =>
                      setContact({ ...contact, company: e.target.value })
                    }
                    className="w-full bg-bg-page border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wide text-text-secondary mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  required
                  value={contact.email}
                  onChange={(e) =>
                    setContact({ ...contact, email: e.target.value })
                  }
                  className="w-full bg-bg-page border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wide text-text-secondary mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  value={contact.phone}
                  onChange={(e) =>
                    setContact({ ...contact, phone: e.target.value })
                  }
                  className="w-full bg-bg-page border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wide text-text-secondary mb-2">
                  Bevorzugte Kontaktart
                </label>
                <div className="flex gap-3">
                  {["E-Mail", "Telefon", "WhatsApp"].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() =>
                        setContact({
                          ...contact,
                          preferredContact: opt.toLowerCase(),
                        })
                      }
                      className={`px-4 py-2 rounded-lg text-sm border transition-all ${
                        contact.preferredContact === opt.toLowerCase()
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-white/10 text-body-text"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
              {error && (
                <p className="text-red-400 text-sm text-center" role="alert">{error}</p>
              )}

              <div className="flex items-center justify-between mt-6">
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center gap-1 text-sm text-body-text hover:text-white transition-colors"
                >
                  <ChevronLeft size={16} />
                  Zurück
                </button>
                <button
                  type="submit"
                  disabled={sending}
                  className="bg-primary text-dark font-semibold uppercase tracking-wide px-8 py-3 rounded-full text-sm hover:bg-primary/90 transition-colors disabled:opacity-60"
                >
                  {sending ? "Wird gesendet..." : "Anfrage senden"}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      {step < 4 && (
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
          <button
            onClick={prevStep}
            disabled={step === 1}
            className="flex items-center gap-1 text-sm text-body-text hover:text-white disabled:opacity-30 transition-colors"
          >
            <ChevronLeft size={16} />
            Zurück
          </button>
          <button
            onClick={nextStep}
            disabled={!canNext()}
            className="flex items-center gap-1 text-sm text-primary font-semibold hover:text-primary/80 disabled:opacity-30 transition-colors"
          >
            Weiter
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
