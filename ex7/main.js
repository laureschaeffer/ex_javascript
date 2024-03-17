// constante container des carrés 

const squareContainer = document.querySelector('#squares');


// a l'evenement keydown(touche pressée), event cherche quelle touche a été pressée; si c'est celle du bas, crée un carré
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowDown") {
        showSquare();
    } 
})

// crée un carré
function showSquare(){

    //crée une couleur aléatoirement
    //source https://css-tricks.com/snippets/javascript/random-hex-color/
    var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    var randomColor = "#" + randomColor1
    console.log(randomColor)

    //crée une nouvelle div
    var newSquare = document.createElement('div')
    newSquare.classList.add('square') //ajoute la class='square'
    newSquare.innerHTML= '<p> </p>' //ajoute un paragraphe

    newSquare.style.backgroundColor = randomColor; //changer le backgroundcolor du carré avec une couleur aléatoire

    //affiche ce carré sur le DOM
    squareContainer.appendChild(newSquare)

    //si la touche du bas est pressée, supprime le dernier carré
    document.addEventListener("keydown", function(event){
        if (event.key === "ArrowUp"){
            deleteSquare(newSquare)
        }

    })

}

//supprimer le carré
function deleteSquare(newSquare){
    newSquare.remove()
}

//tableau de tous les carrés
const squares = document.querySelectorAll('.square')
//pour chaque carré ajouter un écouteur d'événement qui le change en noir
squares.forEach(item => {
    item.addEventListener('click', function(){
        squareBlack(item);
})})


function squareBlack(square) {
    square.style.backgroundColor= "black"
}