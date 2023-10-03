window.onload=inicio;

const NOMBRECORRECTO="ALEX";

function inicio(){

    document.querySelector("body").insertAdjacentHTML("beforeend",`    
    <h1>Mi Practica JavaScript Nro 03</h1>
    <input type="text" id="campo">

    <button>Aceptar</button>
    <div id="saludo"></div>`);
    document.querySelector("button").onclick=leer;
}

function leer(){
    let nombre=document.querySelector("#campo").value;
    let nombreMayuscula=nombre.toUpperCase();
    let nombreFomateado=nombre.substr(0,1).toUpperCase() + 
    nombre.substr(1).toLowerCase();

    if(nombreMayuscula == NOMBRECORRECTO){
    document.querySelector("#saludo").innerHTML=`Hola  ${nombreFomateado}
    <button id="btn">Ir a la Web</button>`;
    document.querySelector("#btn").onclick=acceder;

    }else{

    document.querySelector("#saludo").innerHTML="";
    document.querySelector("#campo").value="";
    document.querySelector("#campo").focus();

    }
}

function acceder(){

    location.href="https://www.google.co.ve";
}



