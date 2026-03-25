"use client";

import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { FadeIn } from "@/components/animations/FadeIn";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { socialLinks } from "@/components/ui/SocialIcons";
import Link from "next/link";

export function KontaktPage() {
  return (
    <>
      <PageHero
        title="KONTAKT"
        subtitle="Lassen Sie uns uber Ihr Projekt sprechen."
      />

      <section className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <FadeIn>
            <ContactForm />
            <p className="mt-6 text-sm text-text-secondary">
              Oder konfigurieren Sie Ihr Abo direkt &rarr;{" "}
              <Link
                href="/abo"
                className="text-primary hover:underline underline-offset-4"
              >
                ABO-KONFIGURATOR
              </Link>
            </p>
          </FadeIn>

          {/* Contact Info */}
          <FadeIn delay={0.2}>
            <div className="bg-dark border border-white/5 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center">
                  <span className="text-lg font-black text-white">MB</span>
                </div>
                <div>
                  <p className="text-white font-bold">Marc Baumann</p>
                  <p className="text-text-secondary text-sm">
                    Inhaber, b-emotion
                  </p>
                </div>
              </div>

              <div className="space-y-4 mt-8">
                <a
                  href="mailto:mail@b-emotion.ch"
                  className="flex items-center gap-3 text-teal hover:text-primary transition-colors"
                >
                  <Mail size={18} />
                  <span className="text-sm">mail@b-emotion.ch</span>
                </a>
                <a
                  href="tel:+41765646273"
                  className="flex items-center gap-3 text-teal hover:text-primary transition-colors"
                >
                  <Phone size={18} />
                  <span className="text-sm">+41 76 564 62 73</span>
                </a>
                <a
                  href="https://wa.me/41765646273"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-green-500 hover:text-green-400 transition-colors"
                >
                  <MessageCircle size={18} />
                  <span className="text-sm">WhatsApp schreiben</span>
                </a>
                <div className="flex items-center gap-3 text-body-text">
                  <MapPin size={18} className="shrink-0" />
                  <span className="text-sm">
                    Bettenstrasse 19, 9212 Arnegg SG
                  </span>
                </div>
              </div>

              <div className="flex gap-3 mt-8 pt-6 border-t border-white/5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-colors"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
