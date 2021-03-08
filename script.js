const btnValidarTajeta = document.getElementById("btn-ValidarTarjeta");
const mostrarError= document.getElementById("AnuncioDeError");
let numTarjetaAux="";


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
function revisarSiSonNumeros(numTarjetaAux){
    let numTarjetaArray=[];
    numTarjetaArray=Array.from(numTarjetaAux);
    for(let i=0; i<=15; i++)
    {
        numTarjetaArray[i]=parseInt(numTarjetaArray[i] , 10);
        if(numTarjetArray[i]!==i)
        {
            mostrarError.innerText="Lo siento, ha ingresado un dato no numérico";
        }
        else
        {
            mostrarPatallaVerdaderaOFalsa();
        }
    }
}
function mostrarPatallaVerdaderaOFalsa(){3

    mostrarError.innerText="vamo bien";
}