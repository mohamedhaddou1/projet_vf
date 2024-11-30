function verifierNombre() {
  // Demander à l'utilisateur d'entrer un nombre
  let nombre = prompt("Entrez un nombre pour vérifier s'il est positif, négatif ou zéro :");
  
  // Convertir l'entrée utilisateur (qui est une chaîne de caractères) en un nombre
  nombre = parseFloat(nombre);
  
  // Vérifier si l'entrée est un nombre valide
  if (isNaN(nombre)) { // Si la conversion échoue, la valeur sera "NaN" (Not a Number)
      alert("Veuillez entrer un nombre valide !"); // Alerte pour demander une valeur correcte
  } else if (nombre > 0) { // Si le nombre est strictement supérieur à 0
      alert("Le nombre " + nombre + " est positif."); // Alerte indiquant que le nombre est positif
  } else if (nombre < 0) { // Si le nombre est strictement inférieur à 0
      alert("Le nombre " + nombre + " est négatif."); // Alerte indiquant que le nombre est négatif
  } else { // Si aucune des conditions précédentes n'est vraie, le nombre est égal à 0
      alert("Le nombre est zéro."); // Alerte indiquant que le nombre est zéro
  }
  
  // Appeler une autre fonction nommée "afficherCode" avec l'argument "code1"
  // (Note : cette fonction "afficherCode" n'est pas définie ici. Elle doit être définie ailleurs.)
  afficherCode1("code1");
}


function afficherCode1(divId) {
  // Trouver l'élément HTML avec l'ID donné ("code1")
  const div = document.getElementById('code1');
  
  // Vérifier si cet élément existe
  if (!div) { // Si l'élément n'est pas trouvé
    console.error(`Le div avec l'ID "${divId}" n'a pas été trouvé.`); // Afficher un message d'erreur dans la console
    return; // Arrêter l'exécution de la fonction
  }

  // Trouver le div contenant l'élément "Exercice 2" (ID "code(2)")
  const divToMove = document.getElementById('code(2)');
  
  // Vérifier si cet élément existe
  if (!divToMove) { // Si l'élément n'est pas trouvé
    console.error('Le div à déplacer (ID "exercise-2") n\'a pas été trouvé.'); // Afficher un message d'erreur
    return; // Arrêter l'exécution
  }

  // Injecter du style CSS pour l'affichage si ce n'est pas encore fait
  if (!document.getElementById('dynamic-style')) { // Si le style n'a pas encore été ajouté
    const style = document.createElement('style'); // Créer un élément <style>
    style.id = 'dynamic-style'; // Lui donner un ID pour éviter de l'ajouter plusieurs fois
    style.textContent = `
      .code-container {
        padding: 10px;
        background-color: #f4f4f4;
        border: 1px solid #ddd;
        border-radius: 5px;
        overflow-x: auto; /* Ajoute un défilement horizontal si le contenu est trop large */
        margin-top: 10px;
      }

      #exercise-2 {
        transition: transform 0.5s ease; /* Ajoute une animation fluide */
      }

      .moved {
        transform: translateY(100px); /* Déplace l'élément verticalement */
      }
    `;
    document.head.appendChild(style); // Ajouter le style au <head> du document
  }

  // Vérifier si un conteneur de code (pour afficher le code) existe déjà dans le div
  let codeContainer = div.querySelector('.code-container');
  
  // Si le conteneur n'existe pas, le créer
  if (!codeContainer) {
    codeContainer = document.createElement('pre'); // Créer un élément <pre> pour afficher le code avec formatage
    codeContainer.classList.add('code-container'); // Ajouter une classe pour appliquer le style CSS

    // Ajouter le contenu du code à afficher
    const codeContent = `function verifierNombre() {
  let nombre = prompt("Entrez un nombre pour vérifier s'il est positif, négatif ou zéro :");
  nombre = parseFloat(nombre);
  if (isNaN(nombre)) { 
      alert("Veuillez entrer un nombre valide !"); 
  } else if (nombre > 0) { 
      alert("Le nombre " + nombre + " est positif.");
  } else if (nombre < 0) { 
      alert("Le nombre " + nombre + " est négatif."); 
  } else { 
      alert("Le nombre est zéro."); 
  afficherCode1("code1");
}`;
    codeContainer.textContent = codeContent; // Ajouter le code dans le conteneur

    // Ajouter le conteneur de code dans le div
    div.appendChild(codeContainer);
  }

  // Basculer l'affichage du conteneur de code (afficher ou masquer)
  if (codeContainer.style.display === "none" || codeContainer.style.display === "") { // Si le code est masqué
    codeContainer.style.display = "block"; // Afficher le conteneur
    divToMove.classList.add('moved'); // Appliquer la classe CSS pour déplacer "Exercice 2"
  } else { // Si le code est déjà visible
    codeContainer.style.display = "none"; // Masquer le conteneur
    divToMove.classList.remove('moved'); // Réinitialiser la position de "Exercice 2"
  }
}







function parite() {
  // Demander à l'utilisateur d'entrer un nombre via une fenêtre prompt
  let userInput = prompt("Entrez un nombre pour vérifier s'il est pair ou impair :");
  
  // Convertir l'entrée utilisateur (texte) en un entier
  let num = parseInt(userInput);
  
  // Vérifier si l'entrée n'est pas un nombre valide
  if (isNaN(num)) { // isNaN vérifie si la valeur n'est pas un nombre
      alert("Veuillez entrer un nombre valide."); // Affiche un message d'erreur si l'entrée est invalide
      return; // Arrête l'exécution de la fonction ici
  }

  // Vérifier si le nombre est pair ou impair
  if (num % 2 === 0) { // Utilise l'opérateur modulo (%) pour vérifier si le reste de la division par 2 est 0
      alert(num + " est un nombre pair."); // Affiche un message indiquant que le nombre est pair
  } else { // Sinon, si le reste n'est pas 0
      alert(num + " est un nombre impair."); // Affiche un message indiquant que le nombre est impair
  }

  // Appeler une autre fonction nommée "afficherCode" pour afficher du code associé
  // (Note : la fonction "afficherCode" doit être définie ailleurs dans votre programme)
  afficherCode("code2");
}




