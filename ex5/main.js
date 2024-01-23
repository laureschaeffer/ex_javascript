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
    const citations = document.querySelector('script');
    document.body.insertBefore(newDiv, citations);

    //boutons favoris
    createButton = document.createElement('i');
    createButton.setAttribute('class', 'fa-regular fa-heart');
    newDiv.appendChild(createButton);

    
    //boutons favoris sélectionnés
    createButton.addEventListener('click', addToFav())
      // localStorage.setItem("favoris", element)

    function addToFav(){
      let favorisTab={
        favoris: "",
      }
      favorisJSON= JSON.stringify(favorisTab);
      localStorage.setItem(element, favorisJSON);

    }

  }

for (const [auteur, citation] of Object.entries(quotes)) {
    createElement(`"${citation}" ${auteur}`);
    
  }



  // favBtn = document.createElement('i');
  // favBtn.setAttribute('class', 'fa-solid fa-heart');
  // // newDiv.appendChild(favBtn);
  // createButton.classList.toggle("favBtn");

    // stock des favoris dans localStorage
    // function addToFav(){
    //   favBtn = document.createElement('i');
    //   favBtn.setAttribute('class', 'fa-solid fa-heart');
    //   newDiv.appendChild(favBtn);
    //   createButton.classList.toggle("favBtn");
    //   localStorage.setItem("A été ajouté aux favoris", element); //dans les données
    // }


    // css


// var tailleTab = Object.keys(quotes).length ; nombre de clés d'un tableau associatif



