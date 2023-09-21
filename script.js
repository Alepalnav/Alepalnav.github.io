let count = 0;

const valor = document.getElementById("valor");
const incrementar = document.getElementById("incrementar");
const resetear = document.getElementById("resetear");
const disminuir = document.getElementById("disminuir");



incrementar.onclick = function(){
    count++;
    valor.innerHTML=count;
}

resetear.onclick = function(){
    count=0;
    valor.innerHTML=count;
}

disminuir.onclick = function(){
    count--;
    valor.innerHTML=count;
}

