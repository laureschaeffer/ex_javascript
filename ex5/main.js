var quotes={
    "Serge Karamazov":"Barrez vous **** de mimes. \t",
    "Georges Abitbol":"Le train de tes injure roule sur le rail de mon indifférence. ",
    "Hubert Bonnisseur de la Bath":"Ca ne prenait pas beaucoup plus de temps. ",
    "Moulinier":"L'habit ne fait pas le moine, mais il fait l'agent... Même non titularisé. ",
    "Orson Welles":"C'est du vol et du plagiat. J'aime pas trop les voleurs et... ",
};


function createElement(element) {
    // nouvelle div
    const newDiv = document.createElement("div");
    // ajouter 'element' qui contient l'auteur et sa citation
    const newContent = document.createTextNode(element);
    // ajouter cet élément dans la div
    newDiv.appendChild(newContent);
    // aajouter le tout dans le DOM avant la fin du body
    const script = document.querySelector('script');
    document.body.insertBefore(newDiv, script);

    //boutons favoris
    button = document.createElement('i');
    button.setAttribute('class', 'fa-regular fa-heart'); //bouton coeur vide
    newDiv.appendChild(button);

    //boutons favoris sélectionnés
    button.addEventListener('click', function(){
      addToFav(element);
    })



    function addToFav(element){
      localStorage.setItem(element, element); //ajouter au localstorage
      button.className ="fa-solid fa-heart"; //bouton coeur rempli
      newDiv.appendChild(button);

      const stock = localStorage.getItem(element); //chercher la valeur

      if (stock){
        console.log("ajouté");
        button.className ="fa-solid fa-heart"; //bouton coeur rempli
        newDiv.appendChild(button);
 
       } else{
        localStorage.removeItem(element)
        console.log("retiré")
       }
    }

    }


for (const [auteur, citation] of Object.entries(quotes)) {
    createElement(`"${citation}" ${auteur}`);
    
  }

// var tailleTab = Object.keys(quotes).length ; nombre de clés d'un tableau associatif



