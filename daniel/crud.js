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


//** OBTENER EL BOTON DE FORMULARIO, FORMULARIO Y LISTA DE USUARIOS DEL HTML */
const btnPost = document.getElementById("post")
const formHTML = document.getElementById("form")
const listaHTML = document.getElementById("lista-usuario")

//LLAMAR A TODOS LOS USUARIOS

function getUsuarios() {
    
    return listaUsuarios;
}


//LLAMAR A UN USUARIO
function getUsuario(id) {
    const lista = getUsuarios()
    let usuario = lista.filter(e => e.id == id)
    return usuario;
}

// CREAR UN USUARIO
function postUser() {

    //!SELECCIONAR TODOS LOS VALORES DLE FORMULARIO

    const emailInput = document.getElementById("email").value
    const nameInput = document.getElementById("name").value
    const idInput = document.getElementById("id").value

    //? ACTUALIZAR LISTA DE USUARIOS
    const lista = getUsuarios()

    //TODO VERIFICAR QUE EL USUARIO NO ESTE REPETIDO

    const idRepetido = listaUsuarios.find(e => e.id == idInput);


    //**SI NO ESTA REPETIDO ENTONCES SE PROCEDE A CREARLO */

    if (!idRepetido) {

        let nuevoUsuario = {
            name: nameInput,
            email: emailInput,
            id: idInput,
        }

        //**AGREGAR EL USUARIO A LA LISTA */
        lista.push(nuevoUsuario)

        //**DESPLEGARLOS EN EL HTML */
        desplegarUsuarios()
        return
    }

    alert("el usuario esta repetido")
}



//ELIMINAR A UN USUARIO

function eliminarUsuario(id) {

    //? ACTUALIZAR LISTA DE USUARIOS
    const lista = getUsuarios()

    //** OBTENER USUARIO*/
    const usuario = getUsuario(parseInt(id))
    
    //** OBTENER EL INDICE USUARIO DENTRO DEL ARREGLO*/
    const indice = lista.indexOf(...usuario)

    if (indice != -1) {
        lista.splice(indice, 1);
    }
    desplegarUsuarios()
}



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




// C R U D
// GET 
// POST
// PUT === PATCH
// DELETE 

//declaradas




// postUser("pepito", "pepito@gmail.com")
// postUser("lucia", "lucia@gmail.com")
// postUser("andres", "andres@gmail.com")
// postUser("jorge", "jorge@gmail.com")
// postUser("laura", "laura@gmail.com")
// postUser("jose", "jose@gmail.com")
// postUser("jose", "jose@gmail.com")
