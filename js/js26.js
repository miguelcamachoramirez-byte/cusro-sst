
let parentezco = document.getElementById("parentezco")
let btn26 = document.getElementById("btn26")
let btn26a = document.getElementById("btn26a")
let btn26b = document.getElementById("btn26b")
let btn26dos = document.getElementById("btn26dos")

const mano = document.querySelector(".mano")

let recorrio = false

let grado = document.getElementById("grado")

let ref26c1bool = false
let ref26c2bool = false
let ref26c3bool = false

let ref26dbool = false


// proof 26
var ref26c1 = new Audio();
ref26c1.src="./sonidos/Pagina15/15c1.mp3";

var ref26c2 = new Audio();
ref26c2.src="./sonidos/Pagina15/15c2.mp3";

var ref26c3 = new Audio();
ref26c3.src="./sonidos/Pagina15/15c3.mp3";

var ref26d = new Audio();
ref26d.src="./sonidos/Pagina15/15d.mp3";

var ref26e = new Audio();
ref26e.src="./sonidos/Pagina15/15e.mp3";


let transition26uno = () =>{
    if(!ref26c1bool){
        ref26c1.play()
        ref26c1bool = true
        setTimeout(() => {
            document.getElementById("btn26").style.display = "block"
        }, 17000);
    }
    let consanguinidad26 = document.getElementById("consanguinidad26")
    consanguinidad26.classList.add("next2")
}

parentezco.addEventListener("click", transition26uno)

let transition26unoa = () =>{
    if(!ref26c2bool){
        ref26c2.play()
        ref26c2bool = true
        setTimeout(() => {
            document.getElementById("btn26a").style.display = "block"
        }, 13000);
    }

    let consanguinidad26 = document.getElementById("consanguinidad26")
    let consanguinidad26a = document.getElementById("consanguinidad26a")

    consanguinidad26.classList.remove("next2")
    consanguinidad26.classList.add("next")
    consanguinidad26a.classList.add("next2")
}

btn26.addEventListener("click", transition26unoa)

let transition26unob = () =>{
    if(!ref26c3bool){
        ref26c3.play()
        ref26c3bool = true
        setTimeout(() => {
            document.getElementById("btn26b").style.display = "block"
        }, 9000);
    }

    let consanguinidad26a = document.getElementById("consanguinidad26a")
    let consanguinidad26b = document.getElementById("consanguinidad26b")

    consanguinidad26a.classList.remove("next2")
    consanguinidad26a.classList.add("next")
    consanguinidad26b.classList.add("next2")
}

btn26a.addEventListener("click", transition26unob)


let transition26unobClose = ()=>{
    grado.disabled = false
    grado.classList.add("grado")

    parentezco.classList.remove("clasegover")
    parentezco.disabled = true

    mano.style.display = "block"

    let consanguinidad26b = document.getElementById("consanguinidad26b")

    consanguinidad26b.classList.remove("next2")
    consanguinidad26b.classList.add("next")

    
}

btn26b.addEventListener("click", transition26unobClose)


let transition26dos = () =>{
    mano.style.display = "none"
    if(!ref26dbool){
        ref26dbool  = true
        ref26d.play()
        setTimeout(() => {
            btn26dos.style.display = "block" 
        }, 28000);
    }
    
    let consanguinidad26 = document.getElementById("consanguinidad26dos")
    consanguinidad26.classList.add("next2")
}

grado.addEventListener("click", transition26dos)



let transition26NextDos = () =>{
    let consanguinidad26dos = document.getElementById("consanguinidad26dos")

    parentezco.classList.add("clasegover")
    parentezco.disabled = false

    consanguinidad26dos.classList.remove("next2")
    consanguinidad26dos.classList.add("next")

    if (recorrio == false) {

        setTimeout(() => {
            recorrio = true
            document.getElementById(`proof26`).classList.remove('beforeUP');
            document.getElementById(`proof29`).classList.remove('before');
            document.getElementById(`proof29`).classList.remove('before2');
            document.getElementById(`proof26`).classList.remove('next2UP');
            document.getElementById(`proof26`).classList.add('nextUP');
            document.getElementById(`proof29`).classList.add('next2');

            ref26e.play()

            setTimeout(() => {
                document.getElementById(`paginaproof29`).style.display ="block"    
            }, 21000);

        }, 1000);
    }
        


}

btn26dos.addEventListener("click", transition26NextDos)





