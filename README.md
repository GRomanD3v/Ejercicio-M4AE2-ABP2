## Autor:
- Gonzalo Román Reyes

## Ruta de repositorio: https://github.com/GRomanD3v/Ejercicio-M4AE2-ABP2.git

### Aprendizaje Esperado
Utilizar variables simples y sentencias condicionales para el control del
flujo de un algoritmo que resuelve un problema simple acorde al lenguaje
Javascript

## Ejercicios de M4AE2 ABP2: Construcción de Funciones.
Este documento detalla el proceso paso a paso de cómo se construyeron dos funciones JavaScript para resolver problemas específicos, enfatizando el razonamiento detrás de cada decisión de codificación.

1. #  Función cambioDeDolar: Conversor de Moneda USD a CLP
El objetivo de este proyecto es desarrollar una función JavaScript que convierta un monto de Dólares Estadounidenses (USD) a Pesos Chilenos (CLP). La función incorpora un tipo de cambio fijo y robustas validaciones de entrada, además de formatear el resultado para una visualización clara y adecuada para valores monetarios.

Características Clave
Tipo de Cambio Fijo: 1 USD = 745 CLP.

Validación de Entrada: Asegura que solo se procesen valores numéricos válidos.

Formato de Moneda Chilena: El resultado se muestra con separadores de miles (punto) y decimales (coma), y siempre con dos decimales, siguiendo el estándar CLP (ej. $149.000,00).





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