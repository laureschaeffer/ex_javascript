
// constantes des quatres carrés
const carres = document.querySelectorAll('.square');



// carres.forEach(item => {
//     item.addEventListener('click', function(){
//         changeColor(item);
// })})



function changeColor(square){

    const squareStyle = window.getComputedStyle(square); //informations du carré
    squareColor=squareStyle.getPropertyValue("background-color");

    const secondSquare = document.querySelector('.second-square'); //carré du bas
    const codeCouleur = document.querySelector('#code-couleur'); //texte dans le carré

    secondSquare.style.backgroundColor = squareColor; //changer la couleur du carré du bas
    codeCouleur.innerHTML=squareColor; //afficher ce code couleur

}


