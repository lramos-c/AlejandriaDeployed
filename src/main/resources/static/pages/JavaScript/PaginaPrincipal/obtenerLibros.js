
const obtenerLibrosData = async () => {
  const URLAPI = "http://localhost:8080/api/v1/books/all";
  let listaDeLibros;
 
  await fetch(URLAPI)
  .then(response => response.json())
  .then(data => listaDeLibros = data)
  .then(data => console.log(data))
  .catch(error => console.log(error));

  return listaDeLibros.slice(0, 20);
}

export default obtenerLibrosData;