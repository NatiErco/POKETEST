const gameBoard = document.getElementById("game-board");
const resetButton = document.getElementById("reset-btn");

// creo que el array con las imagenes de los pokemon
const pokemonImages = [
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", // Bulbasaur
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", // Charmander
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", // Squirtle
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png", // Pikachu
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png", // Jigglypuff
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png", // Meowth
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png", // Psyduck
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png", // Snorlax
];

// Duplicamos las imágenes para hacer pares 
let card = [...pokemonImages, ...pokemonImages];

// sort ordena los elementos de forma aleatoria cada vez que el juego inicia.
card = card.sort(() => Math.random() - 0.5);

// Insertar las cartas en el HTML

card.forEach((image) => {
  // se recorre cada elemento del array, image representa cada elemento dentro de cards en cada iteración.

  const card = document.createElement("div"); //crea un div para cada carta.
  card.classList.add("col"); // usa bostramp  para que las cartas se acomoden en la grilla

  // Inserta contenido HTML con la Pokébola al frente y el Pokémon detrás

  card.innerHTML = `
        <div class="card p-1 position-relative" onclick=flipCard(this)>
            <img src="https://tse2.mm.bing.net/th?id=OIP.hUl-bDTG1mfq3FIIj_oRmQHaHa&pid=Api" class="img-fluid front" alt="dorso">
            <img src="${image}" class="img-fluid back d-none" alt="pokemon">
        </div>
    `;
  gameBoard.appendChild(card); //Agrega la card al contenedor con id="game-board" en el HTML.
});