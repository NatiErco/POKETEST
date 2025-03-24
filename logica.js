

let flippedCards = []; // Guarda las cartas que el usuario ha volteado
let lockBoard = false; // Evita que el usuario voltee más de 2 cartas al mismo tiempo

// 1️⃣ PASO 1: CREAMOS LA FUNCION DEL VOLTEO DE LAS CARDS

function flipCard(card) {
  // cada carta tiene dos imamgenes, fron y back

  if (lockBoard) return; // no permite mas clicks si ya hay dos volteadas.
  if (flippedCards.includes(card)) return; // Evita que el usuario haga click dos veces en la misma carta

  let front = card.querySelector(".front"); // imagen de la pokebola DORSO
  let back = card.querySelector(".back"); // imagen del pokemon CARA.

  front.classList.add("d-none");
  back.classList.remove("d-none");

  // Guardar la carta volteada en el array para compararlas después.
  flippedCards.push(card);

  // Si hay 2 cartas volteadas, comprobar si son iguales
  if (flippedCards.length === 2) {
    checkForMatch(); //  Esta función se encarga de verificar si las cartas son iguales o no
  }
}

// 2️⃣ PASO 2 : CREAMOS LA FUNCION DE LA COMPARACION DE LAS CARDS

function checkForMatch() {

  lockBoard = true; // Bloqueamos el tablero para que no se volteen más cartas
  let [card1, card2] = flippedCards; 
  let img1 = card1.querySelector(".back").src; // Obtenemos la imagen del Pokémon 1
  let img2 = card2.querySelector(".back").src; // Obtenemos la imagen del Pokémon 2


  if (img1 === img2) {


    // ✅ Son iguales: les agregamos la clase "matched" en css
    card1.classList.add("matched");
    card2.classList.add("matched");

    flippedCards = []; // Vaciamos el array
    lockBoard = false; // Desbloqueamos el tablero

    console.log("Cartas emparejadas:", document.querySelectorAll(".matched").length);


     // ✅ Verificar si todas las cartas están emparejadas para agregar un mensaje de Win!
     if (document.querySelectorAll(".matched").length === pokemonImages.length * 2) {
      setTimeout(() => {
        document.getElementById("winMessage").classList.remove("d-none");
        document.getElementById("winMessage").classList.add("show");
      }, 500); // Espera 0.5 segundos antes de mostrar el mensaje
  }

  } else {
    // ❌ No son iguales: las volteamos de nuevo después de un breve tiempo

    setTimeout(() => {
      card1.querySelector(".front").classList.remove("d-none");
      card1.querySelector(".back").classList.add("d-none");
      card2.querySelector(".front").classList.remove("d-none");
      card2.querySelector(".back").classList.add("d-none");

      flippedCards = []; // Vaciamos el array
      lockBoard = false; // Desbloqueamos el tablero
    }, 1000);
  }
}
