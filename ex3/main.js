// constantes des quatres carrés
const carres = document.querySelectorAll('.square');


carres.forEach(item => {
    item.addEventListener('click', function(){
        changeSquare(item);
})})


function changeSquare(square) {
    square.classList.toggle("squareRed");
  }

// function changeSize(square) {
//     clickCounter++;
//     if (clickCounter %2==1){ //premier clic, on applique un changement
//         square.style.height = "180px";
//         square.style.width = "180px";
//         square.style.backgroundColor="#aa716c";

//         //rotation



//     }
//     else if (clickCounter % 2==0){ //second clic, on retourne à la disposition initiale
//         square.style.height = "200px";
//         square.style.width = "200px";
//         square.style.backgroundColor="#8dae87";

//         //rotation
//     }

//  }
