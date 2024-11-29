function verifierNombre() {    
    // Demander à l'utilisateur d'entrer un nombre
    let nombre = prompt("Entrez un nombre pour vérifier s'il est positif, négatif ou zéro :");        
    // Convertir l'entrée en nombre
    nombre = parseFloat(nombre);        
    // Vérifier si l'entrée est un nombre valide
    if (isNaN(nombre)) {      
        alert("Veuillez entrer un nombre valide !");
    } else if (nombre > 0) {      
        alert("Le nombre " + nombre + " est positif.");
    } else if (nombre < 0) {      
        alert("Le nombre " + nombre + " est négatif.");
    } else {      
        alert("Le nombre est zéro.");
    }    
    afficherCode("code1");  
}  

function afficherCode1(idContainer) {
    // Code à afficher dans le carré gris (modifiable dans la fonction)
    const codeAafficher = `
function parite() {
let nombre = prompt("Entrez un nombre pour vérifier s'il est pair ou impair :");

if (isNaN(nombre)) {
alert("Veuillez entrer un nombre valide !");
} else {
if (nombre % 2 === 0) {
    alert("Le nombre " + nombre + " est pair.");
} else {
    alert("Le nombre " + nombre + " est impair.");
}
}
}
    `;

    // Trouver le conteneur parent (ici, le div ayant l'ID 'code')
    let parentContainer = document.getElementById("code");

    // Vérifier si le conteneur parent existe
    if (!parentContainer) {
        console.error("Conteneur parent introuvable !");
        return;
    }

    // Trouver le div enfant spécifique par son ID
    let containerEnfant = document.getElementById('code1');

    // Vérifier si le div enfant existe
    if (!containerEnfant) {
        console.error("Conteneur enfant avec l'ID '" + idContainer + "' introuvable !");
        return;
    }

    // Créer un nouvel élément div pour afficher le code
    let zone = document.createElement("div");

    // Mettre le code dans la zone
    zone.innerText = codeAafficher;  // Affiche le code dans la zone

    // Appliquer les styles à la zone de code
    zone.className = 'code-zone';  // Applique les styles définis dans le CSS pour .code-zone

    // Vider le conteneur enfant avant d'ajouter le nouveau code
    containerEnfant.innerHTML = '';  // Efface tout le contenu précédent du div enfant

    // Ajouter le code au div enfant spécifié
    containerEnfant.appendChild(zone);  // Ajouter le code dans le div enfant
}





function parite() {    
    // Demander à l'utilisateur d'entrer un nombre via prompt()
    let userInput = prompt("Entrez un nombre pour vérifier s'il est pair ou impair :");      
    // Convertir la valeur entrée en un nombre
    let num = parseInt(userInput);      
    // Vérifier si la valeur est un nombre valide
    if (isNaN(num)) {      
        alert("Veuillez entrer un nombre valide.");      
        return; // Si ce n'est pas un nombre, on arrête la fonction    
    }      
    // Vérifier si le nombre est pair ou impair    
    if (num % 2 === 0) {      
        alert(num + " est un nombre pair.");    
    } else {      
        alert(num + " est un nombre impair.");    
    }    
    afficherCode("code2");  
}

function afficherCode2(idContainer) {    
    // Créer un nouvel élément div pour le code    
    let zone = document.createElement("div");        
    // Ajouter du texte à l'intérieur de ce div    
    zone.innerText = "Voici le texte qui apparaîtra dans un carré gris.";        
    // Ajouter des styles directement via JavaScript    
    zone.style.backgroundColor = "gray"; // Fond gris    
    zone.style.padding = "10px"; // Espacement autour du texte    
    zone.style.border = "2px solid black"; // Bordure noire    
    zone.style.borderRadius = "8px"; // Coins arrondis    
    zone.style.color = "white"; // Texte en blanc    
    zone.style.display = "block"; // Rendre le div visible        
    // Trouver le conteneur 'code' et y ajouter le div 'zone'    
    let container = document.getElementById("code2");    
    container.appendChild(zone);        
    // Ajuster la taille du conteneur 'code' pour qu'il s'adapte à son contenu    
    container.style.display = "inline-block"; // S'ajuste automatiquement à son contenu    
    container.style.padding = "10px"; // Padding autour du contenu du conteneur    
    container.style.border = "2px solid #ccc"; // Bordure légère pour le parent  
}    

