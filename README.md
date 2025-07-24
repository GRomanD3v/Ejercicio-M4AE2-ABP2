## Autor:
- Gonzalo Román Reyes

## Ruta de repositorio: https://github.com/GRomanD3v/Ejercicio-M4AE2-ABP2.git

### Aprendizaje Esperado
Utilizar variables simples y sentencias condicionales para el control del
flujo de un algoritmo que resuelve un problema simple acorde al lenguaje
Javascript

## Ejercicios de M4AE2 ABP2: Construcción de Funciones.
Este documento detalla el proceso paso a paso de cómo se construyeron dos funciones JavaScript para resolver problemas específicos, enfatizando el razonamiento detrás de cada decisión de codificación.

1. # Función cambioDeDolar: Conversor de Moneda
El objetivo era crear una función que convirtiera un monto en dólares a pesos chilenos, con un tipo de cambio fijo de 745 CLP por 1 USD, y que validara que la entrada fuera siempre un número.

### Paso a Paso de la Construcción:

- Definición de la Estructura Básica:

Se inició definiendo la estructura fundamental de una función en JavaScript, incluyendo la palabra clave function, un nombre descriptivo (cambioDeDolar), y los paréntesis para los parámetros.

Se identificó que la función necesitaba recibir el monto en dólares como un parámetro. Se optó por el nombre montoDolares para mayor claridad.

function cambioDeDolar(montoDolares) {
    // Lógica de la función
}

- Implementación de la Lógica de Conversión:

Con el tipo de cambio de 745, la operación necesaria era una simple multiplicación: montoDolares * 745.

Para que la función "entregara" este resultado, se utilizó la palabra clave return.

Se añadió .toFixed(2) al resultado para asegurar que el monto en pesos chilenos se muestre con dos decimales, adecuado para valores monetarios (centavos).

function cambioDeDolar(montoDolares) {
    return (montoDolares * 745).toFixed(2);
}

- Implementación de la Validación de Entrada:

El requerimiento clave era aceptar "solo números". Para esto, se utilizó la función isNaN() (Is Not a Number) que verifica si un valor no es un número.

Se empleó una estructura if/else para controlar el flujo:

Si isNaN(montoDolares) era true (es decir, la entrada no era un número), la función debería devolver un mensaje de error claro como una cadena de texto.

De lo contrario (else), si la entrada era un número, se procedería con la conversión ya definida.

Se añadió una verificación adicional typeof montoDolares !== 'number' para una validación más estricta, asegurando que el valor no solo pudiera ser interpretado como un número (como "100"), sino que fuera explícitamente del tipo number.

function cambioDeDolar(montoDolares) {
  if (isNaN(montoDolares) || typeof montoDolares !== 'number' || montoDolares === null) {
    return "Por favor ingresa un número válido"; // Mensaje de error si la entrada no es un número
  } else {
    return (parseFloat(montoDolares) * 745).toFixed(2); // Conversión si la entrada es válida
  }
}

(Nota: parseFloat se utiliza internamente para asegurar que la operación se realice sobre un número, aunque el typeof ya valida el tipo primitivo).

2. # Función requisitosBeneficios: Evaluador de Subsidio de Arriendo
El desafío era crear una función que evaluara múltiples condiciones para determinar la elegibilidad para un subsidio, donde todas las condiciones deben ser satisfechas.

### Paso a Paso de la Construcción:

- Definición de la Estructura y Parámetros:

- Se definió la función con un nombre descriptivo: requisitosBeneficios.

- Se identificaron los cuatro criterios de elegibilidad del problema, que se tradujeron en cuatro parámetros de entrada para la función:

edadPostulante (número)

tieneCedulaVigente (booleano)

ahorroActualUF (número)

es70PorCientoMasVulnerable (booleano)

function requisitosBeneficios(edadPostulante, tieneCedulaVigente, ahorroActualUF, es70PorCientoMasVulnerable) {
    // Lógica de evaluación
}

- Implementación de la Lógica Condicional (Todas las condiciones deben cumplirse):

El requerimiento principal era que todas las condiciones debían ser verdaderas para que el postulante calificara. Esto apuntaba directamente al uso del operador lógico "Y" en JavaScript, que se representa con &&.

Cada requisito se formuló como una expresión booleana:

edadPostulante >= 18

tieneCedulaVigente (ya es un booleano)

ahorroActualUF >= 4

es70PorCientoMasVulnerable (ya es un booleano)

Estas expresiones se combinaron dentro de una sentencia if.

Si todas las condiciones combinadas eran verdaderas, la función devolvería un mensaje de éxito. De lo contrario, en el bloque else, devolvería un mensaje indicando que no cumple.

function requisitosBeneficios(edadPostulante, tieneCedulaVigente, ahorroActualUF, es70PorCientoMasVulnerable) {
  if (edadPostulante >= 18 && tieneCedulaVigente && ahorroActualUF >= 4 && es70PorCientoMasVulnerable) {
    return "cumple con los requisitos para postular al subsidio"; // Todas las condiciones se cumplen
  } else {
    return "no cumple con los requisitos para postular al subsidio"; // Al menos una condición no se cumple
  }
}

- Nota sobre la materialización:
Para pasar el código de las funciones y materializarlo en un ejemplo de sitio web, me he apoyado en la IA.