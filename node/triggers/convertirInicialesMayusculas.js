function convertirInicialesMayusculas(texto) {
    // Convertir la cadena de texto a minúsculas
    texto = texto.toLowerCase();
  
    // Dividir la cadena de texto en palabras
    const palabras = texto.split(' ');
  
    // Convertir la primera letra de cada palabra a mayúscula
    for (let i = 0; i < palabras.length; i++) {
      palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    }
  
    // Unir las palabras modificadas en una nueva cadena de texto
    return palabras.join(' ');
  }


const texto = convertirInicialesMayusculas("prueba comprobacion funcionamiento de funcion sin importar la longitud");
console.log(texto);

function capitalizeWords(text) {
  const words = text.split(" ");
  const capitalizedWords = words.map(word => word[0].toUpperCase() + word.slice(1));
  return capitalizedWords.join(" ");
}

const texto2 = capitalizeWords("prueba capitalize words");
console.log(texto2);

export default convertirInicialesMayusculas;

