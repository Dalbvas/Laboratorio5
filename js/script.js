//Ventana emergente con mensaje
window.alert("Bienvenido");

//Solicitud de datos al usuario
var edad=prompt("Ingrese su edad");

//Mensaje desde consola
console.log("Este es un mensaje en consola");

//Creacion de un boton
var button=document.createElement("button");
button.innerHTML="touchme";
var body=document.getElementsByTagName("body")[0];
body.appendChild(button);
button.addEventListener("click",function()
{
    document.write(10+11);
});