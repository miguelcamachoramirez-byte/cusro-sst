let medallas = document.querySelectorAll('body img.PRESEAS')
let tituloChange = document.getElementById('futboltexttitulo') 
let parrafoChange = document.getElementById('futboltexparrafo') 
let imgChange = document.getElementById('futbolimg') 
let fondotext = document.getElementById("futboltext")


let paginaproof17 = document.getElementById("paginaproof17")

//medallas incremento 
let medalla1 = false
let medalla2 = false
let medalla3 = false
let medalla4 = false
let medalla5 = false
let medalla6 = false
let medalla7 = false
let medalla8 = false


let medallaDerecho = (name) => {
    fondotext.style.background ="white"
    switch (name) {
        case "MEDALLA-1":
            tituloChange.innerHTML ="1"
            parrafoChange.innerHTML ="Recibir la póliza o el certificado que respalda la adquisición del seguro."
            imgChange.setAttribute("src", "/img/PaG-16/Bowling_Ball.png");
            medalla1 = true
            break;
        case "MEDALLA-2":
            tituloChange.innerHTML ="2"
            parrafoChange.innerHTML ="Publicidad e información transparente, clara, veraz,  oportuna y verificable, sobre los productos <br> o servicios ofrecidos."
            imgChange.setAttribute("src", "/img/PaG-16/Boxing_Glove.png");
            medalla2 = true
            break;
        case "MEDALLA-3":
            tituloChange.innerHTML ="3"
            parrafoChange.innerHTML ="Conocer el valor de la prima del seguro y los costos asociados (como impuestos y comisiones)."
            imgChange.setAttribute("src", "/img/PaG-16/Football.png");
            medalla3 = true
            break;
        case "MEDALLA-4":
            tituloChange.innerHTML ="4"
            parrafoChange.innerHTML ="Exigir la debida diligencia en la prestación  del servicio."
            imgChange.setAttribute("src", "/img/PaG-16/Golf_Ball.png");
            medalla4 = true
            break;
        case "MEDALLA-5":
            tituloChange.innerHTML ="5"
            parrafoChange.innerHTML ="Recibir educación sobre la forma de usar los productos y  servicios ofrecidos, sus derechos y obligaciones y costos de los mismos."
            imgChange.setAttribute("src", "/img/PaG-16/Table_Tennis.png");
            medalla5 = true
            break;
        case "MEDALLA-6":
            tituloChange.innerHTML ="6"
            parrafoChange.innerHTML ="Presentar de manera respetuosa peticiones, quejas, reclamos y sugerencias."
            imgChange.setAttribute("src", "/img/PaG-16/Volleyball.png");
            medalla6 = true
            break;
        case "MEDALLA-7":
            tituloChange.innerHTML ="7"
            parrafoChange.innerHTML ="Conocer los plazos y la forma en que se debe reportar un siniestro y el proceso a seguir para tramitar la reclamación."
            imgChange.setAttribute("src", "/img/PaG-16/Tennis_Ball.png");
            medalla7 = true
            break;
        case "MEDALLA-8":
            tituloChange.innerHTML ="8"
            parrafoChange.innerHTML ="Obtener respuestas a preguntas sobre la póliza, su funcionamiento y los aspectos relacionados con el vínculo entre el cliente y la compañía de seguros"
            imgChange.setAttribute("src", "/img/PaG-16/Skateboard.png");
            medalla8 = true
            break;
       
    }
    if(medalla1 && medalla2 && medalla3 && medalla4 && medalla5 && medalla6 && medalla7 && medalla8){
        paginaproof17.style.display ="block"
    }
}

medallas.forEach((medalla, index) => {
    medalla.addEventListener('click', (event) => {
        medallaDerecho(event.target.name)
    })
})
