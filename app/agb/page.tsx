import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB | b-emotion",
  description: "Allgemeine Geschäftsbedingungen von b-emotion, Marc Baumann.",
  alternates: { canonical: "/agb" },
};

export default function AGBPage() {
  return (
    <div className="min-h-[70vh] pt-32 pb-20 px-4 md:px-8 max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-black text-white mb-8">
        ALLGEMEINE GESCHÄFTSBEDINGUNGEN
      </h1>
      <div className="space-y-6 text-body-text leading-relaxed">
        <div>
          <h2 className="text-lg font-bold text-white mb-2">1. GELTUNGSBEREICH</h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen gelten für alle
            Dienstleistungen und Lieferungen von b-emotion, Marc Baumann,
            Bettenstrasse 19, CH-9212 Arnegg SG.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold text-white mb-2">2. LEISTUNGEN</h2>
          <p>
            Der Umfang der Leistungen ergibt sich aus der jeweiligen
            Auftragsbestätigung oder dem Abo-Vertrag. Änderungen und
            Erweiterungen bedürfen der schriftlichen Vereinbarung.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold text-white mb-2">3. PREISE UND ZAHLUNG</h2>
          <p>
            Alle Preise verstehen sich in Schweizer Franken (CHF) und zzgl.
            der gesetzlichen Mehrwertsteuer. Rechnungen sind innert 30 Tagen
            nach Rechnungsdatum zahlbar.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold text-white mb-2">4. ABO-MODELL</h2>
          <p>
            Das Abo-Modell ist monatlich kündbar. Die Kündigung muss schriftlich
            oder per E-Mail bis zum 15. des laufenden Monats für den Folgemonat
            erfolgen. Anpassungen des Umfangs sind jederzeit zum Folgemonat
            möglich.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold text-white mb-2">5. URHEBERRECHT</h2>
          <p>
            Alle von b-emotion erstellten Werke (Designs, Texte, Fotos, Videos)
            gehen nach vollständiger Bezahlung in das Eigentum des Auftraggebers
            über, sofern nicht anders vereinbart. b-emotion behält das Recht,
            die Arbeiten als Referenz zu verwenden.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold text-white mb-2">6. HAFTUNG</h2>
          <p>
            b-emotion haftet nicht für Schaden, die durch höhere Gewalt,
            Handlungen Dritter oder die Nichteinhaltung von Mitwirkungspflichten
            des Auftraggebers entstehen.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold text-white mb-2">
            7. ANWENDBARES RECHT UND GERICHTSSTAND
          </h2>
          <p>
            Es gilt Schweizer Recht. Gerichtsstand ist St. Gallen, Schweiz.
          </p>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-white/[0.04] text-center">
        <p className="text-body-text text-sm mb-4">Haben Sie Fragen zu unseren AGB?</p>
        <a href="/kontakt" className="text-primary text-sm uppercase tracking-wider font-semibold hover:underline underline-offset-4">Kontakt aufnehmen &rarr;</a>
      </div>
    </div>
  );
}
