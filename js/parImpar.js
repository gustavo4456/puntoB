// Ejemplo2
const btnParImpar = document.getElementById("btnParImpar");
const numParImpar = document.getElementById("numParImpar");

// Respuesta ejemplo 2
const ejemplo2 = document.getElementById("ejemplo2");
const pEjemplo2 = document.createElement("b");

// ejemplo2
let parImpar = (numero) => {
  if (numero === 0) {
    return "Par";
  } else if (numero === 1) {
    return "Impar";
  } else {
    return parImpar(numero - 2);
  }
};

// Respuesta ejemplo 2
const resultadoEjemplo2 = () => {
  if (parseInt(numParImpar.value) >= 0) {
    pEjemplo2.style.color = "green";
    pEjemplo2.innerHTML = parImpar(parseInt(numParImpar.value));
    ejemplo2.appendChild(pEjemplo2);
  } else {
    pEjemplo2.style.color = "red";
    pEjemplo2.innerHTML = "Ingrese valores positivo.";
    ejemplo2.appendChild(pEjemplo2);
  }
};

// evento del boton del ejemplo 2
btnParImpar.addEventListener("click", function () {
  resultadoEjemplo2();
});
