const btnValidarTajeta = document.getElementById("btn-ValidarTarjeta");
const mostrarError= document.getElementById("AnuncioDeError");
let numTarjetaAux="";
let numTarjetaArray=[];

btnValidarTajeta.addEventListener("click", function(){
    rellenarInputCorrectamente();
});

function rellenarInputCorrectamente(){
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
        evaluarSiEsUnaTarjetaVerdaderaOFalsa();
    }
}

function evaluarSiEsUnaTarjetaVerdaderaOFalsa(){
    let sumaDeLosDigitos=0;
    for(i=0; i<numTarjetaArray.length; i++)
    {
        if((i%2)===0)
        {
            numTarjetaArray[i]=numTarjetaArray[i]*2;
            if(numTarjetaArray[i]>9)
            {
                numTarjetaArray[i]=numTarjetaArray[i]-1;
            }
        }
        sumaDeLosDigitos=sumaDeLosDigitos+numTarjetaArray;
    }
    if(sumaDeLosDigitos%10===0)
    {
        pantallaVerdadera();
    }
    else
    {
        pantallaFalsa();
    }
}

function pantallaVerdadera(){

}
function pantallaFalsa(){

}



