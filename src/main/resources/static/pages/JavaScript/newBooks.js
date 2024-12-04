import obtenerLibrosData from "./PaginaPrincipal/obtenerLibros.js";

// Selecciona solo el contenedor de la sección de novedades
const contenedorNovedades = document.querySelector(".novedades .container");
const ulElemento = document.createElement('ul');
contenedorNovedades.appendChild(ulElemento);
    
const muestraLibrosNovedades = async () => {
  const listaDeLibros = await obtenerLibrosData();
  
  // Filtrar solo los libros que son novedades
  const librosNovedades = listaDeLibros.filter(item => {
    return item.volumeInfo.publishedDate > '2022-01-01'; 
  });

  // Si lalongitud de novedades es igual a cero, mostrar el mensaje No hay novedades
  if (librosNovedades.length === 0) {
    const mensaje = document.createElement('p');
    mensaje.textContent = 'No hay novedades disponibles.';
    contenedorNovedades.appendChild(mensaje);
    return;
  }

  librosNovedades.forEach(item => {
    const liElemento = document.createElement('li');
    const articleElemento = document.createElement('article');
    const imgElemento = document.createElement('img');
    const spanTitulo = document.createElement('span');
    const spanAutor = document.createElement('span');
    const divElemento = document.createElement('div');
    const divNovedad = document.createElement('div'); // Crear el div para la novedad

    // Asignar atributos y contenido
    imgElemento.src = item.volumeInfo.imageLinks?.thumbnail || ''; // Usar imagen si existe
    spanTitulo.textContent = item.volumeInfo.title || 'Título no disponible'; // Usar título si existe
    spanAutor.textContent = item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Autor no disponible'; // Usar autores si existen
    
    // Añadir el cuadro de novedad
    divNovedad.textContent = 'Novedad';
    divNovedad.className = 'novedad'; // Asignar clase para el estilo
     

    // Estructura del DOM
    articleElemento.appendChild(divNovedad); // Agregar el cuadro de novedad al artículo
    ulElemento.appendChild(liElemento);
    liElemento.appendChild(articleElemento);
    articleElemento.appendChild(divElemento);
    divElemento.appendChild(imgElemento);
    articleElemento.appendChild(spanTitulo);
    articleElemento.appendChild(spanAutor);
  });
}

document.addEventListener("DOMContentLoaded", muestraLibrosNovedades);