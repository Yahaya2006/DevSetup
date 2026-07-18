# Salon Éclat — Site vitrine

Site vitrine 3 pages pour un salon de coiffure fictif à Brazzaville, réalisé dans le cadre du Projet 6.1 (Akieni Academy — Phase 2, HTML/CSS & Git).

```

## Fonctionnalités

- Navigation cohérente sur les 3 pages, avec menu burger en HTML/CSS pur (aucun JavaScript) pour mobile
- Design responsive à 2 breakpoints : mobile (< 768px) et desktop (≥ 768px, puis ≥ 1024px pour la grille de services)
- Formulaire de contact avec labels associés à chaque champ
- HTML5 sémantique (`header`, `nav`, `main`, `section`, `article`, `footer`)

## Comment lancer le site en local

1. Cloner ou télécharger ce dossier
2. Ouvrir `index.html` directement dans un navigateur (double-clic), ou utiliser une extension type "Live Server" dans votre éditeur de code

Aucune installation ni dépendance nécessaire — HTML/CSS pur.

## Déployer sur GitHub Pages

1. Créer un dépôt GitHub (par exemple `salon-eclat`)
2. Initialiser Git dans ce dossier et pousser le contenu :
   ```bash
   git init
   git add .
   git commit -m "Premier commit : structure du site"
   git branch -M main
   git remote add origin https://github.com/VOTRE-NOM-UTILISATEUR/salon-eclat.git
   git push -u origin main
   ```
3. Sur GitHub, aller dans **Settings → Pages**
4. Dans "Source", choisir la branche `main` et le dossier `/ (root)`
5. Enregistrer — le site sera disponible après quelques minutes à l'adresse :
   `https://VOTRE-NOM-UTILISATEUR.github.io/salon-eclat/`

