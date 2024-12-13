function resultat(){
// On crée une variable correctAnswers, elle contient les réponses correctes pour chaque question.
var correctAnswers = {
// Chaque "question" est une clé et la valeur associée est la bonne réponse pour cette question.
question1: "oui",
question2: "oui",
question3: "oui",
question4: "non",
question5: "oui",
question6: "oui",
question7: "oui",
question8: "oui",
question9: "oui",
question10: "oui"
};

// On initialise une variable qui compte les bonnes réponses aux questions que l'élève aura données.
var correctCount = 0;
// Cette boucle for crée une variable question qui va prendre en compte chaque clés ( question 1, question 2..) et parcourir chacune.
for (var question in correctAnswers) {

    // Permet de récupérer tous les boutons radio qui appartiennent à une question (= groupe ou encore clés de valeur ).

    var radios = document.getElementsByName(question);

    // Cette boucle va initialiser la variable i qui correspond a chaque bouton donc elle a une valeur de 0 au début et ensuite elle parcourra chaque bouton tant qu'elle est inférieur au nombre de bouton existant et dans un dernier temps elle avancer de 1 en 1.
    for (var i = 0; i < radios.length; i++) {

        // Ce if verifie a chaque i (donc bouton) si elle est checker et verifie si sa valeur coché correspond ( avec la double égalité ) si elle correspond a la valeur associé a la clés qu'on verifie dans la varaible question.
        // Donc le correctCount++ augemente d'une valeur de 1 pour chaque bonne réponse.
        if(radios[i].checked && radios[i].value === correctAnswers[question]) {
            correctCount++;
        }


    }

}
// Il affiche le total des bonnes réponses cumulées dans le input avec l'élement ID 'affichage'.
document.getElementById('affichage').value = correctCount;
}



function reinitialiser1(){

    // Cette variable qu'on a nommé 'Radiogroupe' va fairer ce qu'on appelle un getter c'est a dire récuperer les boutons correspondant a groupe concerné.

    var Radiogroupe = document.getElementsByName("question1");
    
    
    // Cette boucle va initialiser la variable i qui correspond a chaque bouton donc elle a une valeur de 0 au début et ensuite elle parcourra chaque bouton tant qu'elle est inférieur au nombre de bouton existant et dans un dernier temps elle avancer de 1 en 1.
    for (var i=0; i < Radiogroupe.length; i++) {
    // Il va considérer que chaque bouton qu'il est non selectionner par le faux qui est le comportement booleen du bouton type radio.
        Radiogroupe[i].checked = false;
    
    
    }
    
    
    
    
    }