function afficherCode2(divId) {
  // Trouver l'élément HTML avec l'ID "code2"
  const div = document.getElementById('code2');
  
  // Vérifier si cet élément existe
  if (!div) { // Si l'élément "code2" n'est pas trouvé
    console.error(`Le div avec l'ID "${divId}" n'a pas été trouvé.`); // Afficher un message d'erreur
    return; // Arrêter l'exécution de la fonction
  }

  // Trouver le div contenant l'élément "Exercice 2" (ID "code(3)")
  const divToMove = document.getElementById('code(3)');
  
  // Vérifier si cet élément existe
  if (!divToMove) { // Si l'élément "code(3)" n'est pas trouvé
    console.error('Le div à déplacer (ID "exercise-2") n\'a pas été trouvé.'); // Afficher un message d'erreur
    return; // Arrêter l'exécution
  }

  // Injecter un style CSS dans la page si ce n'est pas encore fait
  if (!document.getElementById('dynamic-style')) { // Si le style n'existe pas encore
    const style = document.createElement('style'); // Créer un élément <style>
    style.id = 'dynamic-style'; // Lui donner un ID unique
    style.textContent = `
      .code-container {
        padding: 10px; /* Ajouter un espace interne autour du texte */
        background-color: #f4f4f4; /* Couleur de fond gris clair */
        border: 1px solid #ddd; /* Bordure fine et grise */
        border-radius: 5px; /* Coins arrondis */
        overflow-x: auto; /* Ajoute un défilement horizontal si nécessaire */
        margin-top: 10px; /* Espacement au-dessus */
      }

      #exercise-2 {
        transition: transform 0.5s ease; /* Animation fluide pour le déplacement */
      }

      .moved {
        transform: translateY(100px); /* Déplace verticalement de 100px */
      }
    `;
    document.head.appendChild(style); // Ajouter le style au <head> du document
  }

  // Vérifier si un conteneur de code existe déjà dans le div
  let codeContainer = div.querySelector('.code-container');
  
  // Si le conteneur n'existe pas, le créer
  if (!codeContainer) {
    codeContainer = document.createElement('pre'); // Créer un élément <pre> pour afficher le code formaté
    codeContainer.classList.add('code-container'); // Ajouter une classe pour appliquer le style CSS

    // Ajouter le contenu du code à afficher
    const codeContent = `function parite() {
  let userInput = prompt("Entrez un nombre pour vérifier s'il est pair ou impair :");
  let num = parseInt(userInput);
  if (isNaN(num)) { 
      alert("Veuillez entrer un nombre valide."); 
      return; 
  }
  if (num % 2 === 0) {
      alert(num + " est un nombre pair."); 
  } else { 
      alert(num + " est un nombre impair."); 
  }
  afficherCode("code2");
}`;
    codeContainer.textContent = codeContent; // Ajouter le texte du code dans le conteneur

    // Ajouter le conteneur de code dans le div
    div.appendChild(codeContainer);
  }

  // Basculer l'affichage du conteneur de code (afficher ou masquer)
  if (codeContainer.style.display === "none" || codeContainer.style.display === "") { // Si le code est masqué ou non défini
    codeContainer.style.display = "block"; // Afficher le conteneur de code
    divToMove.classList.add('moved'); // Ajouter une classe pour déplacer le carré "Exercice 2"
  } else { // Si le code est déjà visible
    codeContainer.style.display = "none"; // Masquer le conteneur de code
    divToMove.classList.remove('moved'); // Réinitialiser la position du div suivant
  }
}



function verifierAge() {
  // Demander à l'utilisateur d'entrer son âge
  let age = prompt("Quel est ton âge ?");

  // Convertir l'entrée utilisateur (texte) en un nombre entier
  age = parseInt(age);

  // Vérifier si la valeur entrée n'est pas un nombre valide
  if (isNaN(age)) { // Si la conversion échoue, la valeur sera "NaN" (Not a Number)
      alert("Veuillez entrer un âge valide !"); // Alerte pour signaler une erreur dans l'entrée
  } else if (age >= 18) { // Si l'âge est supérieur ou égal à 18
      alert("Tu peux conduire !"); // Message indiquant que l'utilisateur est autorisé à conduire
  } else { // Si l'âge est inférieur à 18
      alert("Tu ne peux pas conduire."); // Message indiquant que l'utilisateur n'est pas autorisé à conduire
  }

  // Appeler une autre fonction nommée "afficherCode" pour afficher le code associé
  // (Note : la fonction "afficherCode" doit être définie ailleurs dans le programme)
  afficherCode("code3");
}


function afficherCode3(divId) {
  // Vérifie si un élément avec l'ID 'code3' existe dans la page
  const div = document.getElementById('code3');
  if (!div) { // Si l'élément n'existe pas
    console.error(`Le div avec l'ID "${divId}" n'a pas été trouvé.`); // Affiche un message d'erreur dans la console
    return; // Arrête la fonction
  }

  // Sélectionne un autre élément ayant l'ID 'code(4)' pour effectuer un déplacement
  const divToMove = document.getElementById('code(4)');
  if (!divToMove) { // Si cet élément n'existe pas
    console.error('Le div à déplacer (ID "exercise-2") n\'a pas été trouvé.'); // Affiche un message d'erreur dans la console
    return; // Arrête la fonction
  }

  // Injecte un style CSS dans la page si ce n'est pas encore fait
  if (!document.getElementById('dynamic-style')) { // Vérifie si le style est déjà présent
    const style = document.createElement('style'); // Crée un élément <style>
    style.id = 'dynamic-style'; // Attribue un ID pour éviter les doublons
    style.textContent = `
      .code-container {
        padding: 10px;
        background-color: #f4f4f4; /* Couleur de fond */
        border: 1px solid #ddd; /* Bordure grise */
        border-radius: 5px; /* Coins arrondis */
        overflow-x: auto; /* Barre de défilement horizontale si le contenu dépasse */
        margin-top: 10px; /* Espace au-dessus */
      }

      #exercise-2 {
        transition: transform 0.5s ease; /* Animation fluide lors du déplacement */
      }

      .moved {
        transform: translateY(100px); /* Déplace l'élément vers le bas de 100px */
      }
    `;
    document.head.appendChild(style); // Ajoute le style à l'en-tête de la page
  }

  // Vérifie si un conteneur de code existe déjà dans le div
  let codeContainer = div.querySelector('.code-container');
  
  // Si le conteneur n'existe pas, on le crée
  if (!codeContainer) {
    codeContainer = document.createElement('pre'); // Crée un élément <pre> pour afficher du code formaté
    codeContainer.classList.add('code-container'); // Ajoute une classe pour appliquer les styles

    // Le code à afficher dans le conteneur
    const codeContent = `function verifierAge() {
  let age = prompt("Quel est ton âge ?");
  age = parseInt(age);
  if (isNaN(age)) { 
      alert("Veuillez entrer un âge valide !"); 
  } else if (age >= 18) { 
      alert("Tu peux conduire !"); 
  } else { 
      alert("Tu ne peux pas conduire."); 
  }
  afficherCode("code3");
}`;
    codeContainer.textContent = codeContent; // Remplit le conteneur avec le code

    // Ajoute le conteneur de code au div principal
    div.appendChild(codeContainer);
  }

  // Bascule entre afficher et cacher le conteneur de code
  if (codeContainer.style.display === "none" || codeContainer.style.display === "") {
    codeContainer.style.display = "block"; // Affiche le conteneur
    divToMove.classList.add('moved'); // Déplace visuellement le div 'code(4)'
  } else {
    codeContainer.style.display = "none"; // Cache le conteneur
    divToMove.classList.remove('moved'); // Réinitialise la position du div
  }
}



