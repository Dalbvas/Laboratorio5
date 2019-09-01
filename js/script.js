//Solicitud de datos al usuario
var nombre;
nombre =prompt("Ingrese su nombre", nombre);


//Ventana emergente con mensaje
window.alert("Bienvenido " + nombre);

//Mensaje desde consola
console.log("Este es un mensaje en consola");

//Creacion de un boton
var button=document.createElement("button");
button.innerHTML="Pinchar aqui";
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
//ciclo for
for (i=0;i<10;i++){
    console.log("YOLO"+"<br>");
}

// uso del ciclo do while
i=0;
do{
    document.write("Buen dia "+nombre+"<br>");
    i++;
}while(i<10);

//Desplegar fecha por medio de un boton
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }