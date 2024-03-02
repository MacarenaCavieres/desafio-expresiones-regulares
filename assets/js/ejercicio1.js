const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");
const errorNombre = document.querySelector("#errorNombre");
const errorAsunto = document.querySelector("#errorAsunto");
const errorMensaje = document.querySelector("#errorMensaje");
const resultado = document.querySelector(".resultado");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const userName = nombre.value;
    const userSubject = asunto.value;
    const userMsg = mensaje.value;

    const regex = /[a-zA-Z]/gim;

    if (!regex.test(userName)) {
        errorNombre.innerText = `El nombre es requerido`;
    }
    if (!userSubject.trim()) {
        errorAsunto.innerText = `El asunto es requerido`;
    }
    if (!userMsg.trim()) {
        errorMensaje.innerText = `El mensaje es requerido`;
    }

    if (regex.test(userName) && userSubject.trim() && userMsg.trim()) {
        resultado.innerText = `Mensaje enviado con exito`;
    }
});
