const numero = parseInt(prompt('Ingrese un numero'));

switch (numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) {
    case numero % 2 === 0:
        document.write(`El ${numero} es divisible por 2`);
        break;
    case numero % 3 === 0:
        document.write(`El ${numero} es divisible por 3`);
        break;
    case numero % 5 === 0:
        document.write(`El ${numero} es divisible por 5`);
        break;
    case numero % 7 === 0:
        document.write(`El ${numero} es divisible por 7`);
        break;
    default:
        document.write(`El ${numero} no es divisible por 2, 3, 5 o 7`);
    }