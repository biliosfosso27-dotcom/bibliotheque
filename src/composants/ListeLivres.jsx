// ListeLivres.jsx — affiche une CarteLivre par livre du tableau.
// Props : livres, idEnModification, onModifier, onSupprimer, onBasculerLu

import CarteLivre from "./CarteLivre.jsx";

function ListeLivres({ livres, idEnModification, onModifier, onSupprimer, onBasculerLu }) {
  // TODO étape 7 : nombre de livres lus (valeur dérivée)
  const nbLus = livres.filter((livre) => livre.lu).length;
  const nbTotal = livres.length;

  const modeModification = idEnModification !== null;

  // TODO étape 2 : si le tableau est vide, renvoyer uniquement cette alerte :
  if (livres.length === 0) {
    return (
      <div className="alert alert-info">
        <span>Ta bibliothèque est vide. Ajoute ton premier livre !</span>
      </div>
    );
  }

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">Mes livres</h2>
        {/* TODO étape 7 : remplace les nombres par les vraies valeurs */}
        <span className="badge badge-neutral badge-lg">{nbLus} / {nbTotal} lus</span>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* TODO étape 2 : remplace cette carte d'exemple par un .map sur livres.
            Chaque CarteLivre reçoit : key, livre, estEnModification,
            onModifier, onSupprimer, onBasculerLu */}
        {
          livres.map((livre) => {
            return (
              <CarteLivre
                key={livre.id}
                livre={livre}
                estEnModification={modeModification && idEnModification === livre.id}
                onModifier={onModifier}
                onSupprimer={onSupprimer}
                onBasculerLu={onBasculerLu}
              />
            );
          })
        }

        { console.log("idEnModification", idEnModification) }
        { console.log("modeModification", modeModification) }
        
      </div>
    </section>
  );
}

export default ListeLivres;