function calculerSomme() {
  // Demander à l'utilisateur d'entrer le premier nombre avec prompt()
  let num1 = prompt("Entrez le premier nombre :");

  // Demander à l'utilisateur d'entrer le deuxième nombre avec prompt()
  let num2 = prompt("Entrez le deuxième nombre :");

  // Convertir les valeurs entrées en nombres (les valeurs sont des chaînes de caractères au départ)
  num1 = parseFloat(num1);  // Convertit num1 en un nombre flottant (avec décimales possibles)
  num2 = parseFloat(num2);  // Convertit num2 en un nombre flottant (avec décimales possibles)

  // Vérifier si l'une des valeurs n'est pas un nombre valide
  if (isNaN(num1) || isNaN(num2)) {
      // Si l'une des valeurs n'est pas un nombre, afficher un message d'erreur
      alert("Veuillez entrer des nombres valides.");
      return;  // Arrêter la fonction ici si les valeurs ne sont pas valides
  }

  // Calculer la somme des deux nombres
  let somme = num1 + num2;

  // Afficher le résultat de la somme dans une alerte
  alert("La somme des deux nombres est : " + somme);

  // Appeler une fonction afficherCode pour afficher le code
  afficherCode("code4");
}


function afficherCode4(divId) {
  // Vérifie si le div avec l'ID "code4" existe dans le document
  const div = document.getElementById('code4');
  if (!div) {
    console.error(`Le div avec l'ID "${divId}" n'a pas été trouvé.`);
    return;  // Si le div n'existe pas, on arrête l'exécution de la fonction
  }

  // Sélectionne le div à déplacer, ici avec l'ID "code(5)"
  const divToMove = document.getElementById('code(5)');
  if (!divToMove) {
    console.error('Le div à déplacer (ID "exercise-2") n\'a pas été trouvé.');
    return;  // Si ce div n'existe pas, on arrête l'exécution
  }

  // Injecte un style CSS si ce n'est pas déjà fait (évite les duplications)
  if (!document.getElementById('dynamic-style')) {
    const style = document.createElement('style');  // Crée une nouvelle balise <style>
    style.id = 'dynamic-style';  // Attribue un ID à cette balise pour éviter les doublons
    style.textContent = `
      .code-container {
        padding: 10px;
        background-color: #f4f4f4;
        border: 1px solid #ddd;
        border-radius: 5px;
        overflow-x: auto;
        margin-top: 10px;
      }

      #exercise-2 {
        transition: transform 0.5s ease; /* Animation fluide */
      }

      .moved {
        transform: translateY(100px); /* Déplace l'élément de 100px vers le bas */
      }
    `;
    document.head.appendChild(style);  // Ajoute le style au <head> du document
  }

  // Vérifie si un conteneur pour afficher le code existe déjà dans le div
  let codeContainer = div.querySelector('.code-container');
  
  // Si le conteneur n'existe pas, on le crée
  if (!codeContainer) {
    codeContainer = document.createElement('pre');  // Crée un élément <pre> pour afficher du code
    codeContainer.classList.add('code-container');  // Ajoute une classe CSS au conteneur

    // Le code JavaScript à afficher dans le conteneur
    const codeContent = `function calculerSomme() {
  let num1 = prompt("Entrez le premier nombre :");
  let num2 = prompt("Entrez le deuxième nombre :");
  num1 = parseFloat(num1);  // Convertit num1 en un nombre flottant (avec décimales possibles)
  num2 = parseFloat(num2);  // Convertit num2 en un nombre flottant (avec décimales possibles)
  if (isNaN(num1) || isNaN(num2)) {
      alert("Veuillez entrer des nombres valides.");
      return;  // Arrêter la fonction ici si les valeurs ne sont pas valides
  }

  let somme = num1 + num2;

  alert("La somme des deux nombres est : " + somme);
  afficherCode("code4");
}`;
    codeContainer.textContent = codeContent;  // Insère le code dans le conteneur

    // Ajoute le conteneur de code au div
    div.appendChild(codeContainer);
  }

  // Bascule l'affichage du code (affiche ou cache)
  if (codeContainer.style.display === "none" || codeContainer.style.display === "") {
    codeContainer.style.display = "block";  // Affiche le code
    divToMove.classList.add('moved');  // Déplace le div suivant
  } else {
    codeContainer.style.display = "none";  // Cache le code
    divToMove.classList.remove('moved');  // Réinitialise la position du div suivant
  }
}


function calculerCarre() {
  // Demander à l'utilisateur d'entrer un nombre via une boîte de dialogue
  let num = prompt("Entrez un nombre :");

  // Convertir l'entrée utilisateur en un nombre flottant
  num = parseFloat(num);

  // Vérifier si l'entrée n'est pas un nombre valide
  if (isNaN(num)) {
    // Si ce n'est pas un nombre, afficher une alerte d'erreur
    alert("Veuillez entrer un nombre valide.");
    return; // Arrêter l'exécution de la fonction
  }

  // Calculer le carré du nombre
  let carre = num * num;

  // Afficher le résultat dans une alerte
  alert("Le carré de " + num + " est : " + carre);

  // Appeler une autre fonction pour afficher le code correspondant (en option)
  afficherCode("code5");
}


function afficherCode5(divId) {
  // Vérifie si le div avec l'ID "code5" existe dans le document
  const div = document.getElementById('code5');
  if (!div) {
    console.error(`Le div avec l'ID "${divId}" n'a pas été trouvé.`);
    return;  // Si le div n'existe pas, on arrête l'exécution de la fonction
  }

  // Sélectionne le div à déplacer, ici avec l'ID "code(6)"
  const divToMove = document.getElementById('code(6)');
  if (!divToMove) {
    console.error('Le div à déplacer (ID "exercise-2") n\'a pas été trouvé.');
    return;  // Si ce div n'existe pas, on arrête l'exécution
  }

  // Injecte un style CSS si ce n'est pas déjà fait (évite les duplications)
  if (!document.getElementById('dynamic-style')) {
    const style = document.createElement('style');  // Crée une nouvelle balise <style>
    style.id = 'dynamic-style';  // Attribue un ID à cette balise pour éviter les doublons
    style.textContent = `
      .code-container {
        padding: 10px;
        background-color: #f4f4f4;
        border: 1px solid #ddd;
        border-radius: 5px;
        overflow-x: auto;
        margin-top: 10px;
      }

      #exercise-2 {
        transition: transform 0.5s ease; /* Animation fluide */
      }

      .moved {
        transform: translateY(100px); /* Déplace l'élément de 100px vers le bas */
      }
    `;
    document.head.appendChild(style);  // Ajoute le style au <head> du document
  }

  // Vérifie si un conteneur pour afficher le code existe déjà dans le div
  let codeContainer = div.querySelector('.code-container');
  
  // Si le conteneur n'existe pas, on le crée
  if (!codeContainer) {
    codeContainer = document.createElement('pre');  // Crée un élément <pre> pour afficher du code
    codeContainer.classList.add('code-container');  // Ajoute une classe CSS au conteneur

    // Le code JavaScript à afficher dans le conteneur
    const codeContent = `function calculerCarre() {
  // Demander à l'utilisateur d'entrer un nombre via une boîte de dialogue
  let num = prompt("Entrez un nombre :");
  num = parseFloat(num);
  if (isNaN(num)) {
    alert("Veuillez entrer un nombre valide.");
    return; // Arrêter l'exécution de la fonction
  }
  let carre = num * num;
  alert("Le carré de " + num + " est : " + carre);
  afficherCode("code5");
}`;
    codeContainer.textContent = codeContent;  // Insère le code dans le conteneur

    // Ajoute le conteneur de code au div
    div.appendChild(codeContainer);
  }

  // Bascule l'affichage du code (affiche ou cache)
  if (codeContainer.style.display === "none" || codeContainer.style.display === "") {
    codeContainer.style.display = "block";  // Affiche le code
    divToMove.classList.add('moved');  // Déplace le div suivant
  } else {
    codeContainer.style.display = "none";  // Cache le code
    divToMove.classList.remove('moved');  // Réinitialise la position du div suivant
  }
}


