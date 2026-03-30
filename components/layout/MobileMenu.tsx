"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone } from "lucide-react";
import { socialLinks } from "@/components/ui/SocialIcons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/angebot", label: "Angebot" },
  { href: "/projekte", label: "Projekte" },
  { href: "/ueber-mich", label: "Uber mich" },
  { href: "/kontakt", label: "Kontakt" },
];

interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <motion.div
      className="fixed inset-0 z-40 bg-bg-page/95 backdrop-blur-lg flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="flex flex-col items-center gap-6" aria-label="Mobile Navigation">
        {navLinks.map((link, i) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
          >
            <Link
              href={link.href}
              onClick={onClose}
              className={`text-3xl md:text-4xl font-black uppercase tracking-wide transition-colors ${
                pathname === link.href ? "text-primary" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </nav>

      <motion.div
        className="mt-12 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <a
          href="mailto:mail@b-emotion.ch"
          className="text-teal text-sm flex items-center gap-2"
        >
          <Mail size={16} />
          mail@b-emotion.ch
        </a>
        <a
          href="tel:+41765646273"
          className="text-teal text-sm flex items-center gap-2"
        >
          <Phone size={16} />
          +41 76 564 62 73
        </a>
        <div className="flex gap-4 mt-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-white/60 hover:text-primary transition-colors"
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
