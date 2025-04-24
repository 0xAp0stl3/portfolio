# 🌐 Portfolio Next.js

Ce projet est un portfolio personnel moderne développé avec [Next.js](https://nextjs.org) et TypeScript.  
Il présente mes (ou les votre) compétences, projets, parcours et permet de vous contacter facilement.

## Fonctionnalités

- Interface responsive et élégante
- Navigation entre les pages : Accueil, À propos, Projets, Compétences, Contact
- Composants réutilisables (Navbar, Footer)
- Pages dédiées pour chaque section
- Images et illustrations personnalisables
- Prêt pour le déploiement sur Vercel ou tout hébergeur Next.js

## Structure du projet

```
portfolio/
├── public/           # Images et assets publics
├── src/
│   ├── app/          # Pages (Next.js App Router)
│   │   ├── about/
│   │   ├── contact/
│   │   ├── projects/
│   │   ├── skills/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/   # Navbar, Footer, etc.
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── README.md
└── ...
```

## Installation

1. **Cloner le dépôt :**
   ```bash
   git clone <url-du-repo>
   cd portfolio
   ```

2. **Installer les dépendances :**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Lancer le serveur de développement :**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

## Personnalisation

- Modifiez les fichiers dans `src/app/` pour adapter le contenu (texte, images, liens).
- Ajoutez vos propres images dans le dossier `public/`.
- Personnalisez les composants dans `src/components/` pour changer l'apparence ou ajouter des fonctionnalités.

## Technologies

- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)

---

Projet réalisé avec ❤️ et Next.js.
