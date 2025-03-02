let listaDeNombres = [];
let input = document.getElementById("amigo");
let lista = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

function agregarAmigo() {
    if (input.value == ""){
        alert("el nombre que ingreso no es valido, por favor vuelva a intentarlo");
        return;
    }
    let nombre = input.value;
    listaDeNombres.push(nombre);
    input.value = "";
    input.focus();
    lista.innerHTML = "";
    for (let i = 0; i < listaDeNombres.length; i++) {
        let añadirAmigo = document.createElement("li")
        añadirAmigo.textContent = listaDeNombres[i];
        lista.appendChild(añadirAmigo);
    }
}

function sortearAmigo() {
    let nombreSorteado = parseInt(Math.random()*listaDeNombres.length);
    let resultadoSorteo = document.createElement("li")
    resultadoSorteo.textContent = `el amigo secreto es: ${listaDeNombres[nombreSorteado]}`;
    resultado.appendChild(resultadoSorteo);
}