"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <span className="text-6xl md:text-8xl font-black text-teal leading-none">
        OOPS
      </span>
      <h1 className="mt-4 text-2xl md:text-4xl font-black text-white">
        ETWAS IST SCHIEFGELAUFEN
      </h1>
      <p className="mt-4 text-body-text text-base max-w-md">
        Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.
      </p>
      <button
        onClick={reset}
        className="mt-8 inline-flex items-center justify-center bg-primary text-dark font-semibold uppercase tracking-wide px-8 py-3.5 text-sm rounded-full hover:bg-primary/90 transition-colors"
      >
        Erneut versuchen
      </button>
    </div>
  );
}
