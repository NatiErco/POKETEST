// LOGICA DE RESET GAME

resetButton.addEventListener("click", resetGame);

function resetGame() {
  gameBoard.innerHTML = ""; // Elimina todas las cartas del tablero
  flippedCards = []; // Vaciamos el array de cartas volteadas
  lockBoard = false; // Desbloqueamos el tablero

   // Ocultar mensaje de "Ganaste"
   document.getElementById("winMessage").classList.remove("show");


  let resetCard = [...pokemonImages, ...pokemonImages].sort(() => Math.random() - 0.5);

  resetCard.forEach((image) => {
    const card = document.createElement("div");
    card.classList.add("col");

    card.innerHTML = `
          <div class="card p-2 position-relative" onclick=flipCard(this)>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" class="img-fluid front" alt="dorso">
            <img src="${image}" class="img-fluid back d-none" alt="pokemon">
          </div>
        `;

    gameBoard.appendChild(card);
  });
}