function reinitialiser2(){

    var Radiogroupe = document.getElementsByName("question2");
    
    
    
    for (var i=0; i < Radiogroupe.length; i++) {
    
        Radiogroupe[i].checked = false;
    
    
    }
    
    
    
    
    }

    function reinitialiser3(){

        var Radiogroupe = document.getElementsByName("question3");
        
        
        
        for (var i=0; i < Radiogroupe.length; i++) {
        
            Radiogroupe[i].checked = false;
        
        
        }
        
        
        
        
        }

        function reinitialiser4(){

            var Radiogroupe = document.getElementsByName("question4");
            
            
            
            for (var i=0; i < Radiogroupe.length; i++) {
            
                Radiogroupe[i].checked = false;
            
            
            }
            
            
            
            
            }

            function reinitialiser5(){

                var Radiogroupe = document.getElementsByName("question5");
                
                
                
                for (var i=0; i < Radiogroupe.length; i++) {
                
                    Radiogroupe[i].checked = false;
                
                
                }
                
                
                
                
                }

                function reinitialiser6(){

                    var Radiogroupe = document.getElementsByName("question6");
                    
                    
                    
                    for (var i=0; i < Radiogroupe.length; i++) {
                    
                        Radiogroupe[i].checked = false;
                    
                    
                    }
                    
                    
                    
                    
                    }

                    function reinitialiser7(){

                        var Radiogroupe = document.getElementsByName("question7");
                        
                        
                        
                        for (var i=0; i < Radiogroupe.length; i++) {
                        
                            Radiogroupe[i].checked = false;
                        
                        
                        }
                        
                        
                        
                        
                        }

                        function reinitialiser(){

                            var Radiogroupe = document.getElementsByName("question8");
                            
                            
                            
                            for (var i=0; i < Radiogroupe.length; i++) {
                            
                                Radiogroupe[i].checked = false;
                            
                            
                            }
                            
                            
                            
                            
                            }

                            function reinitialiser9(){

                                var Radiogroupe = document.getElementsByName("question9");
                                
                                
                                
                                for (var i=0; i < Radiogroupe.length; i++) {
                                
                                    Radiogroupe[i].checked = false;
                                
                                
                                }
                                
                                
                                
                                
                                }

                                function reinitialiser10(){

                                    var Radiogroupe = document.getElementsByName("question10");
                                    
                                    
                                    
                                    for (var i=0; i < Radiogroupe.length; i++) {
                                    
                                        Radiogroupe[i].checked = false;
                                    
                                    
                                    }
                                    
                                    
                                    
                                    
                                    }

                                    function correction(){
                                        // Permet d'ouvrir une page de corretion correspodant au bonne réponses du questionnaire.

                                        window.location.href="correction.html";



                                    }

                                    function reinitialisationtotale(){

                                        // Cette variable qu'on a nommé 'Radiogroupe' va faire ce qu'on appelle un getter c'est a dire récuperer les boutons correspondant a groupe concerné.

                                        var Radiogroupe1 = document.getElementsByName("question1");
                                        var Radiogroupe2 = document.getElementsByName("question2");
                                        var Radiogroupe3 = document.getElementsByName("question3");
                                        var Radiogroupe4 = document.getElementsByName("question4");
                                        var Radiogroupe5 = document.getElementsByName("question5");
                                        var Radiogroupe6 = document.getElementsByName("question6");
                                        var Radiogroupe7 = document.getElementsByName("question7");
                                        var Radiogroupe8 = document.getElementsByName("question8");
                                        var Radiogroupe9 = document.getElementsByName("question9");
                                        var Radiogroupe10 = document.getElementsByName("question10");
                                        




                                         // Cette boucle va initialiser la variable i qui correspond a chaque bouton donc elle a une valeur de 0 au début et ensuite elle parcourra chaque bouton tant qu'elle est inférieur au nombre de bouton existant et dans un dernier temps elle avancer de 1 en 1.
                                        for (var i=0; i < Radiogroupe1.length; i++) {
                                        // Il va considérer que chaque bouton qu'il est non selectionner par le faux qui est le comportement booleen du bouton type radio.
                                            Radiogroupe1[i].checked = false;
                                        
                                        
                                        }

                                        for (var i=0; i < Radiogroupe2.length; i++) {
                                        
                                            Radiogroupe2[i].checked = false;
                                        
                                        
                                        }

                                        for (var i=0; i < Radiogroupe3.length; i++) {
                                        
                                            Radiogroupe3[i].checked = false;
                                        
                                        
                                        }
                                    

                                        for (var i=0; i < Radiogroupe4.length; i++) {
                                        
                                            Radiogroupe4[i].checked = false;
                                        
                                        
                                        }

                                        for (var i=0; i < Radiogroupe5.length; i++) {
                                        
                                            Radiogroupe5[i].checked = false;
                                        
                                        
                                        }

                                        for (var i=0; i < Radiogroupe6.length; i++) {
                                        
                                            Radiogroupe6[i].checked = false;
                                        
                                        
                                        }

                                        for (var i=0; i < Radiogroupe7.length; i++) {
                                        
                                            Radiogroupe7[i].checked = false;
                                        
                                        
                                        }

                                        for (var i=0; i < Radiogroupe8.length; i++) {
                                        
                                            Radiogroupe8[i].checked = false;
                                        
                                        
                                        }

                                        for (var i=0; i < Radiogroupe9.length; i++) {
                                        
                                            Radiogroupe9[i].checked = false;
                                        
                                        
                                        }

                                        for (var i=0; i < Radiogroupe10.length; i++) {
                                        
                                            Radiogroupe10[i].checked = false;
                                        
                                        
                                        }

                                    }

                                    function retouracceuil(){

                                        // Dans la page de correction elle permet de retourner en appellant cette fonction avec le 'button' de retourner sur la page principale qui est le questionnaire.

                                        window.location.href="index.html";
                                    }