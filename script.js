const btnValidarTajeta = document.getElementById("btn-ValidarTarjeta");
const mostrarError= document.getElementById("AnuncioDeError");
let numTarjetaAux="";
let numTarjetaArray=[];

btnValidarTajeta.addEventListener("click", function(){
    rellenarInputCorrectamente();
});

function rellenarInputCorrectamente(numTajetaAux){
    const numTarjetaIngresada= document.getElementById("input-ColocarTarjeta").value;
    numTarjetaAux=numTarjetaIngresada.trim();
  
    if(numTarjetaAux ==="")
    {
        mostrarError.innerText="No ha ingresado nada";
    }
    else if(numTarjetaAux.length!==16)
    {
        mostrarError.innerText="Ha ingresado "+numTarjetaAux.length+" digitos pero son 16 digitos";
    }
    else
    {
        revisarSiSonNumeros(numTarjetaAux);
    }
}

function revisarSiSonNumeros(){
    for(let i=0; i<=15; i++)
    {
        numTarjetaArray[i]=parseInt(numTarjetaAux.charAt(i));
    }  
    if(numTarjetaArray.includes(NaN))
    {
        mostrarError.innerText="Ha ingresado datos no numéricos";   
    }
    else
    {
        mostrarSiEsUnaTarjetaVerdaderaOFalsa();
    }
}





