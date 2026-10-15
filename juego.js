//sonidos juego
var ref11_2 = new Audio();
ref11_2.src="./sonidos/referencias10y11/Referencia 11/REF 11-2.mp3";

var ref11_3 = new Audio();
ref11_3.src="./sonidos/referencias10y11/Referencia 11/REF 11-3.mp3";

var ref11_4 = new Audio();
ref11_4.src="./sonidos/referencias10y11/Referencia 11/REF 11-4.mp3";

var ref11_5 = new Audio();
ref11_5.src="./sonidos/referencias10y11/Referencia 11/REF 11-5.mp3";

var mario_bros_jump = new Audio();
mario_bros_jump.src="./sonidos/referencias10y11/Referencia 11/mario-bros-jump.mp3";

var mario_coin = new Audio();
mario_coin.src="./sonidos/referencias10y11/Referencia 11/mario-coin.mp3";



var suelo = 100
var grosor =  {reloj:60} 
var trex = {y:200, vy:0, gravedad:2, salto:28, vymax:9, saltando: false}
var cactus = {x:ancho +  100, y:suelo}
var nivel = {velocidad:12,puntuacion:0, muerto:false}
var nube = {x: 400, y :50, velocidad:1}
var suelog = {x: 0, y: 212}


let medallaup1 = document.getElementById("medalla1up")
let medallaup2 = document.getElementById("medalla2up")
let medallaup3 = document.getElementById("medalla3up")
let medallaup4 = document.getElementById("medalla4up")




const continuarJuego = document.querySelectorAll("body button.continuarRun") 

let ya_sali = false

// console.log(continuarJuego)

// let avanzarJuego = (name)=>{
//     switch (name) {
//         case "etapa1":
//             break;
//         case "etapa2":
            
//             break;
//         case "etapa3":
//             break;
//         case "etapa4":
//             break;
    
//         default:
//             break;
//     }
// }


// continuarJuego.forEach((continuarJuegoresbtn, index) => {
//     continuarJuegoresbtn.addEventListener('click', (event) => {
//         avanzarJuego(event.target.name)
//     })
// })



const buttonContinuar36 = document.querySelectorAll("body button.continuarRun")
const juego =  document.getElementById("saltar")


//emegente gano todo
const gano =  document.getElementById("saltosCompletosID")


// proof 36
const paginaproof36 = document.getElementById("paginaproof36")


let salirRun = (name,value) => {
    document.getElementById(`${name}`).classList.remove("emergentes236")
    document.getElementById(`${name}`).classList.add("emergentes36")
    if(name == "etapa4") {
        gano.classList.add("emergentes236")
        paginaproof36.style.display = "block"
    }
  
    nivel.velocidad = 12
    nivel.muerto = false
}

buttonContinuar36.forEach((continuar36, index) => {
    continuar36.addEventListener('click', (event) => {
        salirRun(event.target.name,event.target.value)
    })
})


var time = true
var contador = 0



let mostrarEmergente =()=> {
    // if(contador == 3) {
    //     document.getElementById(`etapa1`).classList.add("emergentes236")
    //     contador = 4
    // }
    // if(contador == 6) {
    //     document.getElementById(`etapa2`).classList.add("emergentes236")
    //     contador = 7
    //     nivel.velocidad = 13
    // }
    // if(contador == 9) {
    //     document.getElementById(`etapa3`).classList.add("emergentes236")
    //     contador = 10
    //     nivel.velocidad = 14
    // }
    // if(contador == 12) {
    //     document.getElementById(`etapa4`).classList.add("emergentes236")
    //     contador = 13
    //     nivel.velocidad = 16
    //     document.getElementById(`saltar`).classList.add("emergentes36")
    // }
}
var paseNivel1 = false
var paseNivel2 = false
var paseNivel3 = false
var paseNivel4 = false

document.addEventListener("keydown",function(event){
    
    if(event.code ==  "Space" ||   event.key ==  "Space character" ) {
        if(nivel.muerto == false){
            saltar()
            nivel.velocidad = 12
            console.log(nivel.muerto)
        } 
        // else { 
        //     nivel.velocidad = 12
        //     nivel.muerto = false
        //     nube.velocidad = 1
        //     cactus.x = ancho + 100
        //     nube.x = ancho + 100
        // }

    }
})

var imgRex, imgNube, imgCactus,imgCirculo, imgSuelo,number1;



setInterval(() => {
    if(time){
        time= false
    } else {
        time= true
    }
}, 500);




function cargaImagenes () {
    imgRex = new Image()
    imgNube = new Image()
    imgCactus = new Image()
    imgSuelo =new Image()
    imgCirculo =new Image()

    if(trex.saltando){
        imgRex.src = "imgjuego/up.png"
        
    } else {
        if(time){
            imgRex.src = "imgjuego/run1.png"    
        } else {
            imgRex.src = "imgjuego/run2.png"    
        }
        
    }

    if(contador == 2){
        imgCactus.src = `imgjuego/medallas/TROFEO.png`
        grosor.reloj = 100
    } else if (contador == 5){
        imgCactus.src = `imgjuego/medallas/TROFEO.png`

        grosor.reloj = 100
    } else if(contador == 8){
        imgCactus.src = `imgjuego/medallas/TROFEO.png`

        grosor.reloj = 100
    } else if(contador == 11){

        imgCactus.src = `imgjuego/medallas/TROFEO.png`
        grosor.reloj = 100
    }
    else if(contador % 2 == 0){
        imgCactus.src = `imgjuego/clock0.png`
        grosor.reloj = 120      
    } else {
        imgCactus.src = "imgjuego/clock1.png"  
        grosor.reloj = 120
    }

    imgNube.src = "imgjuego/nube.png"
    // imgCactus.src = `imgjuego/clock${number1}.png`
    // imgCactus.src = `imgjuego/clock0.png`
    // imgSuelo.src = "imgjuego/suelo.jpg"
    imgSuelo.src = "imgjuego/PISTA.png"

}