function convertirCelsiusEnFahrenheit() { 
  // Demander à l'utilisateur d'entrer une température en Celsius via un prompt 
  let celsius = parseFloat(prompt("Entrez la température en Celsius :")); 

  // Vérifier si l'entrée est valide 
  if (!isNaN(celsius)) { 
      let fahrenheit = (celsius * 9 / 5) + 32; 
      alert(celsius + "°C correspond à " + fahrenheit.toFixed(2) + "°F"); // Limite à deux décimales
  } else { 
      alert("Veuillez entrer une valeur numérique valide."); 
  } 
  afficherCode("code6"); 
}


function afficherCode6(divId) {
  // Vérifie si le div avec l'ID "code6" existe dans le document
  const div = document.getElementById('code6');
  if (!div) {
    console.error(`Le div avec l'ID "${divId}" n'a pas été trouvé.`);
    return;  // Si le div n'existe pas, on arrête l'exécution de la fonction
  }

  // Sélectionne le div à déplacer, ici avec l'ID "code(7)"
  const divToMove = document.getElementById('code(7)');
  if (!divToMove) {
    console.error('Le div à déplacer (ID "exercise-2") n\'a pas été trouvé.');
    return;  // Si ce div n'existe pas, on arrête l'exécution
  }

  // Injecte un style CSS si ce n'est pas déjà fait (évite les duplications)
  if (!document.getElementById('dynamic-style')) {
    const style = document.createElement('style');  // Crée une nouvelle balise <style>
    style.id = 'dynamic-style';  // Attribue un ID à cette balise pour éviter les doublons
    style.textContent = `
      .code-container {
        padding: 10px;
        background-color: #f4f4f4;
        border: 1px solid #ddd;
        border-radius: 5px;
        overflow-x: auto;
        margin-top: 10px;
      }

      #exercise-2 {
        transition: transform 0.5s ease; /* Animation fluide */
      }

      .moved {
        transform: translateY(100px); /* Déplace l'élément de 100px vers le bas */
      }
    `;
    document.head.appendChild(style);  // Ajoute le style au <head> du document
  }

  // Vérifie si un conteneur pour afficher le code existe déjà dans le div
  let codeContainer = div.querySelector('.code-container');
  
  // Si le conteneur n'existe pas, on le crée
  if (!codeContainer) {
    codeContainer = document.createElement('pre');  // Crée un élément <pre> pour afficher du code
    codeContainer.classList.add('code-container');  // Ajoute une classe CSS au conteneur

    // Le code JavaScript à afficher dans le conteneur
    const codeContent = `function convertirCelsiusEnFahrenheit() { 
  let celsius = parseFloat(prompt("Entrez la température en Celsius :")); 
  if (!isNaN(celsius)) { 
      let fahrenheit = (celsius * 9 / 5) + 32; 
      alert(celsius + "°C correspond à " + fahrenheit.toFixed(2) + "°F"); 
  } else { 
      alert("Veuillez entrer une valeur numérique valide."); 
  } 
  afficherCode("code6"); 
}`;
    codeContainer.textContent = codeContent;  // Insère le code dans le conteneur

    // Ajoute le conteneur de code au div
    div.appendChild(codeContainer);
  }

  // Bascule l'affichage du code (affiche ou cache)
  if (codeContainer.style.display === "none" || codeContainer.style.display === "") {
    codeContainer.style.display = "block";  // Affiche le code
    divToMove.classList.add('moved');  // Déplace le div suivant
  } else {
    codeContainer.style.display = "none";  // Cache le code
    divToMove.classList.remove('moved');  // Réinitialise la position du div suivant
  }
}


function calculerAireCercle() { 
  // Demander à l'utilisateur de saisir le rayon du cercle
  let rayon = prompt("Entrez le rayon du cercle :"); 
  
  // Convertir la saisie de l'utilisateur en un nombre (elle est d'abord sous forme de texte)
  rayon = parseFloat(rayon); 

  // Vérifier si l'utilisateur a entré un nombre valide
  if (isNaN(rayon)) { 
      // Si ce n'est pas un nombre, afficher un message d'erreur
      alert("Veuillez entrer un nombre valide."); 
      return; // Arrêter la fonction ici
  }

  // Calculer l'aire du cercle en utilisant la formule : π * rayon²
  let aire = Math.PI * rayon * rayon; 

  // Afficher le résultat dans une alerte
  alert("L'aire du cercle est : " + aire); 

  // Appeler une autre fonction pour afficher le code correspondant (si nécessaire)
  afficherCode("code7"); 
}


function afficherCode7(divId) {
  // Vérifie si le div existe
  const div = document.getElementById('code7');
  if (!div) {
    console.error(`Le div avec l'ID "${divId}" n'a pas été trouvé.`);
    return;
  }

  // Sélectionne le div contenant l'exercice suivant
  const divToMove = document.getElementById('code(8)');
  if (!divToMove) {
    console.error('Le div à déplacer (ID "exercise-2") n\'a pas été trouvé.');
    return;
  }

  // Injecter le CSS dans le document si ce n'est pas déjà fait
  if (!document.getElementById('dynamic-style')) {
    const style = document.createElement('style');
    style.id = 'dynamic-style';
    style.textContent = `
      .code-container {
        padding: 10px;
        background-color: #f4f4f4;
        border: 1px solid #ddd;
        border-radius: 5px;
        overflow-x: auto;
        margin-top: 10px;
      }

      #exercise-2 {
        transition: transform 0.5s ease; /* Animation fluide */
      }

      .moved {
        transform: translateY(100px); /* Distance de déplacement */
      }
    `;
    document.head.appendChild(style);
  }

  // Vérifie si le conteneur de code existe déjà dans le div
  let codeContainer = div.querySelector('.code-container');
  
  // Si le conteneur n'existe pas, on le crée
  if (!codeContainer) {
    codeContainer = document.createElement('pre');
    codeContainer.classList.add('code-container');

    // Le code à afficher
    const codeContent = `function calculerAireCercle() { 
  let rayon = prompt("Entrez le rayon du cercle :"); 
  rayon = parseFloat(rayon); 
  if (isNaN(rayon)) { 
      alert("Veuillez entrer un nombre valide."); 
      return; 
  }
  let aire = Math.PI * rayon * rayon; 
  alert("L'aire du cercle est : " + aire); 
  afficherCode("code7"); 
}`;
    codeContainer.textContent = codeContent;

    // Ajouter le conteneur de code au div
    div.appendChild(codeContainer);
  }

  // Bascule de l'affichage de la zone de code
  if (codeContainer.style.display === "none" || codeContainer.style.display === "") {
    codeContainer.style.display = "block"; // Affiche le code
    divToMove.classList.add('moved'); // Déplace le div suivant
  } else {
    codeContainer.style.display = "none"; // Cache le code
    divToMove.classList.remove('moved'); // Réinitialise la position du div suivant
  }
}


