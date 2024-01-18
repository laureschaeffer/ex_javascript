
const btn = document.querySelector('.square'); 
btn.addEventListener('click', showInformation);

function showInformation(){

    informations=["background-color", "color", "width", "height", "Font-size", "font-family"] ; //tableau des infos à mettre dans la fonction squareStyle
    tableauAssoc= ["Background color:", "Color: ", "Width: ", "Height: ", "font-size: ", "Font-family: "]; //tableau des infos à afficher
    const squareStyle = window.getComputedStyle(btn); //avoir toutes les info de style de l'élément
    let afficherInfo= "";
    for (let i=0; i< informations.length; i++){
        informations[i]=squareStyle.getPropertyValue(informations[i]);
        afficherInfo+= `${tableauAssoc[i]} ${informations[i]} \n`;
    }
    alert(afficherInfo)
}