

const btnPost = document.getElementById("post")
const formHTML = document.getElementById("form")
const listaHTML = document.getElementById("lista-usuario")

let listaUsuarios = [
    {
        name: "pepito", email: "pepito@gmail.com", id: 1,
    },
    {
        name: "lucia", email: "lucia@gmail.com", id: 2,
    },
    {
        name: "andres", email: "andres@gmail.com", id: 3,
    },
    {
        name: "jorge", email: "jorge@gmail.com", id: 4,
    },
    {
        name: "laura", email: "laura@gmail.com", id: 5,
    },
    {
        name: "jose", email: "jose@gmail.com", id: 6,
    },
    {
        name: "jose", email: "jose@gmail.com", id: 7,
    },
]





//{ => {}}

formHTML.addEventListener("submit", e => {
    e.preventDefault()

    postUser()


})



// var hijoAgregado = listaHTML.insertBefore(daniel, pepito);

const htmlCollectionBtn = []

function desplegarUsuarios() {
    listaHTML.innerHTML = "";
    let lista = getUsuarios();

    lista.map((user) => {
        const item = document.createElement("li");
        item.id = user.id;
        item.style.display = "inline-block";

        item.innerHTML = `
        <div>
            <h3>${user.name}</h3>
            <small>${user.email}</small>
            <b>ID: ${user.id}</b>
        </div>
        <div>
            <button id=${user.id} class="eliminar" onclick="eliminarUsuario()">Eliminar</button>
            <button onclick="editarUsuario(${user.id})">Editar</button>
        </div>
        `;

        listaHTML.appendChild(item);
    });

    const btnDeleteCollection = document.getElementsByClassName("eliminar");
    for (let i = 0; i < btnDeleteCollection.length; i++) {
        const button = btnDeleteCollection[i];
        button.addEventListener("click", () => {
            eliminarUsuario(button.id)
        });
    }
}




document.addEventListener("DOMContentLoaded", e => {
    desplegarUsuarios()
})

function postUser() {

    const emailInput = document.getElementById("email").value
    const nameInput = document.getElementById("name").value
    const idInput = document.getElementById("id").value
    const idRepetido = listaUsuarios.find(e => e.id == idInput);
    if (!idRepetido) {
        let nuevoUsuario = {
            name: nameInput,
            email: emailInput,
            id: idInput,
        }
        listaUsuarios.push(nuevoUsuario)
        desplegarUsuarios()
        return
    }
    alert("el usuario esta repetido")


}

function eliminarUsuario(id) {

    const lista = getUsuarios()
    const usuario = getUsuario(parseInt(id))
    const indice = lista.indexOf(...usuario)
    console.log(indice);
    if (indice != -1) {
        lista.splice(indice, 1);
    } else {
      console.warn("Usuario con ID", id, "no encontrado");
    }
    console.log(lista);
    desplegarUsuarios()
}


// C R U D
// GET 
// POST
// PUT === PATCH
// DELETE 

//declaradas

function getUsuarios() {

    return listaUsuarios;
}

function getUsuario(id) {
    const lista = getUsuarios()
    let usuario = lista.filter(e => e.id == id)
    return usuario;
}




// postUser("pepito", "pepito@gmail.com")
// postUser("lucia", "lucia@gmail.com")
// postUser("andres", "andres@gmail.com")
// postUser("jorge", "jorge@gmail.com")
// postUser("laura", "laura@gmail.com")
// postUser("jose", "jose@gmail.com")
// postUser("jose", "jose@gmail.com")