function calculerFactorielle() {
  // Demande à l'utilisateur d'entrer un nombre entier positif
  let n = parseInt(prompt("Entrez un nombre entier positif :"));

  // Vérifie si l'entrée est un nombre valide et si le nombre est positif
  if (isNaN(n) || n < 0) {
      alert("Veuillez entrer un nombre entier positif.");
      return;
  }

  // Initialise la variable 'result' à 1, car la factorielle de 0 est 1
  let result = 1;

  // Boucle pour calculer la factorielle
  for (let i = 1; i <= n; i++) {
      result *= i;  // Multiplie 'result' par le nombre 'i' à chaque itération
  }

  // Affiche le résultat de la factorielle dans une alerte
  alert("La factorielle de " + n + " est : " + result);
}




function afficherCode8(divId) {
  // Vérifie si le div existe
  const div = document.getElementById('code8');
  if (!div) {
    console.error(`Le div avec l'ID "${divId}" n'a pas été trouvé.`);
    return;
  }

  // Sélectionne le div contenant l'exercice suivant
  const divToMove = document.getElementById('code(9)');
  if (!divToMove) {
    console.error('Le div à déplacer (ID "exercise-2") n\'a pas été trouvé.');
    return;
  }

  // Injecter le CSS dans le document si ce n'est pas déjà fait
  if (!document.getElementById('dynamic-style')) {
    const style = document.createElement('style');
    style.id = 'dynamic-style';
    style.textContent = `
      .code-container {
        padding: 10px;
        background-color: #f4f4f4;
        border: 1px solid #ddd;
        border-radius: 5px;
        overflow-x: auto;
        margin-top: 10px;
      }

      #exercise-2 {
        transition: transform 0.5s ease; /* Animation fluide */
      }

      .moved {
        transform: translateY(100px); /* Distance de déplacement */
      }
    `;
    document.head.appendChild(style);
  }

  // Vérifie si le conteneur de code existe déjà dans le div
  let codeContainer = div.querySelector('.code-container');
  
  // Si le conteneur n'existe pas, on le crée
  if (!codeContainer) {
    codeContainer = document.createElement('pre');
    codeContainer.classList.add('code-container');

    // Le code à afficher
    const codeContent = `function calculerFactorielle() {
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
}`;
    codeContainer.textContent = codeContent;

    // Ajouter le conteneur de code au div
    div.appendChild(codeContainer);
  }

  // Bascule de l'affichage de la zone de code
  if (codeContainer.style.display === "none" || codeContainer.style.display === "") {
    codeContainer.style.display = "block"; // Affiche le code
    divToMove.classList.add('moved'); // Déplace le div suivant
  } else {
    codeContainer.style.display = "none"; // Cache le code
    divToMove.classList.remove('moved'); // Réinitialise la position du div suivant
  }
}


function estPremier() {
  // Demander à l'utilisateur d'entrer un nombre entier
  let n = parseInt(prompt("Entrez un nombre entier :"));

  // Vérifier si l'entrée est un nombre valide et si elle est supérieure ou égale à 2
  if (isNaN(n) || n < 2) {
      // Si l'entrée n'est pas valide, afficher un message d'erreur
      alert("Veuillez entrer un nombre supérieur ou égal à 2.");
      return; // Arrêter la fonction ici
  }

  // Initialiser une variable pour indiquer si le nombre est premier (par défaut, on suppose qu'il est premier)
  let estPremier = true;

  // Boucle pour vérifier si le nombre a des diviseurs autres que 1 et lui-même
  // On teste les diviseurs de 2 jusqu'à la racine carrée du nombre
  for (let i = 2; i <= Math.sqrt(n); i++) {
      // Vérifier si le nombre est divisible par i
      if (n % i === 0) {
          // Si on trouve un diviseur, ce n'est pas un nombre premier
          estPremier = false;
          break; // Sortir de la boucle car on sait qu'il n'est pas premier
      }
  }

  // Après la boucle, vérifier si le nombre est toujours considéré comme premier
  if (estPremier) {
      // Si oui, afficher un message indiquant que le nombre est premier
      alert(n + " est un nombre premier.");
  } else {
      // Sinon, afficher un message indiquant qu'il n'est pas premier
      alert(n + " n'est pas un nombre premier.");
  }
}



function afficherCode9(divId) {
  // Vérifie si le div existe
  const div = document.getElementById('code9');
  if (!div) {
    console.error(`Le div avec l'ID "${divId}" n'a pas été trouvé.`);
    return;
  }

  // Sélectionne le div contenant l'exercice suivant
  const divToMove = document.getElementById('code(10)');
  if (!divToMove) {
    console.error('Le div à déplacer (ID "exercise-2") n\'a pas été trouvé.');
    return;
  }

  // Injecter le CSS dans le document si ce n'est pas déjà fait
  if (!document.getElementById('dynamic-style')) {
    const style = document.createElement('style');
    style.id = 'dynamic-style';
    style.textContent = `
      .code-container {
        padding: 10px;
        background-color: #f4f4f4;
        border: 1px solid #ddd;
        border-radius: 5px;
        overflow-x: auto;
        margin-top: 10px;
      }

      #exercise-2 {
        transition: transform 0.5s ease; /* Animation fluide */
      }

      .moved {
        transform: translateY(100px); /* Distance de déplacement */
      }
    `;
    document.head.appendChild(style);
  }

  // Vérifie si le conteneur de code existe déjà dans le div
  let codeContainer = div.querySelector('.code-container');
  
  // Si le conteneur n'existe pas, on le crée
  if (!codeContainer) {
    codeContainer = document.createElement('pre');
    codeContainer.classList.add('code-container');

    // Le code à afficher
    const codeContent = `function estPremier() {
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
}`;
    codeContainer.textContent = codeContent;

    // Ajouter le conteneur de code au div
    div.appendChild(codeContainer);
  }

  // Bascule de l'affichage de la zone de code
  if (codeContainer.style.display === "none" || codeContainer.style.display === "") {
    codeContainer.style.display = "block"; // Affiche le code
    divToMove.classList.add('moved'); // Déplace le div suivant
  } else {
    codeContainer.style.display = "none"; // Cache le code
    divToMove.classList.remove('moved'); // Réinitialise la position du div suivant
  }
}




