import type { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "projet-alvs",
    title: "Projet ALVS – Plateforme web de partage de collis",
    summary:
      "Plateforme client pour étudiants internationaux : échanges anonymes via des « collis » (messages), front Angular 17 / Flask back.",
    link: "",
    github: "https://github.com/Niouzty",
    tech: ["Angular", "TypeScript", "Flask", "Python", "SQLite", "JWT", "Socket.IO", "Swagger"],
    details: `Projet client : plateforme pour étudiants internationaux. Objectif : offrir un espace d'échanges anonymes via des « collis » (fils de discussion) pendant leurs études. 
Backend Flask : JWT, CORS, rôles admin/user, workflow d'approbation, logging rotatif, filtrage d'erreurs, doc Swagger. 
Frontend Angular 17 : gardes de routes, temps réel Socket.IO, expérience fluide. 
Valeur pour l'entreprise : solution modulable pour communautés étudiantes avec modération et traçabilité.`,
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80"
  },
  {
    slug: "bot-memecoin",
    title: "Bot de trading memecoin",
    summary:
      "Bot en cours : suit un profil Axiom, détecte ses trades on-chain et entre automatiquement (Solana, memecoin).",
    link: "",
    github: "https://github.com/Niouzty",
    tech: ["Python", "APIs", "Websocket", "Alerts", "Docker"],
    details: `Bot (en cours) visant à suivre un trader Axiom sur Solana : lecture on-chain, détection de ses transactions, réplique automatique des positions. 
Features prévues : alertes Telegram, configuration fine (montant, slippage, TP/SL), profils multiples. 
Objectif business : valider les perfs puis proposer le bot à des clients en anticipation de la montée du marché memecoin (peu adressé en France).`,
    year: "2025-2026",
    image: "https://picsum.photos/seed/tradingbot/1200/800"
  },
  {
    slug: "tice-72-refonte",
    title: "TICE 72 — Refonte WordPress",
    summary:
      "Audits, maquettes Figma, refonte et SEO de sites WordPress pour établissements scolaires du Mans.",
    link: "",
    github: "https://github.com/Niouzty",
    tech: ["WordPress", "PHP", "JavaScript", "SEO"],
    details: `Stage TICE 72 : audits de sites, maquettes Figma, création/refonte de thèmes WordPress, optimisation SEO et performances. 
Interventions pour des établissements scolaires majeurs du Mans. 
Support utilisateurs et recommandations d'amélioration continue.`,
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=900&q=80"
  },
  {
    slug: "industrialisation-stages",
    title: "Industrialisation du suivi des stages (IUT)",
    summary:
      "Outil interne IUT pour gérer les stages : entreprises, tuteurs, imports CSV, stats et mails automatiques.",
    link: "",
    github: "https://github.com/Niouzty",
    tech: ["Angular", "Python", "PostgreSQL", "Docker", "Redis"],
    details: `Application aujourd'hui utilisée à l'IUT de Montreuil pour la gestion des stages. 
Fonctions : import CSV massif, création d'entreprises et tuteurs, génération de documents, statistiques, automatisation d'emails, suivi complet du pipeline de stage.`,
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
    images: [
      "/images/stage/stage-1.png",
      "/images/stage/stage-2.png",
      "/images/stage/stage-3.png",
      "/images/stage/stage-4.png",
      "/images/stage/stage-5.png"
    ]
  },
  {
    slug: "coin-des-etudiants",
    title: "Plateforme d'échanges communautaires (Le Coin des Étudiants)",
    summary:
      "Plateforme d'échanges étudiants IDF : annonces, logements, actualités regroupées en un seul espace.",
    link: "",
    github: "https://github.com/Niouzty",
    tech: ["JavaScript", "MongoDB", "Node.js", "Docker"],
    details: `CoinÉtudiant (IDF) : plateforme d'annonces/logements/ventes entre étudiants + agrégateur d'actualités étudiantes dispersées. 
Apporte des tiers de confiance, modération, gestion utilisateurs. API sécurisée et data layer (MongoDB/Node). 
Objectif : un hub unique pour la communauté étudiante locale.`,
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80"
  },
  {
    slug: "infrastructure-devops",
    title: "Infrastructure DevOps",
    summary:
      "Architecture Docker multi-services, déploiement Linux, sécurisation SSH et interconnexion réseau.",
    link: "",
    github: "https://github.com/Niouzty",
    tech: ["Docker", "Linux", "SSH", "CI/CD"],
    details:
      "Stack multi-conteneurs, scripts de déploiement, sécurisation des accès et monitoring léger.",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80"
  }
];
