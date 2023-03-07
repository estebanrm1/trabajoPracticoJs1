const frase = prompt('Escriba una frase');

const contarVocales = palabra => {
    const vocales = "aáeéiíoóuú"
    let cantidadVocales = 0;
    for (const letra of palabra) {
        if (vocales.includes(letra.toLowerCase())) {
            cantidadVocales++;
        }
    }
    document.write(`La frase tiene ${cantidadVocales} vocales`);
};
const vocales = contarVocales(frase);