function verifierAge() {    
    // Demander à l'utilisateur son âge    
    let age = prompt("Quel est ton âge ?");        
    // Convertir l'entrée en nombre    
    age = parseInt(age);        
    // Vérifier si l'âge est valide    
    if (isNaN(age)) {      
        alert("Veuillez entrer un âge valide !");
    } else if (age >= 18) {      
        alert("Tu peux conduire !");
    } else {      
        alert("Tu ne peux pas conduire.");
    }    
    afficherCode("code3");  
}  

function afficherCode3(idContainer) {    
    // Créer un nouvel élément div pour le code    
    let zone = document.createElement("div");        
    // Ajouter du texte à l'intérieur de ce div    
    zone.innerText = "Voici le texte qui apparaîtra dans un carré gris.";        
    // Ajouter des styles directement via JavaScript    
    zone.style.backgroundColor = "gray"; // Fond gris    
    zone.style.padding = "10px"; // Espacement autour du texte    
    zone.style.border = "2px solid black"; // Bordure noire    
    zone.style.borderRadius = "8px"; // Coins arrondis    
    zone.style.color = "white"; // Texte en blanc    
    zone.style.display = "block"; // Rendre le div visible        
    // Trouver le conteneur 'code' et y ajouter le div 'zone'    
    let container = document.getElementById("code3");    
    container.appendChild(zone);        
    // Ajuster la taille du conteneur 'code' pour qu'il s'adapte à son contenu    
    container.style.display = "inline-block"; // S'ajuste automatiquement à son contenu    
    container.style.padding = "10px"; // Padding autour du contenu du conteneur    
    container.style.border = "2px solid #ccc"; // Bordure légère pour le parent  
}

function calculerSomme() {    
    // Demander à l'utilisateur d'entrer les deux nombres via des alertes    
    let num1 = prompt("Entrez le premier nombre :");    
    let num2 = prompt("Entrez le deuxième nombre :");      
    // Convertir les valeurs en nombres    
    num1 = parseFloat(num1);    
    num2 = parseFloat(num2);      
    // Vérifier si les valeurs sont des nombres valides    
    if (isNaN(num1) || isNaN(num2)) {      
        alert("Veuillez entrer des nombres valides.");      
        return;    
    }      
    // Calculer la somme    
    let somme = num1 + num2;      
    // Afficher la somme dans une alerte    
    alert("La somme des deux nombres est : " + somme);    
    afficherCode("code4");  
}  

function afficherCode4(idContainer) {    
    // Créer un nouvel élément div pour le code    
    let zone = document.createElement("div");        
    // Ajouter du texte à l'intérieur de ce div    
    zone.innerText = "Voici le texte qui apparaîtra dans un carré gris.";        
    // Ajouter des styles directement via JavaScript    
    zone.style.backgroundColor = "gray"; // Fond gris    
    zone.style.padding = "10px"; // Espacement autour du texte    
    zone.style.border = "2px solid black"; // Bordure noire    
    zone.style.borderRadius = "8px"; // Coins arrondis    
    zone.style.color = "white"; // Texte en blanc    
    zone.style.display = "block"; // Rendre le div visible        
    // Trouver le conteneur 'code' et y ajouter le div 'zone'    
    let container = document.getElementById("code4");    
    container.appendChild(zone);        
    // Ajuster la taille du conteneur 'code' pour qu'il s'adapte à son contenu    
    container.style.display = "inline-block"; // S'ajuste automatiquement à son contenu    
    container.style.padding = "10px"; // Padding autour du contenu du conteneur    
    container.style.border = "2px solid #ccc"; // Bordure légère pour le parent  
}

function calculerCarre() {    
    // Demander à l'utilisateur d'entrer un nombre via une alerte    
    let num = prompt("Entrez un nombre :");      
    // Convertir la valeur en nombre    
    num = parseFloat(num);      
    // Vérifier si la valeur est un nombre valide    
    if (isNaN(num)) {      
        alert("Veuillez entrer un nombre valide.");      
        return;    
    }      
    // Calculer le carré    
    let carre = num * num;      
    // Afficher le carré dans une alerte    
    alert("Le carré de " + num + " est : " + carre);    
    afficherCode("code5");  
}  

