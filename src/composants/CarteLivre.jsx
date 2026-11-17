// CarteLivre.jsx — affiche UN livre.
// Props : livre, estEnModification, onModifier, onSupprimer, onBasculerLu
// Chaque bouton doit appeler sa fonction avec l'id de CE livre.

import { COULEURS_GENRE } from "../data/livres.js";

function CarteLivre({ livre, estEnModification, onModifier, onSupprimer, onBasculerLu }) {
  const lire = livre.lu ? "Lu" : "À lire";
  return (
    // TODO étape 7 : ajouter " ring-2 ring-primary" à className quand estEnModification est vrai
    <div className={"card bg-base-100 shadow" + (estEnModification ? " ring-2 ring-primary" : "")}>
      <div className="card-body">
        <div className="flex items-start justify-between gap-2">
          {/* TODO étape 1 : titre du livre */}
          <h3 className="card-title">{livre.titre}</h3>

          {/* TODO étape 1 : "Lu" avec badge-success si lu, sinon "À lire" avec badge-ghost */}
          <span className={"badge " + (livre.lu ? "badge-success" : "badge-ghost")}>{lire}</span>
        </div>

        {/* TODO étape 1 : auteur et année */}
        <p className="opacity-70">{livre.auteur} · {livre.annee}</p>

        {/* TODO étape 1 : nom du genre, et classe "badge " + COULEURS_GENRE[livre.genre] */}
        <span className={"badge " + COULEURS_GENRE[livre.genre]}>{livre.genre}</span>

        <div className="card-actions items-center justify-between mt-2">
          <label className="label cursor-pointer gap-2">
            {/* TODO étape 4 : checked selon livre.lu, onChange → onBasculerLu(livre.id) */}
            <input type="checkbox" className="checkbox checkbox-success checkbox-sm" checked={livre.lu} onChange={() => onBasculerLu(livre.id)} />
            <span className="text-sm">Lu</span>
          </label>

          <div className="flex gap-2">
            {/* TODO étape 6 : onClick → onModifier(livre.id) */}
            <button className="btn btn-sm btn-outline btn-primary" onClick={() => onModifier(livre.id)}>
              Modifier
            </button>
            {/* TODO étape 3 : onClick → onSupprimer(livre.id) */}
            <button className="btn btn-sm btn-error" onClick={() => onSupprimer(livre.id)}>
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarteLivre;
