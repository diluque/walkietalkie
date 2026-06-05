/*
const boton = document.getElementById("ptt");

boton.addEventListener("click", () => {
    alert("Transmitiendo....");
});
*/

const boton = document.getElementById("ptt");
const aviso = document.getElementById("aviso");

boton.addEventListener("click", () => {

    aviso.style.display = "block";

    setTimeout(() => {
        aviso.style.display = "none";
    }, 1000);

});
