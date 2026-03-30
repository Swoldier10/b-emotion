"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { socialLinks } from "@/components/ui/SocialIcons";
import { Logo } from "@/components/ui/Logo";
import { FadeIn } from "@/components/animations/FadeIn";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/angebot", label: "Angebot" },
  { href: "/projekte", label: "Projekte" },
  { href: "/ueber-mich", label: "Uber mich" },
  { href: "/kontakt", label: "Kontakt" },
];

const serviceLinks = [
  { href: "/angebot/beratung", label: "Beratung" },
  { href: "/angebot/grafik-design", label: "Grafik & Design" },
  { href: "/angebot/foto-video", label: "Foto & Video" },
  { href: "/angebot/social-media", label: "Social Media" },
  { href: "/angebot/websites-newsletter", label: "Websites / Newsletter" },
  { href: "/angebot/begleitung", label: "Begleitung" },
];

// socialLinks imported from SocialIcons

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A]">
      <div className="h-[2px] bg-gradient-to-r from-transparent via-teal/50 to-transparent" />
      <FadeIn>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <Logo />
              <p className="mt-3 text-sm text-text-secondary">
                Content, Grafik & Digital
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wide text-teal mb-4">
                Navigation
              </h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-body-text hover:text-teal transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wide text-teal mb-4">
                Services
              </h4>
              <ul className="space-y-2">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-body-text hover:text-teal transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wide text-teal mb-4">
                Kontakt
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-body-text">
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  Bettenstrasse 19, 9212 Arnegg SG
                </li>
                <li>
                  <a
                    href="tel:+41765646273"
                    className="flex items-center gap-2 text-sm text-teal hover:text-primary transition-colors"
                  >
                    <Phone size={16} />
                    +41 76 564 62 73
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:mail@b-emotion.ch"
                    className="flex items-center gap-2 text-sm text-teal hover:text-primary transition-colors"
                  >
                    <Mail size={16} />
                    mail@b-emotion.ch
                  </a>
                </li>
              </ul>
              <div className="flex gap-3 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-secondary">
          <p>&copy; 2025 b-emotion Marc Baumann. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4">
            <Link
              href="/impressum"
              className="hover:text-primary transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="hover:text-primary transition-colors"
            >
              Datenschutz
            </Link>
            <Link
              href="/agb"
              className="hover:text-primary transition-colors"
            >
              AGB
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
