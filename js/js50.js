const btn50 = document.querySelector(".btn50")

const puntuacionFinal = document.getElementById("puntuacionFinal")
const desaciertoFinal = document.getElementById("desaciertoFinal")
const puntajeTotal = document.getElementById("puntajeTotal")

let puntuacion =()=>{
        // Puntos acierto
    const PuntosAcierto = document.getElementById("PuntosAcierto")

    let p8 = localStorage.getItem('puntuacion8');
    let p26 = localStorage.getItem('puntuacion26');
    let p33 = localStorage.getItem('puntuacion33');
    let p39 = localStorage.getItem('puntuacion39');
    let p43 = localStorage.getItem('puntuacion43');

    let resultado =  parseInt(p8) + parseInt(p26) + parseInt(p33) + parseInt(p39) + parseInt(p43) 
    puntajeTotal.innerHTML = `¡${resultado}! puntos`

    let resto = (parseInt(p8) + parseInt(p26) + parseInt(p33) + parseInt(p39) + parseInt(p43))/10 
    
    puntuacionFinal.innerHTML =`${resto}`
    desaciertoFinal.innerHTML =`${5 - resto  }`

}

btn50.addEventListener("click",puntuacion)


