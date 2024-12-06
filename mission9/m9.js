function resultat(){

var correctAnswers = {

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

var correctCount = 0;

for (var question in correctAnswers) {

    var radios = document.getElementsByName(question);

    for (var i = 0; i < radios.length; i++) {

        if(radios[i].checked && radios[i].value === correctAnswers[question]) {
            correctCount++;
        }


    }

}

document.getElementById('affichage').value = correctCount;
}



function reinitialiser(){

var Radiogroupe = document.getElementsByName("question1");



for (var i=0; i < Radiogroupe.length; i++) {

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

                                        window.location.href="correction.html";



                                    }

                                    function reinitialisationtotale(){

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
                                        




                                        
                                        for (var i=0; i < Radiogroupe1.length; i++) {
                                        
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
