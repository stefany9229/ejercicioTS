function sumar(a, b) {
  let resultado = a + b;
  return resultado;
}

function restar(a, b) {
  let resultado = a - b;
  return resultado;
}

function multiplicar(a, b) {
  let resultado = a * b;
  return resultado;
}

function dividir(a, b) {
  let resultado;
  if (b === 0) {
    resultado = "No se puede dividir por cero";
  } else {
    resultado = a / b;
  }
  return resultado;
}

// Ejemplo de uso:
console.log(sumar(5, 3)); // 8
console.log(restar(10, 5)); // 5
console.log(multiplicar(4, 3)); // 12
console.log(dividir(20, 4)); // 5
console.log(dividir(20, 0)); // No se puede dividir por cero
