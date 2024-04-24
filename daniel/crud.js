


const btnPost = document.getElementById("post")
const formHTML = document.getElementById("form")
const listaHTML = document.getElementById("lista-usuario")

let listaUsuarios = [
{
    name:"pepito", email:"pepito@gmail.com"
},
{
    name:"lucia", email:"lucia@gmail.com"
},
{
    name:"andres", email:"andres@gmail.com"
},
{
    name:"jorge", email:"jorge@gmail.com"
},
{
    name:"laura",email: "laura@gmail.com"
},
{
    name:"jose", email:"jose@gmail.com"
},
{
    name:"jose", email:"jose@gmail.com"
},
]

formHTML.addEventListener("submit")


function desplegarUsuarios(){
    let lista = getUsuarios();
    lista.map(e =>{
        const item = document.createElement("li")
        item.textContent = e.name
        listaHTML.appendChild(item)
    }
    )
}

document.addEventListener("DOMContentLoaded",e => {
    desplegarUsuarios()
})

function postUser(){
    
const emailInput = document.getElementById("email").value
const nameInput = document.getElementById("name").value
const idInput = document.getElementById("id").value

    let nuevoUsuario = {
        nombre : nameInput,
        correo : emailInput,
        id: idInput,
    }
    listaUsuarios.push(nuevoUsuario)

    console.log(listaUsuarios);
}






// C R U D
// GET 
// POST
// PUT === PATCH
// DELETE 

//declaradas

function getUsuarios(){

    return listaUsuarios;
}

function getUsuario(id){

    let usuario = listaUsuarios.filter(e => e.id === id )
    return usuario;
}




// postUser("pepito", "pepito@gmail.com")
// postUser("lucia", "lucia@gmail.com")
// postUser("andres", "andres@gmail.com")
// postUser("jorge", "jorge@gmail.com")
// postUser("laura", "laura@gmail.com")
// postUser("jose", "jose@gmail.com")
// postUser("jose", "jose@gmail.com")
