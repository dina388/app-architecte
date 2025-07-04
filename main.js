// 1. On récupère le formulaire et la zone d'affichage
const form  = document.getElementById("form-projet");
const liste = document.getElementById("liste");

// 2. Fonction pour créer et afficher une fiche projet
function ajouterProjet({ client, type, taches, date }) {
  // Création du conteneur de la fiche
  const div = document.createElement("div");
  div.className = "projet";

  // Contenu de la fiche
  div.innerHTML = `
    <strong>📋 Client :</strong> ${client} |
    <strong>🏗️ Projet :</strong> ${type} |
    <strong>📅 Début :</strong> ${date || "—"} |
    <strong>✅ Tâches :</strong> ${taches || "—"}
  `;

  // Bouton supprimer
  const btnSuppr = document.createElement("button");
  btnSuppr.textContent = "❌";
  btnSuppr.title = "Supprimer ce projet";
  btnSuppr.addEventListener("click", () => {
    liste.removeChild(div);
  });
  div.appendChild(btnSuppr);

  // On ajoute la fiche dans la liste
  liste.appendChild(div);
}

// 3. Gestionnaire de soumission du formulaire
form.addEventListener("submit", function(e) {
  e.preventDefault();  // Empêche le rechargement de la page

  // 4. Lecture des valeurs saisies
  const client = form.client.value.trim();
  const type   = form.type.value.trim();
  const taches = form.taches.value.trim();
  const date   = form.date.value;

  // 5. Appel de la fonction pour afficher la fiche
  ajouterProjet({ client, type, taches, date });

  // 6. Réinitialisation du formulaire
  form.reset();
});
