function ajouterLigne() {
    var newLi = document.getElementById("modeleligne").cloneNode(true);
    var lastLi = document.getElementById("lastligne");
    lastLi.parentNode.insertBefore(newLi, lastLi); // Insère le clone avant la dernière ligne
}
  


function calculate() {
    // Récupérer toutes les lignes du tableau
    var rows = document.querySelectorAll("tr.row");
    var sousTotal = 0; // Initialiser le sous-total global

    // Parcourir chaque ligne pour calculer le total par ligne
    for (var i = 0; i < rows.length; i++) {
        var prix = parseFloat(rows[i].querySelector(".prix").value) || 0; // Récupérer le prix ou 0 si vide
        var qte = parseInt(rows[i].querySelector(".qte").value) || 0;     // Récupérer la quantité ou 0 si vide
        var totalLigne = prix * qte;                                      // Calculer le total de la ligne

        // Mettre à jour le champ "total" ou "totalLigne" de cette ligne
        var totalInput = rows[i].querySelector("[name='total'], [name='totalLigne']");
        if (totalInput) {
            totalInput.value = totalLigne.toFixed(2);
        }

        // Ajouter le total de la ligne au sous-total global
        sousTotal += totalLigne;
    }

    // Mettre à jour le champ sous-total
    document.querySelector("[name='soustotal']").value = sousTotal.toFixed(2);

    // Calculer la remise (si applicable)
    var remise = parseFloat(document.querySelector("[name='remise']").value) || 0;
    var sousTotalMoinsRemise = sousTotal - (sousTotal * (remise / 100));
    document.querySelector("[name='soustotalemoinsremise']").value = sousTotalMoinsRemise.toFixed(2);

    // Calculer la taxe (si applicable)
    var tauxImposition = parseFloat(document.querySelector("[name='tauxdimposition']").value) || 0;
    var taxeTotale = sousTotalMoinsRemise * (tauxImposition / 100);
    document.querySelector("[name='taxtetotale']").value = taxeTotale.toFixed(2);

    // Ajouter les frais d'expédition (si applicable)
    var fraisExpedition = parseFloat(document.querySelector("[name='fraisdexpedition']").value) || 0;

    // Calculer le total final (solde)
    var solde = sousTotalMoinsRemise + taxeTotale + fraisExpedition;
    document.querySelector("[name='solde']").value = solde.toFixed(2);
}







