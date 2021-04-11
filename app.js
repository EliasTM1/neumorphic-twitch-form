let boton = document.querySelector('button')

boton.addEventListener('click', (e) => {
    e.preventDefault()
    validar()
})

let nombre = document.querySelector('#name')
let email = document.querySelector('#email')
let edad = document.querySelector('#age')

let section = document.querySelector('#seccionDatos')
let primero = document.querySelector('#primerHijo')


function validar() {
    if (nombre.value == '' || email.value == '' || edad.value == '') {
        mostrarMensaje('Please fill all the fields', 'error')
    } else {
        mostrarMensaje('Thanks for that 😘😘😘 ')
    }
}

function mostrarMensaje(mensaje, tipo) {
    let alerta = document.createElement('div')
    if (tipo == 'error') {
        alerta.innerText = mensaje
        alerta.classList.add('alerta')
        section.insertBefore(alerta, primero)

    } else {
        alerta.innerText = mensaje
        alerta.classList.add('success')
        section.insertBefore(alerta, primero)
    }

    setTimeout(() => {
        alerta.remove()
    }, 3000);

    // setTimeout(() => {
    //     alerta.remove()
    // }, 3000);

}