import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | b-emotion",
  description: "Datenschutzerklarung von b-emotion, Marc Baumann. Informationen zum Schutz Ihrer personenbezogenen Daten.",
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-[70vh] pt-32 pb-20 px-4 md:px-8 max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-black text-white mb-8">
        DATENSCHUTZ
      </h1>
      <div className="space-y-6 text-body-text leading-relaxed">
        <div>
          <h2 className="text-lg font-bold text-white mb-2">
            VERANTWORTLICHE STELLE
          </h2>
          <p>
            b-emotion, Marc Baumann
            <br />
            Bettenstrasse 19, CH-9212 Arnegg SG
            <br />
            mail@b-emotion.ch
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold text-white mb-2">
            ALLGEMEINER HINWEIS
          </h2>
          <p>
            Gestutzt auf Artikel 13 der Schweizerischen Bundesverfassung und die
            datenschutzrechtlichen Bestimmungen des Bundes hat jede Person
            Anspruch auf Schutz ihrer Privatsphare sowie auf Schutz vor
            Missbrauch ihrer personlichen Daten. Wir halten diese Bestimmungen
            ein.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold text-white mb-2">
            ERHEBUNG UND VERARBEITUNG VON DATEN
          </h2>
          <p>
            Beim Zugriff auf unsere Website werden automatisch Daten allgemeiner
            Natur erfasst. Diese Daten (Server-Logfiles) umfassen z.B. die Art
            des Webbrowsers, das verwendete Betriebssystem, den Domainnamen
            Ihres Internet-Service-Providers und ahnliche Daten.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold text-white mb-2">COOKIES</h2>
          <p>
            Unsere Website verwendet Cookies. Cookies richten auf Ihrem Rechner
            keinen Schaden an und enthalten keine Viren. Cookies dienen dazu,
            unser Angebot nutzerfreundlicher und effektiver zu gestalten. Sie
            konnen Ihren Browser so einstellen, dass Sie uber das Setzen von
            Cookies informiert werden.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold text-white mb-2">KONTAKTFORMULAR</h2>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
            Ihre Angaben inklusive der von Ihnen angegebenen Kontaktdaten zwecks
            Bearbeitung der Anfrage gespeichert. Diese Daten geben wir nicht
            ohne Ihre Einwilligung weiter.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold text-white mb-2">IHRE RECHTE</h2>
          <p>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft uber Herkunft,
            Empfanger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
            erhalten. Sie haben ausserdem ein Recht, die Berichtigung oder
            Loschung dieser Daten zu verlangen. Hierzu konnen Sie sich jederzeit
            an uns wenden.
          </p>
        </div>
      </div>
    </div>
  );
}
