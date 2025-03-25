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



// --------------------------------------------------------------------------------------------------------------------                  FUNCIONALIDAD PARA USAR EL BOTON DE MODO CLARO A MODO OSCURO MANUALMENTE: -----------------------------------------------------------------------------------------------------------------------

// Primero busco el elemento con el id "" en mi html y lo almaceno en una variable

const modoOscuroBtn = document.getElementById("modoOscuroBtn");

// Este if es importante, porque cuando el usuario refresque la pagina, no tendra que volver a cambiar a luna o sol sino que se almacena la info en localstorage.

if (localStorage.getItem("modoOscuro") === "activado") {
  document.body.classList.add("modo-oscuro");
  modoOscuroBtn.innerHTML = "🌙"; // Cambia el icono a sol
} else {
    modoOscuroBtn.innerHTML = "☀️"; // Mostrar luna porque el usuario PUEDE activar el modo oscuro
};


// Funcion al hacer click

// Función para alternar el modo a oscuro y viceversa
// espera a que el usuario haga clic en el botón y ejecuta la funcion dentro de las llaves
modoOscuroBtn.addEventListener("click", () => {
  document.body.classList.toggle("modo-oscuro"); // la agrega si no esta, o la quita si esta.


if (document.body.classList.contains("modo-oscuro")) {
  localStorage.setItem("modoOscuro", "activado");
  modoOscuroBtn.innerHTML = "🌙";
} else {
  localStorage.setItem("modoOscuro", "desactivado");
  modoOscuroBtn.innerHTML = "☀️";
}
});