function tableMultiplication() {
  // Demander à l'utilisateur d'entrer un nombre
  let n = parseInt(prompt("Entrez un nombre pour afficher sa table de multiplication :"));

  // Vérifier si l'entrée est un nombre valide
  if (isNaN(n)) {
      // Si ce n'est pas un nombre, afficher un message d'erreur
      alert("Veuillez entrer un nombre valide.");
      return; // Arrêter l'exécution de la fonction
  }

  // Initialiser une chaîne vide pour stocker les résultats de la table
  let result = "";

  // Utiliser une boucle pour calculer la table de multiplication de 1 à 10
  for (let i = 1; i <= 10; i++) {
      // Ajouter chaque ligne de la table au résultat
      result += n + " x " + i + " = " + (n * i) + "\n";
  }

  // Afficher la table de multiplication dans une alerte
  alert("La table de multiplication de " + n + " est :\n" + result);
}


function afficherCode10(divId) {
  // Vérifie si le div existe
  const div = document.getElementById('code10');
  if (!div) {
    console.error(`Le div avec l'ID "${divId}" n'a pas été trouvé.`);
    return;
  }

  // Sélectionne le div contenant l'exercice suivant
  const divToMove = document.getElementById('code(11)');
  if (!divToMove) {
    console.error('Le div à déplacer (ID "exercise-2") n\'a pas été trouvé.');
    return;
  }

  // Injecter le CSS dans le document si ce n'est pas déjà fait
  if (!document.getElementById('dynamic-style')) {
    const style = document.createElement('style');
    style.id = 'dynamic-style';
    style.textContent = `
      .code-container {
        padding: 10px;
        background-color: #f4f4f4;
        border: 1px solid #ddd;
        border-radius: 5px;
        overflow-x: auto;
        margin-top: 10px;
      }

      #exercise-2 {
        transition: transform 0.5s ease; /* Animation fluide */
      }

      .moved {
        transform: translateY(100px); /* Distance de déplacement */
      }
    `;
    document.head.appendChild(style);
  }

  // Vérifie si le conteneur de code existe déjà dans le div
  let codeContainer = div.querySelector('.code-container');
  
  // Si le conteneur n'existe pas, on le crée
  if (!codeContainer) {
    codeContainer = document.createElement('pre');
    codeContainer.classList.add('code-container');

    // Le code à afficher
    const codeContent = `function tableMultiplication() {
  let n = parseInt(prompt("Entrez un nombre pour afficher sa table de multiplication :"));
  if (isNaN(n)) {
      alert("Veuillez entrer un nombre valide.");
      return; // Arrêter l'exécution de la fonction
  }
  let result = "";
  for (let i = 1; i <= 10; i++) {
      result += n + " x " + i + " = " + (n * i) + "\n";
  }
  alert("La table de multiplication de " + n + " est :\n" + result);
}`;
    codeContainer.textContent = codeContent;

    // Ajouter le conteneur de code au div
    div.appendChild(codeContainer);
  }

  // Bascule de l'affichage de la zone de code
  if (codeContainer.style.display === "none" || codeContainer.style.display === "") {
    codeContainer.style.display = "block"; // Affiche le code
    divToMove.classList.add('moved'); // Déplace le div suivant
  } else {
    codeContainer.style.display = "none"; // Cache le code
    divToMove.classList.remove('moved'); // Réinitialise la position du div suivant
  }
}





function compterVoyelles() {
  // Demander à l'utilisateur d'entrer un texte (mot ou phrase)
  let texte = prompt("Entrez une phrase ou un mot :");

  // Définir une chaîne contenant toutes les voyelles (majuscules et minuscules)
  let voyelles = "aeiouAEIOU";

  // Initialiser un compteur à 0 pour compter le nombre de voyelles
  let compteur = 0;

  // Parcourir chaque caractère du texte entré par l'utilisateur
  for (let i = 0; i < texte.length; i++) {
      // Vérifier si le caractère actuel est une voyelle
      if (voyelles.includes(texte[i])) {
          // Si oui, augmenter le compteur de 1
          compteur++;
      }
  }

  // Afficher le nombre total de voyelles trouvées dans une alerte
  alert("Le nombre de voyelles est : " + compteur);
}


function afficherCode11(divId) {
  // Vérifie si le div existe
  const div = document.getElementById('code11');
  if (!div) {
    console.error(`Le div avec l'ID "${divId}" n'a pas été trouvé.`);
    return;
  }

  // Sélectionne le div contenant l'exercice suivant
  const divToMove = document.getElementById('code(12)');
  if (!divToMove) {
    console.error('Le div à déplacer (ID "exercise-2") n\'a pas été trouvé.');
    return;
  }

  // Injecter le CSS dans le document si ce n'est pas déjà fait
  if (!document.getElementById('dynamic-style')) {
    const style = document.createElement('style');
    style.id = 'dynamic-style';
    style.textContent = `
      .code-container {
        padding: 10px;
        background-color: #f4f4f4;
        border: 1px solid #ddd;
        border-radius: 5px;
        overflow-x: auto;
        margin-top: 10px;
      }

      #exercise-2 {
        transition: transform 0.5s ease; /* Animation fluide */
      }

      .moved {
        transform: translateY(100px); /* Distance de déplacement */
      }
    `;
    document.head.appendChild(style);
  }

  // Vérifie si le conteneur de code existe déjà dans le div
  let codeContainer = div.querySelector('.code-container');
  
  // Si le conteneur n'existe pas, on le crée
  if (!codeContainer) {
    codeContainer = document.createElement('pre');
    codeContainer.classList.add('code-container');

    // Le code à afficher
    const codeContent = `function compterVoyelles() {
  let texte = prompt("Entrez une phrase ou un mot :");
  let voyelles = "aeiouAEIOU";
  let compteur = 0;
  for (let i = 0; i < texte.length; i++) {
      if (voyelles.includes(texte[i])) {
          compteur++;
      }
  }
  alert("Le nombre de voyelles est : " + compteur);
}`;
    codeContainer.textContent = codeContent;

    // Ajouter le conteneur de code au div
    div.appendChild(codeContainer);
  }

  // Bascule de l'affichage de la zone de code
  if (codeContainer.style.display === "none" || codeContainer.style.display === "") {
    codeContainer.style.display = "block"; // Affiche le code
    divToMove.classList.add('moved'); // Déplace le carré du div suivant
  } else {
    codeContainer.style.display = "none"; // Cache le code
    divToMove.classList.remove('moved'); // Réinitialise la position du div suivant
  }
}


