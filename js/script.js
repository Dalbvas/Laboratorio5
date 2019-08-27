window.alert("Bienvenido");
var edad=prompt("Ingrese su edad");
function Mymensaje(){
    alert("funciono correctamente");
}
console.log("Este es un mensaje en consola");
var button=document.createElement("button");
button.innerHTML="touchme";
var body=document.getElementsByTagName("footer")[0];
body.appendChild(button);
button.addEventListener("click",function()
{
    document.write(10+11);
});