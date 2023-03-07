let numA = parseInt(prompt('Ingrese el primer numero'));
let numB = parseInt(prompt('Ingrese el segundo numero'));

if (numA > numB) {
    document.write(`${numA} es mayor que ${numB}`);
} else {
    document.write(`${numB} es mayor que ${numA}`);
}