function afficherCode5(idContainer) { 
    // Créer un nouvel élément div pour le code 
    let zone = document.createElement("div"); 
    // Ajouter du texte à l'intérieur de ce div 
    zone.innerText = "Voici le texte qui apparaîtra dans un carré gris."; 
    // Ajouter des styles directement via JavaScript 
    zone.style.backgroundColor = "gray"; // Fond gris 
    zone.style.padding = "10px"; // Espacement autour du texte 
    zone.style.border = "2px solid black"; // Bordure noire 
    zone.style.borderRadius = "8px"; // Coins arrondis 
    zone.style.color = "white"; // Texte en blanc 
    zone.style.display = "block"; // Rendre le div visible 

    // Trouver le conteneur 'code' et y ajouter le div 'zone' 
    let container = document.getElementById("code5"); 
    container.appendChild(zone); 

    // Ajuster la taille du conteneur 'code' pour qu'il s'adapte à son contenu 
    container.style.display = "inline-block"; // S'ajuste automatiquement à son contenu 
    container.style.padding = "10px"; // Padding autour du contenu du conteneur 
    container.style.border = "2px solid #ccc"; // Bordure légère pour le parent 
}

function convertirCelsiusEnFahrenheit() { 
    // Demander à l'utilisateur d'entrer une température en Celsius via un prompt 
    let celsius = parseFloat(prompt("Entrez la température en Celsius :")); 

    // Vérifier si l'entrée est valide 
    if (!isNaN(celsius)) { 
        let fahrenheit = (celsius * 9/5) + 32; 
        alert(celsius + "°C correspond à " + fahrenheit + "°F"); 
    } else { 
        alert("Veuillez entrer une valeur numérique valide."); 
    } 
    afficherCode("code6"); 
}

function afficherCode6(idContainer) { 
    // Créer un nouvel élément div pour le code 
    let zone = document.createElement("div"); 
    // Ajouter du texte à l'intérieur de ce div 
    zone.innerText = "Voici le texte qui apparaîtra dans un carré gris."; 
    // Ajouter des styles directement via JavaScript 
    zone.style.backgroundColor = "gray"; // Fond gris 
    zone.style.padding = "10px"; // Espacement autour du texte 
    zone.style.border = "2px solid black"; // Bordure noire 
    zone.style.borderRadius = "8px"; // Coins arrondis 
    zone.style.color = "white"; // Texte en blanc 
    zone.style.display = "block"; // Rendre le div visible 

    // Trouver le conteneur 'code' et y ajouter le div 'zone' 
    let container = document.getElementById("code6"); 
    container.appendChild(zone); 

    // Ajuster la taille du conteneur 'code' pour qu'il s'adapte à son contenu 
    container.style.display = "inline-block"; // S'ajuste automatiquement à son contenu 
    container.style.padding = "10px"; // Padding autour du contenu du conteneur 
    container.style.border = "2px solid #ccc"; // Bordure légère pour le parent 
}

function calculerAireCercle() { 
    let rayon = prompt("Entrez le rayon du cercle :"); 
    rayon = parseFloat(rayon); 

    if (isNaN(rayon)) { 
        alert("Veuillez entrer un nombre valide."); 
        return; 
    }

    let aire = Math.PI * rayon * rayon; 
    alert("L'aire du cercle est : " + aire); 
    afficherCode("code7"); 
}

function afficherCode7(idContainer) { 
    // Créer un nouvel élément div pour le code 
    let zone = document.createElement("div"); 
    // Ajouter du texte à l'intérieur de ce div 
    zone.innerText = "Voici le texte qui apparaîtra dans un carré gris."; 
    // Ajouter des styles directement via JavaScript 
    zone.style.backgroundColor = "gray"; // Fond gris 
    zone.style.padding = "10px"; // Espacement autour du texte 
    zone.style.border = "2px solid black"; // Bordure noire 
    zone.style.borderRadius = "8px"; // Coins arrondis 
    zone.style.color = "white"; // Texte en blanc 
    zone.style.display = "block"; // Rendre le div visible 

    // Trouver le conteneur 'code' et y ajouter le div 'zone' 
    let container = document.getElementById("code7"); 
    container.appendChild(zone); 

    // Ajuster la taille du conteneur 'code' pour qu'il s'adapte à son contenu 
    container.style.display = "inline-block"; // S'ajuste automatiquement à son contenu 
    container.style.padding = "10px"; // Padding autour du contenu du conteneur 
    container.style.border = "2px solid #ccc"; // Bordure légère pour le parent 
}

