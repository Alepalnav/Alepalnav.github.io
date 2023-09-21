
// funcion para crear filas 

function creaFila(){
    let tabla=document.getElementById("tabla");
    let c1= document.createElement("td");
    let f1= document.createElement("tr");
    let texto=document.getElementById("text").value;
    let text= document.createTextNode(texto);
    c1.appendChild(text);
    f1.appendChild(c1);
    tabla.appendChild(f1);
}

// funcion para borrar la ultima fila 

function borrar(){
    let tabla=document.getElementById("tabla");
    let filas = tabla.getElementsByTagName("tr");
    r=filas.length;
    
    let rowb = filas[r-1];
    rowb.remove();
}