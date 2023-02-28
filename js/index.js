function HTMLCard(action) {
  const htmlCard = document.getElementById("html");

  // Condicional si el botón pulsado es de abrir o cerrar
  if (action == "open") {
    // Muestra el modal de HTML
    htmlCard.className = "absolute w-screen h-screen";
  } else if (action == "close") {
    // Oculta el modal de HTML
    htmlCard.className = "hidden";
  }
}

function CSSCard(action) {
  const cssCard = document.getElementById("css");
  if (action == "open") {
    // Muestra el modal de HTML
    cssCard.className = "absolute w-screen h-screen";
  } else if (action == "close") {
    // Oculta el modal de HTML
    cssCard.className = "hidden";
  }
}
function JSCard(action) {
  const jsCard = document.getElementById("js");

  if (action == "open") {
    // Muestra el modal de HTML
    jsCard.className = "absolute w-screen h-screen";
  } else if (action == "close") {
    // Oculta el modal de HTML
    jsCard.className = "hidden";
  }
}
