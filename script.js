// Crear las listas de imágenes, títulos y frases
const imagenes = [
  "https://faitc.org/wp-content/uploads/2021/04/carambola-3233390_1280.jpg",
  "https://fruiver.com/wp-content/uploads/2021/10/Maracuya-best-berries-peru.png",
  "https://mercadobecampo.com/cdn/shop/products/pitaya_Mesadetrabajo1.jpg?v=1594396978&width=1920.jpg",
  "https://caribbeanexotics.com.co/wp-content/uploads/2021/03/lulo-producto-caribbean-exotics.png",
  "https://fruverhome.co/wp-content/uploads/2020/08/UCHUVA.jpg",
];

const titulos = [
  "Carambola",
  "Maracuya",
  "Pitaya",
  "Lulo",
  "Uchuva",
];

const frases = [
  "Eres una completa estrella en el interior, haz que tu luz llegue a todos nosotros.",
  "Aunque resultes exotico para los demas nunca dejes que apaguen tu pasion.",
  "Eres imponente, aunque esto es de frutas tu animal interior es el dragon.",
  "Dentro de toda tu acides hay un dulzor sin igual.",
  "Que no te detenga el que no todos logren ver el potencial que hay en tu interior.",
];

// Trae los elementos del HTML que tienen ese id
const imagen = document.getElementById("foto");
const titulo = document.getElementById("titulo1");
const prediccion = document.getElementById("prediccion1");
const boton = document.getElementById("boton");

// Función para generar un número aleatorio entre un valor mínimo y un máximo
function numeroRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min - 1);
}

function generarPrediccion() {
  // Para elegir la misma posición en todas las listas, generar un solo número aleatorio
  const indice = numeroRandom(0, frases.length); // 0, 1, 2, 3

  // Reemplaza el texto del elemento 'titulo' por un título de la lista de títulos elegido aleatoriamente
  titulo.innerText = titulos[indice]; // Entre los [] se pasa el número aleatorio generado arriba

  // Reemplaza la imagen del elemento 'imagen' por una elegida aleatoriamente
  imagen.src = imagenes[indice];

  // Reemplaza el texto del elemento 'predicción' por las frases elegidas aleatoriamente
  prediccion.innerHTML = `<p>${frases[indice]}</p>`;
}

// Ejecuta la función generarPoema() cada vez que hago click en el botón
boton.addEventListener("click", function () {
  generarPrediccion();
});

generarPrediccion();