// Données initiales de la bibliothèque.
// Chaque livre : id, titre, auteur, genre, annee (nombre), lu (booléen).

export const LIVRES_INITIAUX = [
  { id: 1, titre: "L'Enfant noir", auteur: "Camara Laye", genre: "Roman", annee: 1953, lu: true },
  { id: 2, titre: "Une si longue lettre", auteur: "Mariama Bâ", genre: "Roman", annee: 1979, lu: false },
  { id: 3, titre: "Dune", auteur: "Frank Herbert", genre: "Science-fiction", annee: 1965, lu: true },
  { id: 4, titre: "Clean Code", auteur: "Robert C. Martin", genre: "Informatique", annee: 2008, lu: false },
  { id: 5, titre: "Sapiens", auteur: "Yuval Noah Harari", genre: "Histoire", annee: 2011, lu: false },
];

export const GENRES = ["Roman", "Science-fiction", "Informatique", "Histoire"];

// Classes DaisyUI écrites EN ENTIER : Tailwind ne génère pas une classe construite
// par morceaux comme "badge-" + couleur.
export const COULEURS_GENRE = {
  Roman: "badge-primary",
  "Science-fiction": "badge-secondary",
  Informatique: "badge-accent",
  Histoire: "badge-info",
};
