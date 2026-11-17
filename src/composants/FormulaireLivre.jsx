// FormulaireLivre.jsx — UN seul formulaire pour ajouter ET modifier.
// Props : livre (null = mode ajout, sinon le livre à modifier),
//         onAjouter, onEnregistrer, onAnnuler

import { useState } from "react";
import { GENRES } from "../data/livres.js";

const FORM_VIDE = { titre: "", auteur: "", genre: "Roman", annee: "", lu: false };

function FormulaireLivre({ livre, onAjouter, onEnregistrer, onAnnuler }) {
  // TODO étape 6 : valeur dérivée — sommes-nous en mode modification ?
  let enModification = (livre !== null);

  // TODO étape 6 : en mode modification, l'état de départ doit être le livre reçu
  //                (pense à convertir annee en texte pour le champ)
  const [form, setForm] = useState(FORM_VIDE);
  const [erreur, setErreur] = useState("");
  if (enModification && form.titre === ""
      && form.auteur=== "" && form.annee === "" && form.genre === "Roman" && form.lu === false
  ) {
    setForm({ ...livre, annee: livre.annee.toString() });
  }
  // TODO étape 5 : un seul gestionnaire pour tous les champs, avec [name].
  //                Attention : pour la case à cocher, on lit e.target.checked, pas value.
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  }

  // TODO étape 5 : empêcher le rechargement, valider (titre et auteur obligatoires,
  //                année = nombre), puis appeler onAjouter (étape 5) ou onEnregistrer
  //                (étape 6, avec l'id du livre), et vider le formulaire.
  function handleSubmit(e) {
    e.preventDefault();
    if (!form.titre || !form.auteur) {
      setErreur("Le titre et l'auteur sont obligatoires.");
      return;
    }
    if (form.annee && isNaN(Number(form.annee))) {
      setErreur("L'année doit être un nombre.");
      return;
    }
    setErreur("");
    if (enModification) {
      onEnregistrer({ ...form, id: livre.id, annee: Number(form.annee) });
      setForm(FORM_VIDE);
      enModification = false;
    } else {
      onAjouter({ ...form, annee: Number(form.annee) });
    }
    setForm(FORM_VIDE);
    enModification = false;
  }

  return (
    <form className="card bg-base-100 shadow" onSubmit={handleSubmit}>
      <div className="card-body">
        {/* TODO étape 6 : "Modifier le livre" en mode modification */}
        <h2 className="card-title">{enModification ? "Modifier le livre" : "Nouveau livre"}</h2>

        {/* TODO étape 5 : afficher cette alerte seulement s'il y a une erreur */
          (erreur ? 
            (
              <div className="alert alert-error text-sm">
                <span>{erreur}</span>
              </div>
            ) : null
          )
        }

  
        

        {/* TODO étape 5 : sur chaque champ, ajoute value (ou checked) et onChange */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Titre *</legend>
          <input className="input w-full" name="titre" placeholder="Ex. Le Petit Prince"  value={form.titre} onChange={handleChange}/>

          <legend className="fieldset-legend">Auteur *</legend>
          <input className="input w-full" name="auteur" placeholder="Ex. Antoine de Saint-Exupéry" value={form.auteur} onChange={handleChange} />

          <legend className="fieldset-legend">Genre</legend>
          <select className="select w-full" name="genre" value={form.genre} onChange={handleChange}>
            {/* TODO étape 5 : remplace cette option par un .map sur GENRES */
              GENRES.map((genre) => (
                <option key={genre} value={genre}>{genre}</option>
              ))
            }       
          </select>

          <legend className="fieldset-legend">Année de parution</legend>
          <input className="input w-full" name="annee" type="number" placeholder="Ex. 1943" value={form.annee} onChange={handleChange} />

          <label className="label cursor-pointer gap-3 mt-3">
            <input type="checkbox" className="toggle toggle-success" name="lu" checked={form.lu} onChange={handleChange} />
            <span>Déjà lu</span>
          </label>
        </fieldset>

        <div className="card-actions justify-end mt-2">
          {/* TODO étape 6 : afficher "Annuler" seulement en mode modification,
                            onClick → onAnnuler */
            (enModification ?
              <button type="button" className="btn btn-ghost" onClick={onAnnuler}>
                Annuler
              </button>
            : null
          )
          }

          {/* TODO étape 6 : "Enregistrer" en mode modification */
            (enModification ?
              <button type="submit" className="btn btn-primary">
                Enregistrer
              </button>
            :
              <button type="submit" className="btn btn-primary">
                Ajouter
              </button>
          )
          }
        </div>
      </div>
    </form>
  );
}

export default FormulaireLivre;
