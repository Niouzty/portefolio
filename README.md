# Portfolio (Next.js 14 + TypeScript)

Structure inspirée d'un site marketing avec routes groupées `(marketing)` et un rendu de CV façon JSON.

## Démarrage
```bash
npm install
npm run dev
```

## Arborescence
- `app/(marketing)/` : pages publiques (home, about, projects, contact) avec layout dédié.
- `app/layout.tsx` : layout racine + polices.
- `components/` : UI réutilisable, layout (header), sections (JsonResume), shared (titles).
- `features/` : logique par domaine (projects, contact, about).
- `content/` : données statiques (profil, projets).
- `lib/` : utils, constantes de navigation.
- `public/` : assets (images, icons, OG).
- `styles/` : dossier optionnel si split CSS.

## Personnalisation
- Édite `content/pages/home.ts` pour ton profil.
- Ajuste la palette dans `app/globals.css` ou `tailwind.config.ts`.
- Mets à jour les liens/nav dans `lib/constants/nav.ts`.
- Remplis `features/projects/data/projects.ts` avec tes vrais projets.

## SEO
- `app/sitemap.ts` et `app/robots.ts` utilisent `https://example.com` : remplace par ton domaine.
