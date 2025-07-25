
function cambioDeDolar(montoDolares) {
  if (isNaN(montoDolares) || typeof montoDolares !== 'number' || montoDolares === null) {
    return " Por favor ingresa un número válido";
  } else {
    let resultadoNumerico = (parseFloat(montoDolares) * 745);
    return resultadoNumerico.toLocaleString('es-CL',{
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }
}
// mostrar en consola el cálculo de conversión con mi función
console.log(cambioDeDolar(200));


//Agrego interacción con HTML
function convertirMoneda() {
  //obtengo valores del input del usuario
  const inputDolares = document.getElementById('montoDolares');
  const monto = parseFloat(inputDolares.value);
  const resultadoElemento = document.getElementById('resultado');

  resultadoElemento.classList.remove('error');
  //llamo a la función de conversión
  const resultadoConversion = cambioDeDolar(monto);

  //mostrando el resultado
  if (typeof resultadoConversion === 'string') {
    resultadoElemento.innerHTML = `CLP $${resultadoConversion}`;
  } else {
    resultadoElemento.innerHTML = `CLP $${resultadoConversion}`;
  }

}


// función para postular a subsidio de arriendo
function requisitosBeneficios(edadPostulante, tieneCedulaVigente, ahorroActualUF, es70PorCientoMasVulnerable) {
  if (edadPostulante >= 18 && tieneCedulaVigente && ahorroActualUF >= 4 && es70PorCientoMasVulnerable) {
    return "Cumple con los requisitos para postular al subsidio";
  } else {
    return "No cumple con los requisitos para postular al subsidio";
  }
}

// Caso 1: Una persona que CUMPLE con todos los requisitos
console.log(requisitosBeneficios(25, true, 5, true));

// Caso 2: No cumple por la edad (menor de 18)
console.log(requisitosBeneficios(17, true, 5, true));

// Caso 3: No cumple por no tener cédula vigente
console.log(requisitosBeneficios(30, false, 5, true));

// Caso 4: No cumple por el ahorro (menos de 4 UF)
console.log(requisitosBeneficios(40, true, 3.5, true));

// Caso 5: No cumple por la vulnerabilidad
console.log(requisitosBeneficios(22, true, 4, false));

// Caso 6: No cumple por múltiples razones
console.log(requisitosBeneficios(16, false, 2, false));


// Agrego interacción con HTML
function evaluarSubsidio() {
  // obtengo los elementos del DOM
  const inputEdadElement = document.getElementById('edad');
  const inputCedulaElement = document.getElementById('cedulaVigente');
  const inputAhorroElement = document.getElementById('ahorroUF');
  const inputVulnerabilidadElement = document.getElementById('vulnerabilidad');
  const resultadoSubsidioElemento = document.getElementById('resultadoSubsidio');

  resultadoSubsidioElemento.classList.remove('error');
  resultadoSubsidioElemento.style.color = '#16903f';

  const edad = parseInt(inputEdadElement.value);
  const cedulaVigente = inputCedulaElement.value === "true";
  const ahorro = parseFloat(inputAhorroElement.value);
  const vulnerabilidad = inputVulnerabilidadElement.value === "true";

  if (isNaN(edad) || edad < 18) {
    resultadoSubsidioElemento.textContent = "Error: La edad debe ser un número válido y mayor o igual a 18.";
    resultadoSubsidioElemento.classList.add('error');
    resultadoSubsidioElemento.style.color = '#dc3545'; 
    return; 
  }

  if (isNaN(ahorro) || ahorro < 0) {
    resultadoSubsidioElemento.textContent = "Error: El ahorro debe ser un número válido (0 o más).";
    resultadoSubsidioElemento.classList.add('error');
    resultadoSubsidioElemento.style.color = '#dc3545'; 
    return;
  }

  const resultadoEvaluacion = requisitosBeneficios(edad, cedulaVigente, ahorro, vulnerabilidad);

  resultadoSubsidioElemento.textContent = resultadoEvaluacion;

  if (resultadoEvaluacion.includes("No cumple")) {
    resultadoSubsidioElemento.classList.add('error');
    resultadoSubsidioElemento.style.color = '#dc3545';
  } else {
    resultadoSubsidioElemento.classList.remove('error');
    resultadoSubsidioElemento.style.color = '#16903f';
  }
}