// los tiro al blanco
const target3 = document.getElementById("target3") 
const target2 = document.getElementById("target2")
const target1 = document.getElementById("target1")  

// los cuadros de tiro al blanco
const cuadrotiro3 = document.getElementById("tiroBlanco3") 
const cuadrotiro2 = document.getElementById("tiroBlanco2")
const cuadrotiro1 = document.getElementById("tiroBlanco1")  

//errores
const error1 = document.getElementById("error1")
const error3 = document.getElementById("error3")

var FLECHA = new Audio();
FLECHA.src="./sonidos/FLECHA.mp3";

//correcta emergentes 
const emergentePuntos10 = document.getElementById("emergentePuntos10")

// incorrecto emergente
const emergentenoAcertoPuntos10 = document.getElementById("emergentenoAcertoPuntos10")


//mostrar el recuadro 
const paginaproof8 = document.getElementById("paginaproof8")



const correcta =() =>{
    FLECHA.play()
    emergentePuntos10.classList.add("emergentes2")
    setTimeout(() => {
        paginaproof8.style.display = "block" 
    }, 4300);
    setTimeout(function(){ 
        emergentePuntos10.classList.remove("emergentes2");
        emergentePuntos10.classList.add("emergentes"); }, 4000);


    cuadrotiro2.style.background = "green"
    cuadrotiro2.style.color = "white"
    target2.classList.add("disparo")
    target3.style.display ="none"
    target1.style.display ="none"
    localStorage.setItem("puntuacion8", 10);
    
}

target2.addEventListener('click',correcta)

const incorrecta1 =() =>{
    cuadrotiro2.style.background = "green"
    cuadrotiro2.style.color = "white"
    FLECHA.play()
    emergentenoAcertoPuntos10.classList.add("emergentes2")
    setTimeout(() => {
        paginaproof8.style.display = "block" 
    }, 4300);
   
    setTimeout(function(){ 
        emergentenoAcertoPuntos10.classList.remove("emergentes2");
        emergentenoAcertoPuntos10.classList.add("emergentes"); }, 3000);

    cuadrotiro1.style.background = "grey"
    target1.classList.add("disparo")
    target2.style.display ="none"
    target3.style.display ="none"
    localStorage.setItem("puntuacion8", 0);

    setTimeout(function(){
        target1.style.display ="none"
        error1.style.display ="block"
    },1000);
    
    
}

target1.addEventListener('click', incorrecta1)

const incorrecta3 =() =>{
    cuadrotiro2.style.background = "green"
    cuadrotiro2.style.color = "white"
    FLECHA.play()
    emergentenoAcertoPuntos10.classList.add("emergentes2")
    setTimeout(() => {
        paginaproof8.style.display = "block" 
    }, 4300);
    setTimeout(function(){ 
        emergentenoAcertoPuntos10.classList.remove("emergentes2");
        emergentenoAcertoPuntos10.classList.add("emergentes"); }, 4000);

    cuadrotiro3.style.background = "grey"
    target3.classList.add("disparo")
    target2.style.display ="none"
    target1.style.display ="none"
    localStorage.setItem("puntuacion8", 0);
    setTimeout(function(){
        target3.style.display ="none"
        error3.style.display ="block"
    },1000);
}


target3.addEventListener('click', incorrecta3)




function eliminarCajaResumen(){
    //Si existe la caja o el div...
    if(div !== null){
        var parent = div.parentElement;
        parent.removeChild(div);
    }else{
        alert ("No existe la caja previamente creada.");
    }
}
