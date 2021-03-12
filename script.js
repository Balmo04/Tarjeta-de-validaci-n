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
    let numTarjetaArrayAux=[];
    for(i=0; i<=15; i++)
    {
        numTarjetaArrayAux[i]=numTarjetaArray[i];
        if((i%2)===0)
        {
            numTarjetaArrayAux[i]=numTarjetaArrayAux[i]*2;
            if(numTarjetaArrayAux[i]>9)
            {
                numTarjetaArrayAux[i]=(numTarjetaArrayAux[i]-10)+1;
            }
        }
        sumaDeLosDigitos=sumaDeLosDigitos+numTarjetaArrayAux[i];
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
    console.log("tarjeta verdadera");
}
function pantallaFalsa(){
    console.log("tarjeta falsa");
}



