function mostrarMenu() {
  var menu = document.getElementById("items-menu");
  menu.classList.add("open");
}
function cerrarMenu() {
  var menu = document.getElementById("items-menu");
  menu.classList.remove("open");
}

function mensajeEnviar() {
  var bt = document.getElementById("bt-enviar");

  alert("Su mensaje se ha enviado.");
}

function myFocusFunction() {
  document.getElementById("enlace").style.color = "purple";
}

function dobleClick() {
  document.getElementById("td-morado").style.backgroundColor =
    "rgb(211, 222, 247)";
  document.getElementById("td-verde").style.backgroundColor =
    " rgb(232, 250, 226)";
  document.getElementById("td-rosa").style.backgroundColor =
    " rgb(250, 226, 248)";
}

var input = document.getElementById("buscador");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();

    document.getElementById("buscador").click();
  }
});
