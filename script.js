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
let temporal="";
console.log("Esta tarjeta es verdadera: 4137-8947-1175-5904");
numTarjetaIngresada.addEventListener("keydown", function(event){
    AgregarGuion(event);
});

function AgregarGuion (event){
    if(event.keyCode!==8)
    {
        if(((numTarjetaIngresada.value.length+1)%5===0)&&(numTarjetaIngresada.value.length<19))
        {
            numTarjetaIngresada.value=numTarjetaIngresada.value+"-";
        }
    }
}
function QuitarGuion(numTarjetaIngresada){
   return numTarjetaIngresada=numTarjetaIngresada.value.replaceAll("-","");
}

btnValidarTajeta.addEventListener("click", function(){
    temporal=QuitarGuion(numTarjetaIngresada);
    rellenarInputCorrectamente(temporal);
});

function rellenarInputCorrectamente(numerosSinGuion){
    numTarjetaAux=numerosSinGuion.trim();
    if(numTarjetaAux ==="")
    {
        numTarjetaIngresada.classList.replace("bordeInferiorNegro", "bordeInferiorRojo");
        mostrarError.innerText="No ha ingresado nada";
    }
    else if(numTarjetaAux.length!==16)
    {
        numTarjetaIngresada.classList.replace("bordeInferiorNegro", "bordeInferiorRojo");
        mostrarError.innerText="Ha ingresado "+numTarjetaAux.length+" digitos pero son 16 digitos";
    }
    else
    {
        revisarSiSonNumeros(numTarjetaAux);
    }
}

function revisarSiSonNumeros(valoresNumericos){
    for(let i=0; i<=15; i++)
    {
        numTarjetaArray[i]=parseInt(valoresNumericos.charAt(i));
    }  
    if((Number(valoresNumericos))===0)
    {
        numTarjetaIngresada.classList.replace("bordeInferiorNegro", "bordeInferiorRojo");
        mostrarError.innerText="No existe esa tarjeta";  
    }
    else if(Number(valoresNumericos))
        {
            evaluarSiEsUnaTarjetaVerdaderaOFalsa(numTarjetaArray); 
        }
    else
        {
            numTarjetaIngresada.classList.replace("bordeInferiorNegro", "bordeInferiorRojo");
            mostrarError.innerText="Ha ingresado valores no númericos";
        }
}   
   /* if(numTarjetaArray.includes(NaN))
    {
        numTarjetaIngresada.style.borderBottom="3.5px outset red";
        mostrarError.innerText="Ha ingresado valores no númericos";
    }
    else
    {
        evaluarSiEsUnaTarjetaVerdaderaOFalsa(); 
    }*/


function evaluarSiEsUnaTarjetaVerdaderaOFalsa(numerosEnArray){
    let sumaDeLosDigitos=0;
    let numTarjetaArrayAux=[];
    for(i=0; i<=15; i++)
    {
        numTarjetaArrayAux[i]=numerosEnArray[i];
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
    divPantallaPedirTarjeta.classList.replace("displayFlex","displayNone");
    divPantallaFalsa.classList.replace("displayFlex","displayNone");
    divPantallaVerdadera.classList.replace("displayNone","displayFlex");
    mostrarMensajeVerdadero.innerText="Su tarjeta : ####-####-####-"+numTarjetaIngresada.value.substring(15,19)+" es valida";
}

function pantallaFalsa(){
    divPantallaPedirTarjeta.classList.replace("displayFlex","displayNone");
    divPantallaVerdadera.classList.replace("displayFlex","displayNone");
    divPantallaFalsa.classList.replace("displayNone","displayFlex");
    mostrarMensajeFalso.innerText="Su tarjeta : ####-####-####-"+numTarjetaIngresada.value.substring(15,19)+" es invalida";
}

btnRegresarAPantallaDePedirTarjeta[0].addEventListener("click", function(){
     regresarAPantallaPedirTarjeta();
});

btnRegresarAPantallaDePedirTarjeta[1].addEventListener("click", function(){
    regresarAPantallaPedirTarjeta();
});

function regresarAPantallaPedirTarjeta(){
    divPantallaPedirTarjeta.classList.replace("displayNone","displayFlex");
    divPantallaVerdadera.classList.replace("displayFlex","displayNone");
    divPantallaFalsa.classList.replace("displayFlex","displayNone");
    numTarjetaIngresada.value=numTarjetaIngresada.value="";
    mostrarError.innerText="";
    numTarjetaIngresada.classList.replace("bordeInferiorRojo", "bordeInferiorNegro");
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
        txtPerfilDeCreditValue.classList.replace("displayNone", "displayFlex");  
    }
    else
    {
        txtPerfilDeCreditValue.classList.replace("displayFlex","displayNone");
    }
}

function mostrarProcesoDeCreditValue(){
    boolProceso=!boolProceso;
    if(boolProceso){
        txtProcesoDeCreditValue.classList.replace("displayNone", "displayFlex");
    }
    else
    {
        txtProcesoDeCreditValue.classList.replace("displayFlex","displayNone");
    }
}