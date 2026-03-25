import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | b-emotion",
  description: "Impressum und rechtliche Angaben von b-emotion, Marc Baumann, Arnegg SG.",
};

export default function ImpressumPage() {
  return (
    <div className="min-h-[70vh] pt-32 pb-20 px-4 md:px-8 max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-black text-white mb-8">
        IMPRESSUM
      </h1>
      <div className="space-y-6 text-body-text leading-relaxed">
        <div>
          <h2 className="text-lg font-bold text-white mb-2">
            KONTAKTADRESSE
          </h2>
          <p>
            b-emotion
            <br />
            Marc Baumann
            <br />
            Bettenstrasse 19
            <br />
            CH-9212 Arnegg SG
          </p>
          <p className="mt-2">
            Telefon:{" "}
            <a href="tel:+41765646273" className="text-teal hover:text-primary">
              +41 76 564 62 73
            </a>
            <br />
            E-Mail:{" "}
            <a href="mailto:mail@b-emotion.ch" className="text-teal hover:text-primary">
              mail@b-emotion.ch
            </a>
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold text-white mb-2">
            VERTRETUNGSBERECHTIGTE PERSON
          </h2>
          <p>Marc Baumann, Inhaber</p>
        </div>
        <div>
          <h2 className="text-lg font-bold text-white mb-2">HAFTUNGSAUSSCHLUSS</h2>
          <p>
            Der Autor ubernimmt keinerlei Gewahr hinsichtlich der inhaltlichen
            Richtigkeit, Genauigkeit, Aktualitat, Zuverlassigkeit und
            Vollstandigkeit der Informationen. Haftungsanspruche gegen den Autor
            wegen Schaden materieller oder immaterieller Art, welche aus dem
            Zugriff oder der Nutzung bzw. Nichtnutzung der veroffentlichten
            Informationen entstanden sind, werden grundsatzlich ausgeschlossen.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold text-white mb-2">URHEBERRECHTE</h2>
          <p>
            Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos
            oder anderen Dateien auf dieser Website gehoren ausschliesslich
            b-emotion Marc Baumann oder den speziell genannten Rechtsinhabern.
          </p>
        </div>
      </div>
    </div>
  );
}
