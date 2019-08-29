//Solicitud de datos al usuario
var nombre;
nombre =prompt("Ingrese su nombre", nombre);
document.write(nombre);

//Ventana emergente con mensaje
window.alert("Bienvenido " + nombre);

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
//Arrays
var usuarios = ["Luis","Carlos","Pablo","Vinicio"];
console.log(usuarios[1]);

var objeto ={
    color:"Black",
    size:12
}