// sonidos
var REF8_1 = new Audio();
REF8_1.src="./sonidos/Referencia 8/REF 8-1.mp3";
var REF8_2 = new Audio();
REF8_2.src="./sonidos/Referencia 8/REF 8-2.mp3";
var REF8_3 = new Audio();
REF8_3.src="./sonidos/Referencia 8/REF 8-3.mp3";
var REF8_4 = new Audio();
REF8_4.src="./sonidos/Referencia 8/REF 8-4.mp3";
var REF8_5 = new Audio();
REF8_5.src="./sonidos/Referencia 8/REF 8-5.mp3";
var REF8_6 = new Audio();
REF8_6.src="./sonidos/Referencia 8/REF 8-6.mp3";

//inout radio de los botones
const saltoNiveles = document.querySelectorAll('body input.saltoNivel')

//botnones de salir
const salirNiveles = document.querySelectorAll('body button.salirId')

//sombra principal
const sombra = document.getElementById("sombra")


// salir NIvel6ID
const NIvel6IDSalir = document.getElementById("Salir21end")

//Z INDEX
const paginaproof21NextBefore = document.querySelectorAll("#paginaproof21 button")

//paginaproof21
const paginaproof21 = document.getElementById("paginaproof21")

const nivelesZinde21 = document.querySelector(".logo")

let seguir21 = () =>{
    paginaproof21.style.display = "block" 
}



NIvel6IDSalir.addEventListener("click", seguir21)


//cambio en ps 21
let retornarZ = () =>{
    nivelesZinde21.style.zIndex = "100"
}

paginaproof21NextBefore.forEach((zEvent, index) => {
    zEvent.addEventListener('click', (event) => {
        retornarZ()
    })
})



//cada uno de los nivles
const Nivel1 = document.getElementById('Nivel1ID')
const Nivel2 = document.getElementById('Nivel2ID')
const Nivel3 = document.getElementById('Nivel3ID')
const Nivel4 = document.getElementById('Nivel4ID')
const Nivel5 = document.getElementById('Nivel5ID')
const Nivel6 = document.getElementById('Nivel6ID')

//superaste todos los niveles
const superados = document.getElementById("todosNivelesID")

saltoNiveles[0].disabled=true;
saltoNiveles[1].disabled=true;
saltoNiveles[2].disabled=true;
saltoNiveles[3].disabled=true;
saltoNiveles[4].disabled=true;

// saltos
//medallas incremento 
let salto1 = false
let salto2 = false
let salto3 = false
let salto4 = false
let salto5 = false
let salto6 = false
let salto7 = false
let salto8 = false

//boton de seiguiente 

const buttonsSaltoNiveles = document.querySelectorAll('body .siguienteNivelbutton')


//niveles 
let nivel1Cambiante = document.getElementById("nivel1Cambiante")
let nivel2Cambiante = document.getElementById("nivel2Cambiante")
let nivel3Cambiante = document.getElementById("nivel3Cambiante")
let nivel4Cambiante = document.getElementById("nivel4Cambiante")
let nivel5Cambiante = document.getElementById("nivel5Cambiante")
let nivel6Cambiante = document.getElementById("nivel6Cambiante")


