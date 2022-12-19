function HTMLCard(action) {
  const htmlCard = document.getElementById("html");
  const cssCard = document.getElementById("css");
  const jsCard = document.getElementById("js");

  // Condicional si el botón pulsado es de abrir o cerrar
  if (action == "open") {
    
    // Oculta la tarjeta de CSS y JS
    cssCard.className =
      "h-32 hidden justify-between rounded-md items-center flex px-1 bg-zinc-600";
    jsCard.className =
      "h-32 hidden justify-between rounded-md items-center flex px-1 bg-zinc-600";

    // Expande la tarjeta de HTML y le cambia el texto interior
    htmlCard.className =
      "h-32 justify-between rounded-md items-center flex px-1 bg-zinc-600";
    htmlCard.children[0].innerHTML =
      "Amplio conocimiento de los diferentes elementos y tags de HTML.";

    // Esconde el botón de más y muestra el de cerrar
    htmlCard.children[1].className = "hidden";
    htmlCard.children[2].className =
      "h-8 hover:bg-zinc-800 group transition rounded-md w-8 bg-zinc-400 text-black";
  } else if (action == "close") {
    // Muestra las tarjetas de CSS y JS
    cssCard.className =
      "h-10 justify-between rounded-md items-center flex px-1 bg-zinc-600";
    jsCard.className =
      "h-10 justify-between rounded-md items-center flex px-1 bg-zinc-600";

    // Devuelve la tarjeta de HTML a su tamaño original y le pone el texto HTML al objeto <p></p>
    htmlCard.className =
      "h-10 justify-between rounded-md items-center flex px-1 bg-zinc-600";
    htmlCard.children[0].innerHTML = "HTML";

    // Esconde el botón de menos y muestra el de abrir
    htmlCard.children[2].className = "hidden";
    htmlCard.children[1].className =
      "h-8 hover:bg-zinc-800 group transition rounded-md w-8 bg-zinc-400 text-black";
  }
}

// Las siguientes funciones son iguales a la anterior pero cambia el elemento a esconder y expandir.

function CSSCard(action) {
  const htmlCard = document.getElementById("html");
  const cssCard = document.getElementById("css");
  const jsCard = document.getElementById("js");
  if (action == "open") {
    htmlCard.className =
      "h-32 hidden justify-between rounded-md items-center flex px-1 bg-zinc-600";
    jsCard.className =
      "h-32 hidden justify-between rounded-md items-center flex px-1 bg-zinc-600";
    cssCard.className =
      "h-32 justify-between rounded-md items-center flex px-1 bg-zinc-600";
    cssCard.children[0].innerHTML =
      "Buen manejo de las hojas de estilo en cascada para lograr una web moderna y visualmente atractiva.";
    cssCard.children[1].className = "hidden";
    cssCard.children[2].className =
      "h-8 hover:bg-zinc-800 group transition rounded-md w-8 bg-zinc-400 text-black";
  } else if (action == "close") {
    htmlCard.className =
      "h-10 justify-between rounded-md items-center flex px-1 bg-zinc-600";
    jsCard.className =
      "h-10 justify-between rounded-md items-center flex px-1 bg-zinc-600";
    cssCard.className =
      "h-10 justify-between rounded-md items-center flex px-1 bg-zinc-600";
    cssCard.children[0].innerHTML = "CSS";
    cssCard.children[2].className = "hidden";
    cssCard.children[1].className =
      "h-8 hover:bg-zinc-800 group transition rounded-md w-8 bg-zinc-400 text-black";
  }
}
function JSCard(action) {
  const htmlCard = document.getElementById("html");
  const cssCard = document.getElementById("css");
  const jsCard = document.getElementById("js");

  if (action == "open") {
    cssCard.className =
      "h-32 hidden justify-between rounded-md items-center flex px-1 bg-zinc-600";
    htmlCard.className =
      "h-32 hidden justify-between rounded-md items-center flex px-1 bg-zinc-600";

    jsCard.className =
      "h-32 justify-between rounded-md items-center flex px-1 bg-zinc-600";
    jsCard.children[0].innerHTML =
      "Manejo fluido y proactivo en el uso de JavaScript para lograr WebApps con funcionalidad como la carga dinámica de contenido o el server-side rendering en frameworks como ReactJS y NextJS";

    jsCard.children[1].className = "hidden";
    jsCard.children[2].className =
      "h-8 hover:bg-zinc-800 group transition rounded-md w-8 bg-zinc-400 text-black";
  } else if (action == "close") {
    cssCard.className =
      "h-10 justify-between rounded-md items-center flex px-1 bg-zinc-600";
    htmlCard.className =
      "h-10 justify-between rounded-md items-center flex px-1 bg-zinc-600";
    jsCard.className =
      "h-10 justify-between rounded-md items-center flex px-1 bg-zinc-600";
    jsCard.children[0].innerHTML = "JavaScript";
    jsCard.children[2].className = "hidden";
    jsCard.children[1].className =
      "h-8 hover:bg-zinc-800 group transition rounded-md w-8 bg-zinc-400 text-black";
  }
}
