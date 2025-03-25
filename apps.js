import { sumar, restar, multiplicar, dividir } from './operaciones.js';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, answer => resolve(answer)));
}

async function iniciarCalculadora() {
  let continuar = true;

  while (continuar) {
    const opcion = await question(
      `CALCULADORA BÁSICA
1. Sumar
2. Restar
3. Multiplicar
4. Dividir
5. Salir
Seleccione una operación: `
    );

    if (opcion === '' || opcion === '5') {
      console.log("¡Hasta luego!");
      continuar = false;
      continue;
    }

    if (!['1', '2', '3', '4'].includes(opcion)) {
      console.log("Opción no válida");
      continue;
    }

    const num1 = parseFloat(await question("Ingrese el primer número: "));
    const num2 = parseFloat(await question("Ingrese el segundo número: "));

    if (isNaN(num1) || isNaN(num2)) {
      console.log("Valores numéricos no válidos");
      continue;
    }

    let resultado;
    switch (opcion) {
      case '1':
        resultado = sumar(num1, num2);
        break;
      case '2':
        resultado = restar(num1, num2);
        break;
      case '3':
        resultado = multiplicar(num1, num2);
        break;
      case '4':
        resultado = dividir(num1, num2);
        break;
    }

    console.log(`Resultado: ${resultado}`);
  }

  rl.close();
}

iniciarCalculadora();