let Niveles = (id) => {
    // fondotext.style.background ="white"
    sombra.classList.add("emergenteSalto2") 

    switch (id) {
        case "salto1":
            Nivel1.classList.add("emergenteSalto2")
            // REF8_1.play()
            nivel1Cambiante.play()
            if(!salto1){
                setTimeout(() => {
                    buttonsSaltoNiveles[0].style.visibility = "visible"
                    salto1 = true
                }, 40000);
            } else {
                buttonsSaltoNiveles[0].style.visibility = "hidden"
            }
            // salirNiveles[0].style.display = "block"
            break;
        case "salto2":
            Nivel2.classList.add("emergenteSalto2")
            saltoNiveles[1].checked=false;
                nivel2Cambiante.play()
            break;
        case "salto3":
            Nivel3.classList.add("emergenteSalto2")
            saltoNiveles[2].checked=false;
            nivel3Cambiante.play()
            break;
        case "salto4":
            Nivel4.classList.add("emergenteSalto2")
            saltoNiveles[3].checked=false;
            nivel4Cambiante.play()
            break;
        case "salto5":
            Nivel5.classList.add("emergenteSalto2")
            saltoNiveles[4].checked=false;
            nivel5Cambiante.play()
            break;
        case "salto6":
            NIvel6IDSalir.style.visibility = "visible"
            Nivel6.classList.add("emergenteSalto2")
            saltoNiveles[5].checked=false;
            nivel6Cambiante.play()
            break;
    }
}

saltoNiveles.forEach((salto, index) => {
    salto.addEventListener('click', (event) => {
        Niveles(event.target.id)
    })
})


//botones de saltos entre nivels
const siguiente1 = document.getElementById("siguienteNivel1")
const siguiente2 = document.getElementById("siguienteNivel2")
const siguiente3 = document.getElementById("siguienteNivel3")
const siguiente4 = document.getElementById("siguienteNivel4")
const siguiente5 = document.getElementById("siguienteNivel5")
const siguiente6 = document.getElementById("siguienteNivel6")




let oprimi1 = false
let oprimi2 = false
let oprimi3 = false
let oprimi4 = false
let oprimi5 = false
let oprimi6 = false

let salir = false


let entreNiveles = (name) => {
    console.log(name)
    buttonsSaltoNiveles[0].style.visibility = "hidden"
    buttonsSaltoNiveles[1].style.visibility = "hidden"
    buttonsSaltoNiveles[2].style.visibility = "hidden"
    buttonsSaltoNiveles[3].style.visibility = "hidden"
    buttonsSaltoNiveles[4].style.visibility = "hidden"
    buttonsSaltoNiveles[5].style.visibility = "hidden"
    switch (name) {
        case "Nivel1ID": //pl
            nivel2Cambiante.play()
            // REF8_1.pause()
            nivel1Cambiante.pause()
            saltoNiveles[0].disabled=false;
            Nivel2.classList.add("nextNivel2")
            if(!salto2){
                setTimeout(() => {
                    buttonsSaltoNiveles[1].style.visibility = "visible"
                    salto2 = true
                }, 40000);
       
            } else {
                buttonsSaltoNiveles[1].style.visibility = "visible"
            }

            break;
        case "Nivel2ID":
            // Nivel2.classList.remove("nextNivel2")
            nivel3Cambiante.play()
            nivel2Cambiante.pause()
            saltoNiveles[1].disabled=false;
            Nivel3.classList.add("nextNivel2")
            if(!salto3){
                setTimeout(() => {
                    buttonsSaltoNiveles[2].style.visibility = "visible"
                    salto3 = true
                },23000);
  
            } else {
                buttonsSaltoNiveles[2].style.visibility = "visible"
            }


            break;
        case "Nivel3ID":
            // Nivel3.classList.remove("nextNivel2")
            nivel4Cambiante.play()
            nivel3Cambiante.pause()
            saltoNiveles[2].disabled=false;
            Nivel4.classList.add("nextNivel2")
            if(!salto4){
                setTimeout(() => {
                    buttonsSaltoNiveles[3].style.visibility = "visible"
                    salto4 = true
                },23000);
  
            } else {
                buttonsSaltoNiveles[3].style.visibility = "visible"
            }


            break;
        case "Nivel4ID":
            // Nivel4.classList.remove("nextNivel2")
            nivel5Cambiante.play()
            nivel4Cambiante.pause()
            saltoNiveles[3].disabled=false;
            Nivel5.classList.add("nextNivel2")
            if(!salto5){
                setTimeout(() => {
                    buttonsSaltoNiveles[4].style.visibility = "visible"
                    salto5 = true
                },20000);

            } else {
                buttonsSaltoNiveles[4].style.visibility = "visible"
            }


            break;
        case "Nivel5ID":
            // Nivel5.classList.remove("nextNivel2")
            nivel6Cambiante.play()
            nivel5Cambiante.pause()
            saltoNiveles[4].disabled=false;
            Nivel6.classList.add("nextNivel2")
            if(!salto6){
                setTimeout(() => {
                    buttonsSaltoNiveles[5].style.visibility = "visible"
                    salto6 = true
                },29000);
 
            } else {
                buttonsSaltoNiveles[5].style.visibility = "visible"
            }

            break;
        case "Nivel6ID":
            nivel6Cambiante.pause()

            saltoNiveles[5].disabled=false;
            Nivel6.classList.remove("nextNivel2")
            Nivel5.classList.remove("nextNivel2")
            Nivel4.classList.remove("nextNivel2")
            Nivel5.classList.remove("nextNivel2")
            Nivel3.classList.remove("nextNivel2")
            Nivel2.classList.remove("nextNivel2")
            Nivel1.classList.remove("emergenteSalto2")
            Nivel1.classList.add("emergenteSalto")
            Nivel2.classList.remove("emergenteSalto2")
            Nivel2.classList.add("emergenteSalto")
            Nivel3.classList.remove("emergenteSalto2")
            Nivel3.classList.add("emergenteSalto")
            Nivel4.classList.remove("emergenteSalto2")
            Nivel4.classList.add("emergenteSalto")
            Nivel5.classList.remove("emergenteSalto2")
            Nivel5.classList.add("emergenteSalto")
            Nivel6.classList.remove("emergenteSalto2")
            Nivel6.classList.remove("emergenteSalto")
            salirNiveles[0].style.display = "block"
            salirNiveles[1].style.display = "block"
            salirNiveles[2].style.display = "block"
            salirNiveles[3].style.display = "block"
            salirNiveles[4].style.display = "block"
            sombra.classList.remove("emergenteSalto2")
            sombra.classList.add("emergenteSalto")
            //esta en proof10 css
            superados.classList.add("emergentes2")
            setTimeout(function(){ 
            superados.classList.remove("emergentes2");
            superados.classList.add("emergentes"); }, 2500);
            break;
    }
}

