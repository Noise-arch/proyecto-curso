window.onload = function () {
  checkTheme();
};

// Dark Mode

function checkTheme() {
  var theme = window.localStorage.getItem("data-theme");
  const main = document.getElementById("main");
  const buttonOn = document.getElementById("dmSwitchOn");
  const buttonOff = document.getElementById("dmSwitchOff");
  const btnText = document.getElementById("btn-text");

  const htmlButton = document.getElementById("htmlButton");
  const cssButton = document.getElementById("cssButton");
  const jsButton = document.getElementById("jsButton");

  if (theme == "dark") {
    main.className =
      "bg-zinc-800 transition text-white gap-2 relative items-center justify-center p-4 flex flex-col h-1/2 w-full shadow-xl";
    
    buttonOff.className = "p-1 fill-white transition";
    buttonOn.className = "hidden transition";
    btnText.className = "text-white transition";

    if(!htmlButton) return // Ya que algunas páginas no tienen estos elementos, hago un return ya que acá finalizaría la función
    htmlButton.className = "p-4 w-28 hover:text-zinc-800 hover:bg-orange-600 transition font-semibold font-['Lato'] text-orange-600 border-2 border-orange-600 rounded-xl"
    cssButton.className = "p-4 w-28 hover:text-zinc-800 hover:bg-blue-600 transition font-semibold font-['Lato'] text-blue-600 border-2 border-blue-600 rounded-xl"
    jsButton.className = "p-4 w-28 hover:text-zinc-800 hover:bg-yellow-500 transition font-semibold font-['Lato'] text-yellow-500 border-2 border-yellow-500 rounded-xl"

  } else if (theme == "light") {
    main.className =
      "gap-2 relative transition items-center justify-center p-4 flex flex-col h-1/2 w-full shadow-xl";
    buttonOff.className = "hidden transition";
    buttonOn.className = "p-1 fill-black transition";
    btnText.className = "transition";

    if(!htmlButton) return // Ya que algunas páginas no tienen estos elementos, hago un return ya que acá finalizaría la función
    htmlButton.className = "p-4 w-28 hover:text-white hover:bg-zinc-800 transition font-semibold font-['Lato'] bg-orange-600 rounded-xl"
    cssButton.className = "p-4 w-28 hover:text-white hover:bg-zinc-800 transition font-semibold font-['Lato'] bg-blue-600 rounded-xl"
    jsButton.className = "p-4 w-28 hover:text-white hover:bg-zinc-800 transition font-semibold font-['Lato'] bg-yellow-500 rounded-xl"

  }
}

function DarkModeHandler(bool) {
  var theme = window.localStorage.getItem("data-theme");
  if (theme) document.documentElement.setAttribute("data-theme", theme);

  if (bool == true) {


    document.documentElement.setAttribute("data-theme", "dark");
    window.localStorage.setItem("data-theme", "dark");
  } else if (bool == false) {


    document.documentElement.setAttribute("data-theme", "light");
    window.localStorage.setItem("data-theme", "light");
  }
  checkTheme()
}

// Modals
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
    // Muestra el modal de CSS
    cssCard.className = "absolute w-screen h-screen";
  } else if (action == "close") {
    // Oculta el modal de CSS
    cssCard.className = "hidden";
  }
}
function JSCard(action) {
  const jsCard = document.getElementById("js");

  if (action == "open") {
    // Muestra el modal de JavaScript
    jsCard.className = "absolute w-screen h-screen";
  } else if (action == "close") {
    // Oculta el modal de JavaScript
    jsCard.className = "hidden";
  }
}