function calculerFactorielle() {
    let n = parseInt(prompt("Entrez un nombre entier positif :"));
    if (isNaN(n) || n < 0) {
        alert("Veuillez entrer un nombre entier positif.");
        return;
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    alert("La factorielle de " + n + " est : " + result);
}



function afficherCode8(idContainer) { 
    // Créer un nouvel élément div pour le code 
    let zone = document.createElement("div"); 
    // Ajouter du texte à l'intérieur de ce div 
    zone.innerText = "Voici le texte qui apparaîtra dans un carré gris."; 
    // Ajouter des styles directement via JavaScript 
    zone.style.backgroundColor = "gray"; // Fond gris 
    zone.style.padding = "10px"; // Espacement autour du texte 
    zone.style.border = "2px solid black"; // Bordure noire 
    zone.style.borderRadius = "8px"; // Coins arrondis 
    zone.style.color = "white"; // Texte en blanc 
    zone.style.display = "block"; // Rendre le div visible 

    // Trouver le conteneur 'code' et y ajouter le div 'zone' 
    let container = document.getElementById("code8"); 
    container.appendChild(zone); 

    // Ajuster la taille du conteneur 'code' pour qu'il s'adapte à son contenu 
    container.style.display = "inline-block"; // S'ajuste automatiquement à son contenu 
    container.style.padding = "10px"; // Padding autour du contenu du conteneur 
    container.style.border = "2px solid #ccc"; // Bordure légère pour le parent 
}

function estPremier() {
    let n = parseInt(prompt("Entrez un nombre entier :"));
    if (isNaN(n) || n < 2) {
        alert("Veuillez entrer un nombre supérieur ou égal à 2.");
        return;
    }
    let estPremier = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            estPremier = false;
            break;
        }
    }
    if (estPremier) {
        alert(n + " est un nombre premier.");
    } else {
        alert(n + " n'est pas un nombre premier.");
    }
}


function afficherCode9(idContainer) { 
    // Créer un nouvel élément div pour le code 
    let zone = document.createElement("div"); 
    // Ajouter du texte à l'intérieur de ce div 
    zone.innerText = "Voici le texte qui apparaîtra dans un carré gris."; 
    // Ajouter des styles directement via JavaScript 
    zone.style.backgroundColor = "gray"; // Fond gris 
    zone.style.padding = "10px"; // Espacement autour du texte 
    zone.style.border = "2px solid black"; // Bordure noire 
    zone.style.borderRadius = "8px"; // Coins arrondis 
    zone.style.color = "white"; // Texte en blanc 
    zone.style.display = "block"; // Rendre le div visible 

    // Trouver le conteneur 'code' et y ajouter le div 'zone' 
    let container = document.getElementById("code9"); 
    container.appendChild(zone); 

    // Ajuster la taille du conteneur 'code' pour qu'il s'adapte à son contenu 
    container.style.display = "inline-block"; // S'ajuste automatiquement à son contenu 
    container.style.padding = "10px"; // Padding autour du contenu du conteneur 
    container.style.border = "2px solid #ccc"; // Bordure légère pour le parent 
}



function tableMultiplication() {
    let n = parseInt(prompt("Entrez un nombre pour afficher sa table de multiplication :"));
    if (isNaN(n)) {
        alert("Veuillez entrer un nombre valide.");
        return;
    }
    let result = "";
    for (let i = 1; i <= 10; i++) {
        result += n + " x " + i + " = " + (n * i) + "\n";
    }
    alert("La table de multiplication de " + n + " est :\n" + result);
}


function afficherCode10(idContainer) { 
    // Créer un nouvel élément div pour le code 
    let zone = document.createElement("div"); 
    // Ajouter du texte à l'intérieur de ce div 
    zone.innerText = "Voici le texte qui apparaîtra dans un carré gris."; 
    // Ajouter des styles directement via JavaScript 
    zone.style.backgroundColor = "gray"; // Fond gris 
    zone.style.padding = "10px"; // Espacement autour du texte 
    zone.style.border = "2px solid black"; // Bordure noire 
    zone.style.borderRadius = "8px"; // Coins arrondis 
    zone.style.color = "white"; // Texte en blanc 
    zone.style.display = "block"; // Rendre le div visible 

    // Trouver le conteneur 'code' et y ajouter le div 'zone' 
    let container = document.getElementById("code10"); 
    container.appendChild(zone); 

    // Ajuster la taille du conteneur 'code' pour qu'il s'adapte à son contenu 
    container.style.display = "inline-block"; // S'ajuste automatiquement à son contenu 
    container.style.padding = "10px"; // Padding autour du contenu du conteneur 
    container.style.border = "2px solid #ccc"; // Bordure légère pour le parent 
}




