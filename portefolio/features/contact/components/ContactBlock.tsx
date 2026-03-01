import Link from "next/link";

export function ContactBlock() {
  return (
    <div className="card json-card">
      <h2 className="text-xl font-semibold">Contact</h2>
      <p className="mt-2 text-white/75">
        Prêt à contribuer sur vos produits : front réactif, API fiable, pipelines data ou
        automatisation légère. Echangeons sur votre contexte.
      </p>
      <div className="mt-3 space-y-2 text-sm">
        <p>
          Email:{" "}
          <a className="text-string hover:underline" href="mailto:epembelefuala@gmail.com">
            epembelefuala@gmail.com
          </a>
        </p>
        <p>
          Téléphone: <span className="text-white/80">+33 7 67 67 90 62</span>
        </p>
        <p>
          GitHub:{" "}
          <Link className="text-string hover:underline" href="https://github.com/Niouzty">
            github.com/Niouzty
          </Link>
        </p>
      </div>
    </div>
  );
}