function inverserChaine() {
  // Demander à l'utilisateur d'entrer une chaîne de caractères
  let texte = prompt("Entrez une chaîne de caractères :");

  // Inverser la chaîne de caractères
  // 1. .split("") : Convertit la chaîne en un tableau de caractères individuels.
  // 2. .reverse() : Inverse l'ordre des éléments du tableau.
  // 3. .join("") : Rejoint les caractères du tableau inversé en une nouvelle chaîne.
  let texteInverse = texte.split("").reverse().join("");

  // Afficher la chaîne inversée dans une alerte
  alert("La chaîne inversée est : " + texteInverse);
}



function afficherCode12(divId) {
  // Vérifie si le div existe
  const div = document.getElementById('code12');
  if (!div) {
    console.error(`Le div avec l'ID "${divId}" n'a pas été trouvé.`);
    return;
  }

  // Sélectionne le div contenant l'exercice suivant
  const divToMove = document.getElementById('code(13)');
  if (!divToMove) {
    console.error('Le div à déplacer (ID "exercise-2") n\'a pas été trouvé.');
    return;
  }

  // Injecter le CSS dans le document si ce n'est pas déjà fait
  if (!document.getElementById('dynamic-style')) {
    const style = document.createElement('style');
    style.id = 'dynamic-style';
    style.textContent = `
      .code-container {
        padding: 10px;
        background-color: #f4f4f4;
        border: 1px solid #ddd;
        border-radius: 5px;
        overflow-x: auto;
        margin-top: 10px;
      }

      #exercise-2 {
        transition: transform 0.5s ease; /* Animation fluide */
      }

      .moved {
        transform: translateY(100px); /* Distance de déplacement */
      }
    `;
    document.head.appendChild(style);
  }

  // Vérifie si le conteneur de code existe déjà dans le div
  let codeContainer = div.querySelector('.code-container');
  
  // Si le conteneur n'existe pas, on le crée
  if (!codeContainer) {
    codeContainer = document.createElement('pre');
    codeContainer.classList.add('code-container');

    // Le code à afficher
    const codeContent = `function inverserChaine() {
  let texte = prompt("Entrez une chaîne de caractères :");
  let texteInverse = texte.split("").reverse().join("");
  alert("La chaîne inversée est : " + texteInverse);`;
    codeContainer.textContent = codeContent;

    // Ajouter le conteneur de code au div
    div.appendChild(codeContainer);
  }

  // Bascule de l'affichage de la zone de code
  if (codeContainer.style.display === "none" || codeContainer.style.display === "") {
    codeContainer.style.display = "block"; // Affiche le code
    divToMove.classList.add('moved'); // Déplace le div suivant
  } else {
    codeContainer.style.display = "none"; // Cache le code
    divToMove.classList.remove('moved'); // Réinitialise la position du div suivant
  }
}




function trierTableau() {
  // Demander à l'utilisateur d'entrer des nombres séparés par des virgules
  let input = prompt("Entrez des nombres séparés par des virgules :");

  // Convertir la chaîne d'entrée en un tableau de nombres
  // .split(",") : Divise la chaîne de caractères à chaque virgule, créant un tableau de chaînes
  // .map(Number) : Convertit chaque élément du tableau en nombre
  let tableau = input.split(",").map(Number);

  // Trier le tableau en ordre croissant
  // .sort((a, b) => a - b) : Trie les éléments du tableau par ordre numérique
  // La fonction de comparaison (a, b) => a - b permet de trier les nombres correctement
  tableau.sort((a, b) => a - b);

  // Afficher le tableau trié dans une alerte
  alert("Le tableau trié est : " + tableau);
}



function afficherCode13(divId) {
  // Vérifie si le div existe
  const div = document.getElementById('code13');
  if (!div) {
    console.error(`Le div avec l'ID "${divId}" n'a pas été trouvé.`);
    return;
  }

  // Sélectionne le div contenant l'exercice suivant
  const divToMove = document.getElementById('code(14)');
  if (!divToMove) {
    console.error('Le div à déplacer (ID "exercise-2") n\'a pas été trouvé.');
    return;
  }

  // Injecter le CSS dans le document si ce n'est pas déjà fait
  if (!document.getElementById('dynamic-style')) {
    const style = document.createElement('style');
    style.id = 'dynamic-style';
    style.textContent = `
      .code-container {
        padding: 10px;
        background-color: #f4f4f4;
        border: 1px solid #ddd;
        border-radius: 5px;
        overflow-x: auto;
        margin-top: 10px;
      }

      #exercise-2 {
        transition: transform 0.5s ease; /* Animation fluide */
      }

      .moved {
        transform: translateY(100px); /* Distance de déplacement */
      }
    `;
    document.head.appendChild(style);
  }

  // Vérifie si le conteneur de code existe déjà dans le div
  let codeContainer = div.querySelector('.code-container');
  
  // Si le conteneur n'existe pas, on le crée
  if (!codeContainer) {
    codeContainer = document.createElement('pre');
    codeContainer.classList.add('code-container');

    // Le code à afficher
    const codeContent = `
    function trierTableau() {
  let input = prompt("Entrez des nombres séparés par des virgules :");
  let tableau = input.split(",").map(Number);
  tableau.sort((a, b) => a - b);
  alert("Le tableau trié est : " + tableau);
}
  `;
    codeContainer.textContent = codeContent;

    // Ajouter le conteneur de code au div
    div.appendChild(codeContainer);
  }

  // Bascule de l'affichage de la zone de code
  if (codeContainer.style.display === "none" || codeContainer.style.display === "") {
    codeContainer.style.display = "block"; // Affiche le code
    divToMove.classList.add('moved'); // Déplace le div suivant
  } else {
    codeContainer.style.display = "none"; // Cache le code
    divToMove.classList.remove('moved'); // Réinitialise la position du duv suivant
  }
}





function convertirBinaire() {
  // Demander à l'utilisateur d'entrer un nombre décimal
  let n = parseInt(prompt("Entrez un nombre décimal :"));

  // Vérifier si l'utilisateur a bien entré un nombre valide
  if (isNaN(n)) {
      // Afficher un message d'erreur si ce n'est pas un nombre valide
      alert("Veuillez entrer un nombre valide.");
      return;  // Arrêter la fonction si l'entrée n'est pas un nombre
  }

  // Convertir le nombre décimal en binaire en utilisant la méthode toString(2)
  // La méthode toString(2) convertit le nombre en base 2 (binaire)
  let binaire = n.toString(2);

  // Afficher le résultat dans une alerte
  alert("Le nombre " + n + " en binaire est : " + binaire);
}



