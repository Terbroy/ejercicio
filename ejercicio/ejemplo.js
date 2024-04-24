const enlace = "https://swapi.dev/api/people/?page=2"

//async / await  --> asincrono
// const contenedorPersonajes = document.getElementById("contenedor-personajes")
async function fetchApi(){
    try {
        const response  = await fetch(enlace)
        const personajes = await  response.json()
        const resultado = personajes.results
        for (const personaje of resultado) {
            const listaPersonajes = document.createElement("li")
            listaPersonajes.textContent = personaje.name
            contenedorPersonajes.appendChild(listaPersonajes)
        }


        console.log(response);
    } catch (error) {
        console.log("Lo siento mucho, hubo un error en la peticion" + error)
    }
}

fetchApi()

fetch(url)
.then()
.error()



