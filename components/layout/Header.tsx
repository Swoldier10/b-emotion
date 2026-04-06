"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileMenu } from "./MobileMenu";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Logo } from "@/components/ui/Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/angebot", label: "Angebot" },
  { href: "/projekte", label: "Projekte" },
  { href: "/ueber-mich", label: "Über mich" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg-page/90 backdrop-blur-lg border-b border-white/5"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav
          className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20"
          aria-label="Hauptnavigation"
        >
          <Logo />

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm uppercase tracking-wide font-light transition-colors duration-300 group ${
                  pathname === link.href ? "text-primary" : "text-white hover:text-primary"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[1px] transition-all duration-300 ${
                    pathname === link.href
                      ? "w-full bg-primary"
                      : "w-0 group-hover:w-full bg-teal"
                  }`}
                />
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <MagneticButton href="/kontakt">Kontakt</MagneticButton>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5"
            aria-label={mobileOpen ? "Menü schliessen" : "Menü öffnen"}
            aria-expanded={mobileOpen}
          >
            <motion.span
              className="block w-6 h-[1.5px] bg-white origin-center"
              animate={
                mobileOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-[1.5px] bg-white"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-[1.5px] bg-white origin-center"
              animate={
                mobileOpen
                  ? { rotate: -45, y: -4.5 }
                  : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.2 }}
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
