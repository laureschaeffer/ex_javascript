var quotes={
    "Serge Karamazov":"Barrez vous **** de mimes. \t",
    "Georges Abitbol":"Le train de tes injure roule sur le rail de mon indifférence. ",
    "Hubert Bonnisseur de la Bath":"Ca ne prenait pas beaucoup plus de temps. ",
    "Moulinier":"L'habit ne fait pas le moine, mais il fait l'agent... Même non titularisé. ",
    "Orson Welles":"C'est du vol et du plagiat. J'aime pas trop les voleurs et... ",
};




function createElement(element) {
    // create a new div element
    const newDiv = document.createElement("div");

    // and give it some content

    const newContent = document.createTextNode(element);
    

    // add the text node to the newly created div
    newDiv.appendChild(newContent);

  
    // add the newly created element and its content into the DOM
    const citations = document.querySelector('script');
    document.body.insertBefore(newDiv, citations);


    //boutons favoris 
    const createButton= document.createElement('button');
    createButton.innerText= 'Favoris';
    newDiv.appendChild(createButton);

    // stock des favoris dans localStorage
    createButton.addEventListener('click', function(){
        localStorage.setItem("A été ajouté aux favoris", element)
      })


  }


for (const [auteur, citation] of Object.entries(quotes)) {
    createElement(`"${citation}" ${auteur}`);
    
  }



//     for(quote in quotes) {
//         console.log(quotes[quote]) // renvoie valeur
//     }
// var tailleTab = Object.keys(quotes).length ; nombre de clés d'un tableau associatif



