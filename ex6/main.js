// tableau des constantes des 9 carrés et de l'espace qui affichera à qui est le tour
const carres = document.querySelectorAll('.square');
const msgTour = document.querySelector('.tour');


// pour chaque carré, ajouter un ecouteur d'évènement et la fonction play en fonction de (item)
carres.forEach(item => {
    item.addEventListener('click', function(){
        play(item);
    })
    //par défaut l'état du carré est "faux"
    item.statue=false;
})

var countClicker=0; //compte le tour du jeu
var tourJoueur="X"; //element du premier joueur
msgTour.innerHTML="C'est le tour de "+tourJoueur; //affiche à qui est le tour

//en fonction du carré qui a été cliqué, ajoute l'élément html
function play(square) {
    //si l'état du carré n'a pas été changé
    if(square.statue==false){
    
        //si le tour est impair ou pair
        if (countClicker %2==1){
            var element="<i class='fa-regular fa-circle'></i>";
            var tourJoueur="X";
        } else if (countClicker % 2==0){
            var element="<i class='fa-solid fa-x'></i>";
            var tourJoueur="O";
        }  

        square.innerHTML=element; //affiche l'element sur le carré
        countClicker++; //compte le tour
        msgTour.innerHTML="C'est le tour de "+tourJoueur; //affiche à qui est le tour

        //je change le statut du carré pour qu'il ne puisse plus etre modifié
        square.statue= true;
    } 

    if(countClicker == 9){
        msgTour.innerHTML="Partie finie!"
    }
} 
