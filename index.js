const cards = document.querySelector('.cards');

for (let i = 1; i <= 100; i++){
  getPokemon(i).then(pokemon => {
    var card = document.createElement('div');
    var cardTitle = document.createElement('div');
    var cardImg = document.createElement('div');
    var cardTypes = document.createElement('div');
    var title = document.createElement('h1');
    var img = document.createElement('img');

    img.classList.add('img');
    img.setAttribute('src', `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`)

    title.innerHTML = pokemon.name;
    setClass(['font', 'title'], title);

    cardTitle.classList.add('card-title');
    cardTitle.classList.add(pokemon.types[0].type.name);

    
    cardImg.classList.add('card-img');
    cardImg.appendChild(img);

    cardTypes.classList.add('card-types');
    cardTypes.classList.add(pokemon.types[0].type.name);
    setType(pokemon.types, cardTypes);

    card.appendChild(cardTitle);
    card.appendChild(cardImg);
    card.appendChild(cardTypes);
    card.classList.add('card');

    cardTitle.appendChild(title);

    cards.appendChild(card);
  })
}

function getPokemon(id){
  let url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  return fetch(url)
          .then(response => response.json())
}

function setType(types, element) {
  if (Array.isArray(types)) {
    types.forEach((type) => {
      var elSpan = document.createElement('span');
      elSpan.innerHTML = type.type.name;
      setClass(['type', 'font', type.type.name], elSpan);

      element.appendChild(elSpan);
    });
  }
}

function setClass(list, element) {
  list.forEach((c) =>{
    element.classList.add(c);
  });
}
