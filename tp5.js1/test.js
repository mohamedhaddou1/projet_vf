function testage(){
let age = prompt("qu'elle est votre age ?");
if (age<18)
{
    document.write("Attention accès refusé, vous etes mineur");
    document.body.style.backgroundColor="red";

}
else
{
    document.write("Accès autorisé, vous etes majeurs");
    document.body.style.backgroundColor="green";
}
}


function testcouleur() {

    let couleur = prompt ("Donner une couleur");
    if (couleur =="rouge") {
        document.body.style.backgroundColor="red";
    }
    
    else if (couleur =="bleu") {
        document.body.style.backgroundColor="blue";
    }
    
    else if (couleur =="vert") {
        document.body.style.backgroundColor="green";
    }
    else{
        document.write("Couleur non comprise")
    }
    }
    
    function calculmoyenne() {

        var n1 = prompt ("Donner la premiere note :");
        var n2 = prompt ("Donner la deuxième note :");
        var n3 = prompt ("Donner la troisième note :");
    
        var somme = Number(n1) + Number(n2) + Number(n3);

        document.write("voici la somme: " + somme + "<br>");
        var moyenne = somme/3;

        document.write("Voici la moyenne: " + moyenne + "<br>");

        if(moyenne<10) {
            document.write("refusé");
        }

        else if(moyenne<14) {
            document.write("passable");
        }
        
        else if(moyenne>14) {
            document.write("Admis bien");
        }

    }

    function affichage() {

        let prenom= prompt("Saisir votre prénom");
        let nom= prompt("Saisir votre nom");
        document.write("<div style='border:5px solid blue; width:300px; height:80px; margin:auto; font-size:2em;'>");
        document.write("bonjour" + prenom+" "+nom);
        document.write("</div>");
        
        }
        