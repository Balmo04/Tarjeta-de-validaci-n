const btnValidarTajeta = document.getElementById("btn-ValidarTarjeta");
const mostrarError= document.getElementById("AnuncioDeError");
const divPantallaPedirTarjeta=document.getElementById("Pedir-tarjeta")
const divPantallaVerdadera=document.getElementById("PantallaTarjetaVerdadera");
const divPantallaFalsa=document.getElementById("PantallaTarjetaFalsa");
const btnRegresarAPantallaDePedirTarjeta=document.getElementsByClassName("regresarAPantallaPedirTarjeta");
const mostrarMensajeVerdadero=document.getElementById("mostrarMensajeTarjetaVerdadera");
const mostrarMensajeFalso=document.getElementById("mostrarMensajeTarjetaFalsa");
let numTarjetaIngresada= document.getElementById("input-ColocarTarjeta");

let numTarjetaAux="";
let numTarjetaArray=[];

btnValidarTajeta.addEventListener("click", function(){
    rellenarInputCorrectamente();
});

function rellenarInputCorrectamente(){
   
    numTarjetaAux=numTarjetaIngresada.value;
    numTarjetaAux=numTarjetaAux.trim();
    if(numTarjetaAux ==="")
    {
        numTarjetaIngresada.style.borderBottom="3.5px outset red";
        mostrarError.innerText="No ha ingresado nada";
    }
    else if(numTarjetaAux.length!==16)
    {
        numTarjetaIngresada.style.borderBottom="3.5px outset red";
        mostrarError.innerText="Ha ingresado "+numTarjetaAux.length+" digitos pero son 16 digitos";
    }
    else
    {
        revisarSiSonNumeros();
    }
}

function revisarSiSonNumeros(){
    for(let i=0; i<=15; i++)
    {
        numTarjetaArray[i]=parseInt(numTarjetaAux.charAt(i));
    }  
    if(numTarjetaArray.includes(NaN))
    {
        mostrarError.innerText="Ha ingresado valores no númericos";
    }
    else
    {
        evaluarSiEsUnaTarjetaVerdaderaOFalsa(); 
    }
}

function evaluarSiEsUnaTarjetaVerdaderaOFalsa(){
    numTarjetaIngresada.style.borderBottom="2px solid black";
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
    mostrarMensajeVerdadero.innerText="Su tarjeta :  ####-####-####-"+numTarjetaAux.substring(11,15)+"  es valida";
}

function pantallaFalsa(){
    divPantallaPedirTarjeta.style.display="none";
    divPantallaVerdadera.style.display="none";
    divPantallaFalsa.style.display="flex";
    mostrarMensajeFalso.innerText="Su tarjeta :  ####-####-####-"+numTarjetaAux.substring(11,15)+"  es invalida";
}

btnRegresarAPantallaDePedirTarjeta[0].addEventListener("click", function(){
     regresarAPantallaPedirTarjeta();
});

btnRegresarAPantallaDePedirTarjeta[1].addEventListener("click", function(){
    regresarAPantallaPedirTarjeta();
});

function regresarAPantallaPedirTarjeta(){
    divPantallaFalsa.style.display="none";
    divPantallaVerdadera.style.display="none";
    divPantallaPedirTarjeta.style.display="flex";
    numTarjetaIngresada.value=numTarjetaIngresada.value="";
    mostrarError.innerText="";
}

const btnPerfil=document.getElementById("btn-PerfilDeCreditValue");
const btnProceso=document.getElementById("btn-ProcesoDeCreditValue");
const txtPerfilDeCreditValue=document.getElementById("txt-PerfilDeCreditValue");
const txtProcesoDeCreditValue=document.getElementById("txt-ProcesoDeCreditValue");
let boolPerfil=false;
let boolProceso=false;


btnPerfil.addEventListener("click", function(){
    mostrarPerfilDeCreditValue();
})

btnProceso.addEventListener("click", function(){
    mostrarProcesoDeCreditValue();
})

function mostrarPerfilDeCreditValue(){
    boolPerfil=!boolPerfil;
    if(boolPerfil){
        txtPerfilDeCreditValue.style.display="flex";
    }
    else
    {
        txtPerfilDeCreditValue.style.display="none";
    }
}

function mostrarProcesoDeCreditValue(){
    boolProceso=!boolProceso;
    if(boolProceso){
        txtProcesoDeCreditValue.style.display="flex";
    }
    else
    {
        txtProcesoDeCreditValue.style.display="none";
    }
}

