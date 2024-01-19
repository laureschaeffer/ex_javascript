var quotes={
    "Serge Karamazov":"Barrez vous **** de mimes.",
    "Georges Abitbol":"Le train de tes injure roule sur le rail de mon indifférence.",
    "Hubert Bonnisseur de la Bath":"Ca ne prenait pas beaucoup plus de temps.",
    "Moulinier":"L'habit ne fait pas le moine, mais il fait l'agent... Même non titularisé.",
    "Orson Welles":"C'est du vol et du plagiat. J'aime pas trop les voleurs et..."
}
var tailleTab = Object.keys(quotes).length ;// nombre de clés d'un tableau associatif

for (let i=0 ; i < tailleTab ; i++){
    createElement()
}


function createElement() {
    // create a new div element
    const newDiv = document.createElement("div");

    // and give it some content

    const newContent = document.createTextNode(tailleTab);
    

    // add the text node to the newly created div
    newDiv.appendChild(newContent);
  
    // add the newly created element and its content into the DOM
    const citations = document.querySelector('#citations');
    document.body.insertBefore(newDiv, citations);
  }





// function afficherCitation(){

//     const newCitation = textCitation.cloneNode(true);
    

    

//     for(quote in quotes) {
//         console.log(quotes[quote]) // renvoie valeur
//     }

//     for (const [auteur, citation] of Object.entries(quotes)) {
//         result+=(` "${citation}" \n ${auteur} \n \n`);
//       }
    
    
// }


// const textCitation = document.querySelector('.card-citation');
