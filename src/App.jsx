// App.jsx — le chef d'orchestre.
// Il détient l'état et les fonctions, et les transmet aux composants en props.

import { useState } from "react";
import { LIVRES_INITIAUX } from "./data/livres.js";
import ListeLivres from "./composants/ListeLivres.jsx";
import FormulaireLivre from "./composants/FormulaireLivre.jsx";

function App() {
  const [livres, setLivres] = useState(LIVRES_INITIAUX);
  // TODO étape 6 : un état pour l'id du livre en cours de modification (null au départ)
  const [idEnModification, setIdEnModification] = useState(null);

  // TODO étape 5 : ajouterLivre(livre) — ajoute un nouveau livre avec un id unique
  function ajouterLivre(livre) {
    const idLivres = livres.map((l) => l.id);
    const idUnique = idLivres.length > 0 ? Math.max(...idLivres) + 1 : 1;
    setLivres([...livres, { ...livre, id: idUnique }]);
  }

  // TODO étape 6 : enregistrerLivre(livreModifie) — remplace le livre de même id,
  //                puis repasse en mode ajout
  function enregistrerLivre(livreModifie) {
    setLivres(livres.map((livre) =>
      livre.id === livreModifie.id ? livreModifie : livre
    ));
  }

  // TODO étape 3 : supprimerLivre(id)
  //                (si c'est le livre en cours de modification, repasser en mode ajout)
  function supprimerLivre(id) {
    setLivres(livres.filter((livre) => livre.id !== id));
  }

  // TODO étape 4 : basculerLu(id) — inverse la propriété lu du livre
  function basculerLu(id) {
    setLivres(livres.map((livre) =>
      livre.id === id ? { ...livre, lu: !livre.lu } : livre
    ));
  }

  // TODO étape 6 : commencerModification(id) et annulerModification()
  function commencerModification(id) {
    setIdEnModification(id);
  }
  function annulerModification() {
    setIdEnModification(null);
  }

  // TODO étape 6 : valeur dérivée — le livre en cours de modification (ou null),
  //                retrouvé à partir de son id
  const livreEnModification = livres.find((livre) => livre.id === idEnModification) || null;

  return (
    <div className="min-h-screen bg-base-200">
      <div className="navbar bg-base-100 shadow-sm px-4">
        <span className="text-xl font-bold">📚 Ma bibliothèque</span>
      </div>

      <main className="max-w-6xl mx-auto p-4 grid gap-6 lg:grid-cols-3">
        <div>
          {/* TODO étape 6 : ajoute la prop qui force React à recréer le formulaire
                             quand le livre en cours de modification change */}
          <FormulaireLivre
            livre={livreEnModification}
            onAjouter={ajouterLivre}
            onEnregistrer={enregistrerLivre}
            onAnnuler={annulerModification}
          />
        </div>

        <div className="lg:col-span-2">
          <ListeLivres
            livres={livres}
            idEnModification={idEnModification}
            onModifier={commencerModification}
            onSupprimer={supprimerLivre}
            onBasculerLu={basculerLu}
          />
          {/* TODO étape 6 : remplace null par ton état d'id en cours de modification */}
        </div>
      </main>
    </div>
  );
}

export default App;
