var quotes=[
  {
    "id": 1,
    "author": "Serge Karamazov",
    "content": "Barrez vous **** de mimes."
  },
  {
    "id": 2,
    "author": "Georges Abitbol",
    "content": "Le train de tes injure roule sur le rail de mon indifférence. "
  },
  {
    "id": 3,
    "author":"Hubert Bonnisseur de la Bath",
    "content": "Ca ne prenait pas beaucoup plus de temps. "
  },
  {
    "id": 4,
    "author": "Moulinier",
    "content": "L'habit ne fait pas le moine, mais il fait l'agent... Même non titularisé. "
  },
  {
    "id": 5,
    "author": "Orson Welles",
    "content": "C'est du vol et du plagiat. J'aime pas trop les voleurs et... "
  }
];


let favoriteQuotes = JSON.parse(localStorage.getItem('favoriteQuotes')) || [];

const quoteContainer= document.querySelector('#quoteContainer')

//afficher les citations
quotes.forEach(quote => {
  let quoteDiv = document.createElement('div');
  quoteDiv.classList.add('quote');

  quoteDiv.innerHTML =
  `<div class='quote-text'>
    <p class='content'> ${quote.content} </p>
  </div>
  <div class='quote-author'>
    <p>- ${quote.author} </p>
  </div>
  <div class='heart' data-id='${quote.id}'>
    <i class='${favoriteQuotes.includes(quote.id) ? "fa-solid active" : "fa-regular"} fa-heart' tittle='Add favorite'></i>
  </div> `; // cherche dans le tableau favoris si l'id y est; si oui, il change la classe en coeur plein
  quoteContainer.appendChild(quoteDiv);

  //ecouteur d'événement sur le coeur
  const heartIcon = quoteDiv.querySelector('.heart');
  heartIcon.addEventListener('click', function(){
    toggleFavorite(quote.id)
  })

})


function toggleFavorite(quoteId){
  const heartIcon = document.querySelector(`.heart[data-id='${quoteId}'] i`); // récupère le coeur dont l'id est récupéré en paramètre

  if (favoriteQuotes.includes(quoteId)) {
    favoriteQuotes = favoriteQuotes.filter(id => id !== quoteId); //crée un tableau où on retire la citation dont l'id est passé en paramètre
    heartIcon.classList.remove('fa-solid');
    heartIcon.classList.add('fa-regular');
    heartIcon.classList.remove('active');
  } else {
    favoriteQuotes.push(quoteId); //ajoute l'id aux favoris
    heartIcon.classList.add('fa-solid');
    heartIcon.classList.remove('fa-regular');
    heartIcon.classList.add('active')
  }
// mettre à jour le localStorage
  localStorage.setItem('favoriteQuotes', JSON.stringify(favoriteQuotes));
}
