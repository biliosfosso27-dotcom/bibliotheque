# Ma bibliothèque — dossier de départ

Mini-projet DaisyUI : une liste de livres affichés sous forme de cartes, et **un seul**
formulaire qui sert à la fois à **ajouter** et à **modifier** un livre.

Dans ce dossier, tout le **balisage** (balises JSX + classes DaisyUI) est déjà écrit. Ton
travail porte uniquement sur la **logique React** : états, fonctions, `.map`, événements,
affichage conditionnel. Les commentaires `TODO` indiquent quoi faire, étape par étape.

## Installation

```bash
npm create vite@latest ma-bibliotheque -- --template react
cd ma-bibliotheque
npm install
npm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest
```

Puis copie les fichiers de ce dossier dans ton projet :

| Fichier fourni | Où le mettre |
|---|---|
| `vite.config.js` | à la racine du projet (remplace celui de Vite) |
| `src/index.css` | remplace `src/index.css` |
| `src/App.jsx` | remplace `src/App.jsx` |
| `src/data/livres.js` | nouveau dossier `src/data/` |
| `src/composants/*.jsx` | nouveau dossier `src/composants/` |

Tu peux supprimer `src/App.css` (on ne l'utilise plus). Ne touche pas à `src/main.jsx`.

Lance `npm run dev` : la page doit déjà s'afficher avec le formulaire vide et une carte
d'exemple. Rien n'est encore interactif, c'est normal.

## Structure

```
src/
├── main.jsx                  ← inchangé (fourni par Vite)
├── index.css                 ← Tailwind + DaisyUI (2 lignes)
├── App.jsx                   ← tout l'état et toutes les fonctions
├── data/
│   └── livres.js             ← livres initiaux, genres, couleurs des badges
└── composants/
    ├── ListeLivres.jsx       ← .map vers CarteLivre, alerte si vide
    ├── CarteLivre.jsx        ← UN livre + boutons Modifier / Supprimer
    └── FormulaireLivre.jsx   ← ajouter OU modifier
```

## Ordre de réalisation

1. **Afficher une carte** — `CarteLivre` : remplace les textes d'exemple par les données du
   livre reçu en props.
2. **Afficher la liste** — `ListeLivres` : le `.map` vers `CarteLivre`, et l'alerte si vide.
3. **Supprimer** — fonction dans `App` avec `.filter`, bouton « Supprimer » de la carte.
4. **Basculer lu / à lire** — fonction dans `App` avec `.map`, case « Lu » de la carte.
5. **Ajouter** — `FormulaireLivre` en mode ajout : champs contrôlés, validation, appel de
   la fonction d'ajout dans `App`.
6. **Modifier** — état de l'id du livre en cours de modification dans `App`, bouton
   « Modifier » de la carte, formulaire pré-rempli, enregistrement avec `.map`, bouton
   « Annuler ».
7. **Finitions** — carte en cours de modification mise en évidence, compteur de livres lus
   dans l'en-tête de la liste.

## La difficulté de l'étape 6 (indice)

L'état local du formulaire n'est initialisé **qu'une seule fois**, à la création du
composant. Quand tu cliques sur « Modifier » d'un autre livre, le formulaire ne se re-remplit
donc pas tout seul. Une prop vue au chapitre 5 permet de dire à React « c'est un **autre**
élément, recrée-le » : pose-la sur `<FormulaireLivre />` dans `App`.

## Critères de réussite

- [ ] Un **seul** formulaire sert à ajouter et à modifier
- [ ] L'état principal vit dans `App` ; les enfants reçoivent données et fonctions
- [ ] On stocke l'**id** du livre modifié, pas une copie de l'objet
- [ ] Ajouter avec une copie (`...`), modifier avec `.map`, supprimer avec `.filter`
- [ ] Chaque `.map` a une `key` stable (`id`)
- [ ] Supprimer le livre en cours de modification remet le formulaire en mode ajout
