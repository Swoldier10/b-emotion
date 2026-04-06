import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <span className="text-8xl md:text-[12rem] font-black text-primary leading-none">
        404
      </span>
      <h1 className="mt-4 text-2xl md:text-4xl font-black text-white">
        SEITE NICHT GEFUNDEN
      </h1>
      <p className="mt-4 text-body-text text-base max-w-md">
        Die gewünschte Seite existiert nicht oder wurde verschoben.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center bg-primary text-dark font-semibold uppercase tracking-wide px-8 py-3.5 text-sm rounded-full hover:bg-primary/90 transition-colors"
      >
        Zurück zur Startseite
      </Link>
    </div>
  );
}
