"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("b-emotion-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("b-emotion-cookie-consent", "accepted");
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem("b-emotion-cookie-consent", "declined");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[90] p-4 pb-20 md:p-6 md:pb-6"
        >
          <div className="max-w-4xl mx-auto bg-dark border border-white/10 rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
            <p className="text-sm text-body-text flex-1">
              Diese Website verwendet Cookies, um Ihre Erfahrung zu verbessern.
              Weitere Informationen finden Sie in unserer{" "}
              <a
                href="/datenschutz"
                className="text-teal underline underline-offset-2"
              >
                Datenschutzerklärung
              </a>
              .
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={decline}
                className="px-5 py-2 text-xs uppercase tracking-wide text-white/60 hover:text-white border border-white/20 rounded-full transition-colors"
              >
                Ablehnen
              </button>
              <button
                onClick={accept}
                className="px-5 py-2 text-xs uppercase tracking-wide bg-primary text-dark font-semibold rounded-full hover:bg-primary/90 transition-colors"
              >
                Akzeptieren
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