var ancho = 1000
var alto = 400

var seguir = true

var canvas,ctx;

function inicializa () {
    canvas = document.getElementById("canvas")
    ctx = canvas.getContext("2d");
    ctx.fillRect(0, 0, ancho, alto);
    ctx.fillStyle = "#F4F4F4";
    cargaImagenes()
}

function borraCanvas (){
    canvas.width = 700
    canvas.heigth = 300
}



var suelo =180
var trex = {y:200, vy:0, gravedad:2, salto:28, vymax:9, saltando: false}
var cactus = {x:ancho +  100, y:270}
var circulo = {x:ancho +  100, y:200}
var nivel = {velocidad:8,puntuacion:0, muerto:false}
var nube = {x: 400, y :50, velocidad:1}
var suelog = {x: 0, y: 352}




// ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
function dibujarCactus(){
    ctx.drawImage(imgCactus,0,0,300,264,cactus.x, cactus.y,grosor.reloj,100)
}

function logicaCactus (){
    if(cactus.x < -100){
        cactus.x = ancho + 100
        contador = contador +1
        console.log(contador)
    } else {
        cactus.x -= nivel.velocidad
    }
}

// ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);

function dibujarSuelo(){
    ctx.drawImage(imgSuelo,suelog.x,0,1799,48,0,suelog.y,1799,48)
}

function logicaSuelo(){
    if(suelog.x > 1000){
        suelog.x = 0
    } else{
        suelog.x += nivel.velocidad
    }
}

function saltar(){
    mario_bros_jump.play()
    trex.saltando = true
    trex.vy = trex.salto
}

// ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
function dibujarRex (){
    ctx.drawImage(imgRex,0,0,250,457,100,trex.y,100,200)
}


function gravedad (){
    if(trex.saltando  == true){
        if (trex.y - trex.vy -trex.gravedad > 200) {
            trex.saltando = false
            trex.vy = 0
            trex.y =200
        } else {
            trex.vy -= trex.gravedad
            trex.y -= trex.vy
        }
    }
}

function colision(){
 
    if(contador == 2 && cactus.x >= 100 && cactus.x <= 150){
        medallaup1.style.visibility = "visible"
        mario_coin.play()
        document.getElementById(`etapa1`).classList.add("emergentes236")
        setTimeout(() => {
            ref11_2.play()
        }, 1500);
        setTimeout(() => {
            continuarJuego[0].style.visibility = "visible";
            nivel.muerto = false
        },16000); 
        setTimeout(() => {
            contador=3    
        }, 1000);
        
    }
    if(contador == 5 && cactus.x >= 100 && cactus.x <= 150){
        medallaup2.style.visibility = "visible"
        mario_coin.play()
        document.getElementById(`etapa2`).classList.add("emergentes236")
        setTimeout(() => {
            ref11_3.play()
        }, 1500);
        setTimeout(() => {
            continuarJuego[1].style.visibility = "visible";
            nivel.muerto = false
        },24000);
        setTimeout(() => {
            contador=6    
        }, 1000);
        
    }
    if(contador == 8 && cactus.x >= 100 && cactus.x <= 150){
        medallaup3.style.visibility = "visible"
        mario_coin.play()
        setTimeout(() => {
            ref11_4.play()
        }, 1500);
        document.getElementById(`etapa3`).classList.add("emergentes236")
        setTimeout(() => {
            continuarJuego[2].style.visibility = "visible";
            nivel.muerto = false
        },10000);
        setTimeout(() => {
            contador=9    
        }, 1000);
        
    }
    if(contador == 11 && cactus.x >= 100 && cactus.x <= 150){
        medallaup4.style.visibility = "visible"
        document.getElementById(`etapa4`).classList.add("emergentes236")
        mario_coin.play()
        setTimeout(() => {
            if(!ya_sali){
                ref11_5.play()
                ya_sali = true
            }
        }, 1500);
        setTimeout(() => {
            contador=12    
        }, 1000);

     
        
        setTimeout(() => {
            continuarJuego[3].style.visibility = "visible";
        },26000);
      

    
    }
    if(cactus.x >= 100 && cactus.x <= 150){
        if(trex.y >= suelo-25){
            nivel.muerto = true
            nivel.velocidad = true
            nivel.velocidad = 0

            setTimeout(() => {
                nivel.velocidad = 12
                nivel.muerto = false
                cactus.x = ancho + 100
            }, 300);
         
        }
    }

  
}

var FPS = 50

setInterval(function(){
    if(seguir){
        principal()
    }
},1000/FPS)





function principal () {
    inicializa()
    // borraCanvas()
    gravedad()
    colision()
    dibujarSuelo()
    logicaSuelo()
    dibujarCactus()
    mostrarEmergente()
    // dibujarCactus2()
    // logicaCactus2()
    // dibujarNube()
    dibujarRex()
    logicaCactus()

}