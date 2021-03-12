const btnValidarTajeta = document.getElementById("btn-ValidarTarjeta");
const mostrarError= document.getElementById("AnuncioDeError");
const divPantallaPedirTarjeta=document.getElementById("Pedir-tarjeta")
const divPantallaVerdadera=document.getElementById("PantallaTarjetaVerdadera");
const divPantallaFalsa=document.getElementById("PantallaTarjetaFalsa");
const btnRegresarAPantallaDePedirTarjeta=document.getElementsByClassName("regresarAPantallaPedirTarjeta");
const mostrarMensajeVerdadero=document.getElementById("mostrarMensajeTarjetaVerdadera");
const mostrarMensajeFalso=document.getElementById("mostrarMensajeTarjetaFalsa");
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
    divPantallaPedirTarjeta.style.display="none";
    divPantallaFalsa.style.display="none";
    divPantallaVerdadera.style.display="flex";
    mostrarMensajeVerdadero.innerText="Su tarjeta :  ####-####-####-"+numTarjetaAux.substring(11,15)+" es valida";
}
function pantallaFalsa(){
    divPantallaPedirTarjeta.style.display="none";
    divPantallaVerdadera.style.display="none";
    divPantallaFalsa.style.display="flex";
    mostrarMensajeFalso.innerText="Su tarjeta :  ####-####-####-"+numTarjetaAux.substring(11,15)+" es invalida";
}

btnRegresarAPantallaDePedirTarjeta[0].addEventListener("click", function(){
    regresarAPantallaPedirTarjeta();
})
btnRegresarAPantallaDePedirTarjeta[1].addEventListener("click", function(){
    regresarAPantallaPedirTarjeta();
})

function regresarAPantallaPedirTarjeta(){
    divPantallaFalsa.style.display="none";
    divPantallaVerdadera.style.display="none";
    divPantallaPedirTarjeta.style.display="flex";
}

