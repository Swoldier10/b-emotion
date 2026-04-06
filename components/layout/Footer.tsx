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
  { href: "/ueber-mich", label: "Über mich" },
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

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A]">
      <div className="h-[2px] bg-gradient-to-r from-transparent via-teal/50 to-transparent" />
      <FadeIn>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-20">
          {/* Mobile: compact layout / Desktop: 4 columns */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Logo + tagline — full width on mobile */}
            <div className="col-span-2 lg:col-span-1">
              <Logo />
              <p className="mt-2 text-sm text-text-secondary">
                Content, Grafik & Digital
              </p>
              {/* Social icons — inline on mobile under logo */}
              <div className="flex gap-3 mt-4 lg:hidden">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation — left column on mobile */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wide text-teal mb-3">
                Navigation
              </h4>
              <ul className="space-y-1.5">
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

            {/* Services — right column on mobile */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wide text-teal mb-3">
                Services
              </h4>
              <ul className="space-y-1.5">
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

            {/* Contact — full width on mobile, single column on desktop */}
            <div className="col-span-2 lg:col-span-1">
              <h4 className="text-xs font-bold uppercase tracking-wide text-teal mb-3">
                Kontakt
              </h4>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <span className="flex items-center gap-2 text-body-text">
                  <MapPin size={14} className="shrink-0" />
                  Arnegg SG
                </span>
                <a
                  href="tel:+41765646273"
                  className="flex items-center gap-2 text-teal hover:text-primary transition-colors"
                >
                  <Phone size={14} />
                  +41 76 564 62 73
                </a>
                <a
                  href="mailto:mail@b-emotion.ch"
                  className="flex items-center gap-2 text-teal hover:text-primary transition-colors"
                >
                  <Mail size={14} />
                  mail@b-emotion.ch
                </a>
              </div>
              {/* Social icons — desktop only (mobile shows under logo) */}
              <div className="hidden lg:flex gap-3 mt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-text-secondary">
          <p>&copy; {new Date().getFullYear()} b-emotion Marc Baumann</p>
          <div className="flex gap-4">
            <Link href="/impressum" className="hover:text-primary transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-primary transition-colors">
              Datenschutz
            </Link>
            <Link href="/agb" className="hover:text-primary transition-colors">
              AGB
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
