let btnLetter = document.querySelectorAll('.letterShoot')
let terminadoJuego38 = false

var ref39 = new Audio();
ref39.src="./sonidos/Pagina22/pagina22.mp3";

var refexito = new Audio();
refexito.src="./sonidos/EXITO_DINAMICAS.mp3";

var refnoexito = new Audio();
refnoexito.src="./sonidos/ERROR_DINAMICAS.mp3";

var pagina21dinamicacorrecta = new Audio();
pagina21dinamicacorrecta.src="./sonidos/Pagina21/pagina21dinamicacorrecta.mp3";

var pagina21dinamicaINcorrecta = new Audio();
pagina21dinamicaINcorrecta.src="./sonidos/Pagina21/pagina21dinamicaINcorrecta.mp3";



let letterShot = (id) => { 

    let puntos38 = document.getElementById("puntos38ID")
    let nopuntos38 = document.getElementById("noPuntos38ID")
    if(terminadoJuego38 == false){

    if(id == "letterShoot4") {
        document.getElementById(id).style.color = "#00a135"
        document.getElementById(id).style.borderColor = "#00a135"
        terminadoJuego38 = true


        puntos38.classList.remove("emergentesreturn");
        puntos38.classList.add("emergentes"); 
        refexito.play()
        pagina21dinamicacorrecta.play()
        setTimeout(function(){ 
            puntos38.classList.remove("emergentes");
            puntos38.classList.add("emergentesreturn");

      
        }, 4000);

        setTimeout(() => {
            ref37.pause()
            document.getElementById(`proof38`).classList.remove('beforeUP');
            document.getElementById(`proof39`).classList.remove('beforeUP');
            document.getElementById(`proof39`).classList.remove('before2UP');
            document.getElementById(`proof38`).classList.remove('next2UP');
            document.getElementById(`proof38`).style.left = "0%"
            document.getElementById(`proof38`).classList.add('nextUP');
            document.getElementById(`proof39`).classList.add('next2UP');

            // document.getElementById(`paginaproof39`).style.display ="block"


            ref39.play()
            setTimeout(() => {
    
                const tituleProof39 = document.querySelector(".tituleProof39")
                const containerProof39TexUno = document.querySelector(".containerProof39TexUno")
                const containerProof39TexDos = document.querySelector(".containerProof39TexDos")
        
                let medio39 = document.getElementById("medio39") 
                let adelante39 = document.getElementById("adelante39") 
                let fondo39 = document.getElementById("fondo39") 
        
                medio39.classList.add("translatefastleft39")
                fondo39.classList.add("translatefastrigth39")
                adelante39.classList.add("translatefasfront39")
        
                containerProof39TexUno.classList.add("opacityanimateinverse")
                setTimeout(() => {
                    let = document.querySelector(".btn39")
                    containerProof39TexUno.style.display = "none"
                    containerProof39TexDos.style.display = "block"
                    containerProof39TexDos.classList.add("opacityanimate")
        
                    tituleProof39.style.display = "block"
                    btn39.style.display = "block"
                    tituleProof39.classList.add("opacityanimate")
        
                }, 2000);
            }, 7000);

        }, 6000);

        } else {
            document.getElementById(id).style.color = "red"
            document.getElementById(id).style.borderColor = "red"

            
            nopuntos38.classList.remove("emergentesreturn");
            nopuntos38.classList.add("emergentes"); 
            refnoexito.play()
            pagina21dinamicaINcorrecta.play()
            setTimeout(function(){ 
                nopuntos38.classList.remove("emergentes");
                nopuntos38.classList.add("emergentesreturn");

        
            }, 6000);
        }
    }

}



btnLetter.forEach((letter) => {
    letter.addEventListener('click', (event) => {
            letterShot(event.target.id)
    })
})
