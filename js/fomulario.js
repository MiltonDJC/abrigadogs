var normbre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var mail = document.getElementById("mail");
var direccion = document.getElementById("direccion");
var pedido = document.getElementById("pedido");
var error = document.getElementById("error");
error.style.color="red";
error.style.fontWeight="bold";
error.style.fontFamily="sans-serif";

function enviarFormulario(){
    console.log("Enviando formulario...");
    var mensajesError = [];
    if(nombre.value === null || nombre.value === ""){
        mensajesError.push("Por favor, ingresa tu nombre");
    }
    if(apellido.value === null || apellido.value === ""){
        mensajesError.push("Por favor, ingresa tu apellido");
    }
    if(mail.value === null || mail.value === ""){
        mensajesError.push("Por favor, ingresa tu e-mail");
    }
    if(direccion.value === null || direccion.value === ""){
        mensajesError.push("Por favor, ingresa tu dirección");
    }
    if(pedido.value === null || pedido.value === ""){
        mensajesError.push("Por favor, ingresa tu pedido");
    }
    error.innerHTML = mensajesError.join("<br>");

    return false;
}