function compterVoyelles() {
    let texte = prompt("Entrez une phrase ou un mot :");
    let voyelles = "aeiouAEIOU";
    let compteur = 0;
    for (let i = 0; i < texte.length; i++) {
        if (voyelles.includes(texte[i])) {
            compteur++;
        }
    }
    alert("Le nombre de voyelles est : " + compteur);
}

function afficherCode11(idContainer) { 
    // Créer un nouvel élément div pour le code 
    let zone = document.createElement("div"); 
    // Ajouter du texte à l'intérieur de ce div 
    zone.innerText = "Voici le texte qui apparaîtra dans un carré gris."; 
    // Ajouter des styles directement via JavaScript 
    zone.style.backgroundColor = "gray"; // Fond gris 
    zone.style.padding = "10px"; // Espacement autour du texte 
    zone.style.border = "2px solid black"; // Bordure noire 
    zone.style.borderRadius = "8px"; // Coins arrondis 
    zone.style.color = "white"; // Texte en blanc 
    zone.style.display = "block"; // Rendre le div visible 

    // Trouver le conteneur 'code' et y ajouter le div 'zone' 
    let container = document.getElementById("code11"); 
    container.appendChild(zone); 

    // Ajuster la taille du conteneur 'code' pour qu'il s'adapte à son contenu 
    container.style.display = "inline-block"; // S'ajuste automatiquement à son contenu 
    container.style.padding = "10px"; // Padding autour du contenu du conteneur 
    container.style.border = "2px solid #ccc"; // Bordure légère pour le parent 
}



function inverserChaine() {
    let texte = prompt("Entrez une chaîne de caractères :");
    let texteInverse = texte.split("").reverse().join("");
    alert("La chaîne inversée est : " + texteInverse);
}


function afficherCode12(idContainer) { 
    // Créer un nouvel élément div pour le code 
    let zone = document.createElement("div"); 
    // Ajouter du texte à l'intérieur de ce div 
    zone.innerText = "Voici le texte qui apparaîtra dans un carré gris."; 
    // Ajouter des styles directement via JavaScript 
    zone.style.backgroundColor = "gray"; // Fond gris 
    zone.style.padding = "10px"; // Espacement autour du texte 
    zone.style.border = "2px solid black"; // Bordure noire 
    zone.style.borderRadius = "8px"; // Coins arrondis 
    zone.style.color = "white"; // Texte en blanc 
    zone.style.display = "block"; // Rendre le div visible 

    // Trouver le conteneur 'code' et y ajouter le div 'zone' 
    let container = document.getElementById("code12"); 
    container.appendChild(zone); 

    // Ajuster la taille du conteneur 'code' pour qu'il s'adapte à son contenu 
    container.style.display = "inline-block"; // S'ajuste automatiquement à son contenu 
    container.style.padding = "10px"; // Padding autour du contenu du conteneur 
    container.style.border = "2px solid #ccc"; // Bordure légère pour le parent 
}




function trierTableau() {
    let input = prompt("Entrez des nombres séparés par des virgules :");
    let tableau = input.split(",").map(Number);  // Convertir les entrées en nombres
    tableau.sort((a, b) => a - b);
    alert("Le tableau trié est : " + tableau);
}


function afficherCode13(idContainer) { 
    // Créer un nouvel élément div pour le code 
    let zone = document.createElement("div"); 
    // Ajouter du texte à l'intérieur de ce div 
    zone.innerText = "Voici le texte qui apparaîtra dans un carré gris."; 
    // Ajouter des styles directement via JavaScript 
    zone.style.backgroundColor = "gray"; // Fond gris 
    zone.style.padding = "10px"; // Espacement autour du texte 
    zone.style.border = "2px solid black"; // Bordure noire 
    zone.style.borderRadius = "8px"; // Coins arrondis 
    zone.style.color = "white"; // Texte en blanc 
    zone.style.display = "block"; // Rendre le div visible 

    // Trouver le conteneur 'code' et y ajouter le div 'zone' 
    let container = document.getElementById("code13"); 
    container.appendChild(zone); 

    // Ajuster la taille du conteneur 'code' pour qu'il s'adapte à son contenu 
    container.style.display = "inline-block"; // S'ajuste automatiquement à son contenu 
    container.style.padding = "10px"; // Padding autour du contenu du conteneur 
    container.style.border = "2px solid #ccc"; // Bordure légère pour le parent 
}




