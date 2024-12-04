
export default async function eliminarLibroBD() {
  const URL = "http://54.173.225.101:8080/api/v1/books";

  await fetch(URL)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
}