function afficherCode14(divId) {
  // Vérifie si le div existe
  const div = document.getElementById('code14');
  if (!div) {
    console.error(`Le div avec l'ID "${divId}" n'a pas été trouvé.`);
    return;
  }

  // Sélectionne le div contenant l'exercice suivant
  const divToMove = document.getElementById('code(15)');
  if (!divToMove) {
    console.error('Le div à déplacer (ID "exercise-2") n\'a pas été trouvé.');
    return;
  }

  // Injecter le CSS dans le document si ce n'est pas déjà fait
  if (!document.getElementById('dynamic-style')) {
    const style = document.createElement('style');
    style.id = 'dynamic-style';
    style.textContent = `
      .code-container {
        padding: 10px;
        background-color: #f4f4f4;
        border: 1px solid #ddd;
        border-radius: 5px;
        overflow-x: auto;
        margin-top: 10px;
      }

      #exercise-2 {
        transition: transform 0.5s ease; /* Animation fluide */
      }

      .moved {
        transform: translateY(100px); /* Distance de déplacement */
      }
    `;
    document.head.appendChild(style);
  }

  // Vérifie si le conteneur de code existe déjà dans le div
  let codeContainer = div.querySelector('.code-container');
  
  // Si le conteneur n'existe pas, on le crée
  if (!codeContainer) {
    codeContainer = document.createElement('pre');
    codeContainer.classList.add('code-container');

    // Le code à afficher
    const codeContent = `function convertirBinaire() {
  let n = parseInt(prompt("Entrez un nombre décimal :"));
  if (isNaN(n)) {
      alert("Veuillez entrer un nombre valide.");
      return; 
  }
  let binaire = n.toString(2);
  alert("Le nombre " + n + " en binaire est : " + binaire);}`;
    codeContainer.textContent = codeContent;

    // Ajouter le conteneur de code au div
    div.appendChild(codeContainer);
  }

  // Bascule de l'affichage de la zone de code
  if (codeContainer.style.display === "none" || codeContainer.style.display === "") {
    codeContainer.style.display = "block"; // Affiche le code
    divToMove.classList.add('moved'); // Déplace le div suivant
  } else {
    codeContainer.style.display = "none"; // Cache le code
    divToMove.classList.remove('moved'); // Réinitialise la position du div suivant
  }
}




function nombreAleatoire() {
  // Math.random() génère un nombre aléatoire entre 0 (inclus) et 1 (exclus).
  // Math.floor() arrondit ce nombre vers le bas (pour obtenir un entier).
  // Multiplier par 100 et ajouter 1 permet de générer un nombre entre 1 et 100 inclus.
  let randomNumber = Math.floor(Math.random() * 100) + 1;

  // Afficher le nombre aléatoire généré dans une alerte
  alert("Le nombre aléatoire généré est : " + randomNumber);
}



function afficherCode15(divId) {
  // Vérifie si le div existe
  const div = document.getElementById('code15');
  if (!div) {
    console.error(`Le div avec l'ID "${divId}" n'a pas été trouvé.`);
    return;
  }

  // Sélectionne le div contenant l'exercice suivant
  const divToMove = document.getElementById('code(16)');
  if (!divToMove) {
    console.error('Le div à déplacer (ID "exercise-2") n\'a pas été trouvé.');
    return;
  }

  // Injecter le CSS dans le document si ce n'est pas déjà fait
  if (!document.getElementById('dynamic-style')) {
    const style = document.createElement('style');
    style.id = 'dynamic-style';
    style.textContent = `
      .code-container {
        padding: 10px;
        background-color: #f4f4f4;
        border: 1px solid #ddd;
        border-radius: 5px;
        overflow-x: auto;
        margin-top: 10px;
      }

      #exercise-2 {
        transition: transform 0.5s ease; /* Animation fluide */
      }

      .moved {
        transform: translateY(100px); /* Distance de déplacement */
      }
    `;
    document.head.appendChild(style);
  }

  // Vérifie si le conteneur de code existe déjà dans le div
  let codeContainer = div.querySelector('.code-container');
  
  // Si le conteneur n'existe pas, on le crée
  if (!codeContainer) {
    codeContainer = document.createElement('pre');
    codeContainer.classList.add('code-container');

    // Le code à afficher
    const codeContent = `
    function nombreAleatoire() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  alert("Le nombre aléatoire généré est : " + randomNumber);
}

  `;
    codeContainer.textContent = codeContent;

    // Ajouter le conteneur de code au div
    div.appendChild(codeContainer);
  }

  // Bascule de l'affichage de la zone de code
  if (codeContainer.style.display === "none" || codeContainer.style.display === "") {
    codeContainer.style.display = "block"; // Affiche le code
    divToMove.classList.add('moved'); // Déplace le div suivant
  } else {
    codeContainer.style.display = "none"; // Cache le code
    divToMove.classList.remove('moved'); // Réinitialise la position du carré du div suivant
  }
}




function compterOccurrences() {
  // Demande à l'utilisateur d'entrer une phrase
  let phrase = prompt("Entrez une phrase :");

  // Demande à l'utilisateur d'entrer un mot à rechercher dans la phrase
  let mot = prompt("Entrez un mot à rechercher :");

  // Utilisation de split pour découper la phrase en mots individuels et filter pour compter les occurrences du mot recherché
  let occurrences = phrase.split(" ")      // Sépare la phrase en un tableau de mots
                         .filter(word => word === mot)  // Filtre les mots qui correspondent à 'mot'
                         .length;          // Calcule la longueur du tableau filtré (nombre d'occurrences)

  // Affiche le nombre d'occurrences dans une alerte
  alert("Le mot \"" + mot + "\" apparaît " + occurrences + " fois.");
}




function afficherCode16(divId) {
  // Vérifie si le div existe
  const div = document.getElementById('code16');
  if (!div) {
      console.error(`Le div avec l'ID "${divId}" n'a pas été trouvé.`);
      return;
  }

  // Vérifier si le conteneur de code existe déjà dans le div
  let codeContainer = div.querySelector('.code-container');
  
  // Si le conteneur n'existe pas, on le crée
  if (!codeContainer) {
      codeContainer = document.createElement('pre');
      codeContainer.classList.add('code-container');
      codeContainer.style.padding = "10px";
      codeContainer.style.backgroundColor = "#f4f4f4";
      codeContainer.style.border = "1px solid #ddd";
      codeContainer.style.borderRadius = "5px";
      codeContainer.style.overflowX = "auto";
      codeContainer.style.marginTop = "10px";
      
      // Le code à afficher
      const codeContent = `
function compterOccurrences() {
  let phrase = prompt("Entrez une phrase :");
  let mot = prompt("Entrez un mot à rechercher :");
  let occurrences = phrase.split(" ")     
                         .filter(word => word === mot)  
                         .length;        

  alert("Le mot \"" + mot + "\" apparaît " + occurrences + " fois.");
}
      `;
      codeContainer.textContent = codeContent;

      // Ajouter le conteneur de code au div
      div.appendChild(codeContainer);
  }

  // Bascule de l'affichage de la zone de code
  if (codeContainer.style.display === "none" || codeContainer.style.display === "") {
      codeContainer.style.display = "block"; // Affiche le code
  } else {
      codeContainer.style.display = "none"; // Cache le code
  }
}

// Appel de la fonction pour afficher ou masquer le code dans le div spécifié
toggleCodeVisibility('code16');