function convertirBinaire() {
    let n = parseInt(prompt("Entrez un nombre décimal :"));
    if (isNaN(n)) {
        alert("Veuillez entrer un nombre valide.");
        return;
    }
    let binaire = n.toString(2);
    alert("Le nombre " + n + " en binaire est : " + binaire);
}


function afficherCode14(idContainer) { 
    // Créer un nouvel élément div pour le code 
    let zone = document.createElement("div"); 
    // Ajouter du texte à l'intérieur de ce div 
    zone.innerText = "Voici le texte qui apparaîtra dans un carré gris."; 
    // Ajouter des styles directement via JavaScript 
    zone.style.backgroundColor = "gray"; // Fond gris 
    zone.style.padding = "10px"; // Espacement autour du texte 
    zone.style.border = "2px solid black"; // Bordure noire 
    zone.style.borderRadius = "8px"; // Coins arrondis 
    zone.style.color = "white"; // Texte en blanc 
    zone.style.display = "block"; // Rendre le div visible 

    // Trouver le conteneur 'code' et y ajouter le div 'zone' 
    let container = document.getElementById("code14"); 
    container.appendChild(zone); 

    // Ajuster la taille du conteneur 'code' pour qu'il s'adapte à son contenu 
    container.style.display = "inline-block"; // S'ajuste automatiquement à son contenu 
    container.style.padding = "10px"; // Padding autour du contenu du conteneur 
    container.style.border = "2px solid #ccc"; // Bordure légère pour le parent 
}



function nombreAleatoire() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    alert("Le nombre aléatoire généré est : " + randomNumber);
}


function afficherCode15(idContainer) { 
    // Créer un nouvel élément div pour le code 
    let zone = document.createElement("div"); 
    // Ajouter du texte à l'intérieur de ce div 
    zone.innerText = "Voici le texte qui apparaîtra dans un carré gris."; 
    // Ajouter des styles directement via JavaScript 
    zone.style.backgroundColor = "gray"; // Fond gris 
    zone.style.padding = "10px"; // Espacement autour du texte 
    zone.style.border = "2px solid black"; // Bordure noire 
    zone.style.borderRadius = "8px"; // Coins arrondis 
    zone.style.color = "white"; // Texte en blanc 
    zone.style.display = "block"; // Rendre le div visible 

    // Trouver le conteneur 'code' et y ajouter le div 'zone' 
    let container = document.getElementById("code15"); 
    container.appendChild(zone); 

    // Ajuster la taille du conteneur 'code' pour qu'il s'adapte à son contenu 
    container.style.display = "inline-block"; // S'ajuste automatiquement à son contenu 
    container.style.padding = "10px"; // Padding autour du contenu du conteneur 
    container.style.border = "2px solid #ccc"; // Bordure légère pour le parent 
}



function compterOccurrences() {
    let phrase = prompt("Entrez une phrase :");
    let mot = prompt("Entrez un mot à rechercher :");
    let occurrences = phrase.split(" ").filter(word => word === mot).length;
    alert("Le mot \"" + mot + "\" apparaît " + occurrences + " fois.");
}



function afficherCode16(idContainer) { 
    // Créer un nouvel élément div pour le code 
    let zone = document.createElement("div"); 
    // Ajouter du texte à l'intérieur de ce div 
    zone.innerText = "Voici le texte qui apparaîtra dans un carré gris."; 
    // Ajouter des styles directement via JavaScript 
    zone.style.backgroundColor = "gray"; // Fond gris 
    zone.style.padding = "10px"; // Espacement autour du texte 
    zone.style.border = "2px solid black"; // Bordure noire 
    zone.style.borderRadius = "8px"; // Coins arrondis 
    zone.style.color = "white"; // Texte en blanc 
    zone.style.display = "block"; // Rendre le div visible 

    // Trouver le conteneur 'code' et y ajouter le div 'zone' 
    let container = document.getElementById("code16"); 
    container.appendChild(zone); 

    // Ajuster la taille du conteneur 'code' pour qu'il s'adapte à son contenu 
    container.style.display = "inline-block"; // S'ajuste automatiquement à son contenu 
    container.style.padding = "10px"; // Padding autour du contenu du conteneur 
    container.style.border = "2px solid #ccc"; // Bordure légère pour le parent 
}
