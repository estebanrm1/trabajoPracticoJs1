let numA = parseInt(prompt('Ingrese el primer numero'));
let numB = parseInt(prompt('Ingrese el segundo numero'));
let numC = parseInt(prompt('Ingrese el tercer numero'));

if (numA > numB && numA > numC ){
    document.write((numA) + ' es el mayor');
} else {
    if(numB > numA && numB > numC ) {
      document.write((numB) + ' es el mayor')
    }else{
       document.write((numC) + ' es el Mayor')
    }
}