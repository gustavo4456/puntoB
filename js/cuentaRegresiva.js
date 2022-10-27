// Ejemplo 1
const btnCuentaRegresiva = document.getElementById("btnCuentaRegresiva");
const btnCuentaAtras = document.getElementById("btnCuentaAtras");
const btnParar = document.getElementById("btnParar");
const numCuentaAtras = document.getElementById("numContar");
let arrayNumContadosAtras = [];
let arrayNumContadosAtrasBtn2 = [];

let parar = false;

// Respuesta ejemplo 1 btn1
const ejemplo1 = document.getElementById("ejemplo1");
const pEjemplo1 = document.createElement("b");
const pBtn2Ejemplo1 = document.createElement("b");

// Ejemplo 1
let cuentaAtras = (numero) => {
  if (numero >= 0 && numero <= 100) {
    //base case
    if (numero === -1) {
      return 0;
    }
    arrayNumContadosAtras.push(numero);
    cuentaAtras(numero - 1);
    return arrayNumContadosAtras;
  } else {
    return "ERROR EJEMPLO1";
  }
};


// Mostrando la cuenta regresiva
let cuentaRegresivaLoop = function (i) {
  console.log(arrayNumContadosAtrasBtn2[i]);
  pBtn2Ejemplo1.style.color = "green";
  pBtn2Ejemplo1.innerHTML = arrayNumContadosAtrasBtn2[i];
  ejemplo1.appendChild(pBtn2Ejemplo1);
  if (arrayNumContadosAtrasBtn2[i] && parar === false) {
    setTimeout(function () {
      cuentaRegresivaLoop(i + 1);
    }, 1000);
  } else {
    btnCuentaRegresiva.disabled = false;
  }
};

// Respuesta ejemplo 1
const resultadoEjemplo1 = () => {
  console.log(numCuentaAtras.value + " >= " + 0);
  if (numCuentaAtras.value >= 0 && numCuentaAtras.value <= 100) {
    pEjemplo1.style.color = "green";
    pEjemplo1.innerHTML = arrayNumContadosAtras;
    ejemplo1.appendChild(pEjemplo1);
  } else {
    pEjemplo1.style.color = "red";
    pEjemplo1.innerHTML = "Ingrese valores postivos y menores o iguales a 100.";
    ejemplo1.appendChild(pEjemplo1);
  }
};

// evento del boton1 del ejemplo 1
btnCuentaAtras.addEventListener("click", function () {
  cuentaAtras(numCuentaAtras.value);
  resultadoEjemplo1();
  arrayNumContadosAtras = [];
});

// evento del boton2 del ejemplo 1
btnCuentaRegresiva.addEventListener("click", function () {
  if (numCuentaAtras.value >= 0 && numCuentaAtras.value <= 100) {
    btnCuentaRegresiva.disabled = true;
    arrayNumContadosAtrasBtn2 = cuentaAtras(numCuentaAtras.value);
    arrayNumContadosAtras = [];
    parar = false;
    cuentaRegresivaLoop(0);
  } else {
    pEjemplo1.style.color = "red";
    pEjemplo1.innerHTML = "Ingrese valores postivos y menores o iguales a 100.";
    ejemplo1.appendChild(pEjemplo1);
  }
});

btnParar.addEventListener("click", function () {
  parar = true;
  btnCuentaRegresiva.disabled = false;
});
