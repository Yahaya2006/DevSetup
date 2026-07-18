# Portfolio — Alex Martin

Portfolio personnel one-page réalisé pour le Projet 6.2 (Akieni Academy — Phase 2, HTML/CSS & Git).

## Sections incluses

1. **Hero** — photo, nom, sous-titre, accroche, boutons d'action
2. **À propos** — présentation + parcours résumé
3. **Compétences** — 6 compétences avec barres de progression animées
4. **Projets** — 3 projets avec image, description courte/longue au survol, tags technologiques et lien
5. **Expérience** — timeline verticale
6. **Contact** — formulaire + liens directs (e-mail, réseaux)
7. **Footer** — réseaux sociaux et copyright

## Fonctionnalités techniques

- **Mobile-first**, 3 breakpoints : 600px, 900px, 1200px
- **Accessibilité (WCAG)** : lien d'évitement clavier, `alt` sur toutes les images, `label` sur tous les champs de formulaire, contrastes vérifiés, `aria-label` sur les icônes, respect de `prefers-reduced-motion`
- **Performance** : images compressées, `loading="lazy"` sur les miniatures de projets, aucune dépendance JS

## Lancer en local

Ouvrir `index.html` dans un navigateur, ou utiliser une extension "Live Server".

## Déployer sur GitHub Pages

```bash
git init
git add .
git commit -m "Premier commit : structure du portfolio"
git branch -M main
git remote add origin https://github.com/VOTRE-NOM-UTILISATEUR/portfolio.git
git push -u origin main
```