buttonsSaltoNiveles.forEach((saltoNiveles, index) => {
    saltoNiveles.addEventListener('click', (event) => {
        entreNiveles(event.target.name)
    })
})


let salirEntreNiveles = (name) => {
    nivel1Cambiante.pause()
    nivel2Cambiante.pause()
    nivel3Cambiante.pause()
    nivel4Cambiante.pause()
    nivel5Cambiante.pause()
    nivel6Cambiante.pause()
    Nivel6.classList.remove("nextNivel2")
    Nivel5.classList.remove("nextNivel2")
    Nivel4.classList.remove("nextNivel2")
    Nivel5.classList.remove("nextNivel2")
    Nivel3.classList.remove("nextNivel2")
    Nivel2.classList.remove("nextNivel2")
    Nivel1.classList.remove("emergenteSalto2")
    Nivel1.classList.add("emergenteSalto")
    Nivel2.classList.remove("emergenteSalto2")
    Nivel2.classList.add("emergenteSalto")
    Nivel3.classList.remove("emergenteSalto2")
    Nivel3.classList.add("emergenteSalto")
    Nivel4.classList.remove("emergenteSalto2")
    Nivel4.classList.add("emergenteSalto")
    Nivel5.classList.remove("emergenteSalto2")
    Nivel5.classList.add("emergenteSalto")
    sombra.classList.remove("emergenteSalto2")
    sombra.classList.add("emergenteSalto")

}

salirNiveles.forEach((salirSaltoNiveles, index) => {
    salirSaltoNiveles.addEventListener('click', (event) => {
        salirEntreNiveles(event.target.name)
    })
})

