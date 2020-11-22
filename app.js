// document.getElementById('#menuXL').classList.add("hidden");



function ocultar() {
    document.getElementById("menuXL").classList.toggle("hidden");
}

document.getElementById("mostrar").onclick = function() {
    ocultar();

}