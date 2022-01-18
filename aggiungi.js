"use strict"
let jsonDoc; //creazione del vettore

window.onload = function (){
    let json = localStorage.getItem("jsonBookstore");
    if (json!=null)
        jsonDoc = JSON.parse(json);
    else
        jsonDoc = [];
}

function salva(){
    let libro = {};
    libro.title = document.getElementById("txtTitolo").value;
    libro.author = document.getElementById("txtAutore").value;
    libro.categoy = document.getElementById("txtCategoria").value;
    libro.lang = document.getElementById("txtLingua").value;
    libro.year = document.getElementById("txtAnno").value;
    libro.price = document.getElementById("txtPrezzo").value;
    jsonDoc[jsonDoc.length] = libro; //metto il libro nel vettore
    let jsonS = JSON.stringify(jsonDoc);
    localStorage.setItem("jsonBookstore",jsonS);
    ritorna();
}
function ritorna(){
    window.location.href = "index.html"; //reindirizza alla pagina scritta dopo l'uguale
}