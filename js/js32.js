
let termino32 = false

var refexito = new Audio();
refexito.src="./sonidos/EXITO_DINAMICAS.mp3";

var refnoexito = new Audio();
refnoexito.src="./sonidos/ERROR_DINAMICAS.mp3";

var pagina24dinamicacorrecta = new Audio();
pagina24dinamicacorrecta.src="./sonidos/Pagina24/pagina24dinamicacorrecta.mp3";

var pagina24dinamicaINcorrecta = new Audio();
pagina24dinamicaINcorrecta.src="./sonidos/Pagina24/pagina24dinamicaINcorrecta.mp3";


let answer32 = () =>{

    // -------- mergentes--------
    let puntos32 = document.getElementById("puntos32ID")
    let nopuntos32 = document.getElementById("noPuntos32ID")

        
    let answers = document.querySelectorAll('.answer32')
    let answersTrue1 = document.querySelector('.answerTrue132')
    let answersTrue2 = document.querySelector('.answerTrue232')
    let answersTrue3 = document.querySelector('.answerTrue332')
    let answersFalse1 = document.querySelector('.answerFalse132')
    let answersFalse2 = document.querySelector('.answerFalse232')
    let answersFalse3 = document.querySelector('.answerFalse332')
    // let answersFalse = document.querySelectorAll('.answerFalse')


    if(document.querySelector('input[name="proof32_1"]:checked')
    && document.querySelector('input[name="proof32_2"]:checked')
    && document.querySelector('input[name="proof32_3"]:checked')
    && !termino32
    ){

        if(document.querySelector('input[name="proof32_1"]:checked').value == "VERDADERO"
        && document.querySelector('input[name="proof32_2"]:checked').value == "VERDADERO"
        && document.querySelector('input[name="proof32_3"]:checked').value  == "FALSO"
        ){
            console.log("todas estan buenas")
            termino32 = true

            for (let i = 0; i < answers.length; i++) {
                answers[i].disabled=true;
                
            }

            setTimeout(() => {
                answersTrue1.style.background = "#8fed8f"
                answersTrue2.style.background = "#8fed8f"
                answersTrue3.style.background = "#8fed8f"

            }, 1500);

            localStorage.setItem("puntuacion26", 10);
            puntos32.classList.remove("emergentesreturn");
            puntos32.classList.add("emergentes"); 
            refexito.play()
            pagina24dinamicacorrecta.play()
            setTimeout(function(){ 
                puntos32.classList.remove("emergentes");
                puntos32.classList.add("emergentesreturn");
          
            }, 7000);

            
            setTimeout(() => {
                ref32.pause()
                document.getElementById(`proof32`).classList.remove('beforeUP');
                document.getElementById(`proof41`).classList.remove('beforeUP');
                document.getElementById(`proof41`).classList.remove('before2UP');
                document.getElementById(`proof32`).classList.remove('next2UP');
                document.getElementById(`proof32`).style.left = "0%"
                document.getElementById(`proof32`).classList.add('nextUP');
                document.getElementById(`proof41`).classList.add('next2UP');

                document.querySelector(".containerProof41").classList.add("containerProof41animate")
                document.querySelector(".tituleProof41").classList.add("tituleProof41animate")

                
                // proof 32
                var ref41 = new Audio();
                ref41.src="./sonidos/Pagina25/pagina25.mp3";
                ref41.play()
                setTimeout(() => {

                    // proof 40    
                    var ref40 = new Audio();
                    ref40.src="./sonidos/Pagina26/pagina26.mp3";
                    ref40.play()
    
                    document.getElementById(`proof41`).classList.remove('beforeUP');
                    document.getElementById(`proof40`).classList.remove('beforeUP');
                    document.getElementById(`proof40`).classList.remove('before2UP');
                    document.getElementById(`proof41`).classList.remove('next2UP');
                    // document.getElementById(proof41).style.left = "0%"
                    document.getElementById(`proof41`).classList.add('nextUP');
                    document.getElementById(`proof40`).classList.add('next2UP');

                    setTimeout(() => {
                        document.getElementById(`paginaproof40`).style.display ="block"
                    }, 29000);

                    
                }, 13500);


        
                // document.getElementById(`paginaproof41`).style.display ="block"

    
            }, 9000);
            


        } else {

            setTimeout(() => {
                if(document.querySelector('input[name="proof32_1"]:checked').value == "VERDADERO"){
                    document.querySelector('.answerTrue132').style.background = "#8fed8f"
                    let color1  = document.querySelectorAll('input[name="proof32_1"]')
                    console.log(color1)
                    if(color1){
                        for (let i = 0; i < color1.length; i++) {
                            color1[i].disabled = true;
                            
                        }
    
                    }
                } else {
                    let color1  = document.querySelectorAll('input[name="proof32_1"]')
                    console.log(color1)
                    if(color1){
                        for (let i = 0; i < color1.length; i++) {
                            color1[i].checked = 0;
                        }
    
                    }
                }

                if(document.querySelector('input[name="proof32_2"]:checked').value == "VERDADERO"){
                    document.querySelector('.answerTrue232').style.background = "#8fed8f"
                    let color2  = document.querySelectorAll('input[name="proof32_2"]')
                    if(color2){
                        for (let i = 0; i < color2.length; i++) {
                            color2[i].disabled = true;
    
                    }
                        
                    }
                } else {
                    let color2  = document.querySelectorAll('input[name="proof32_2"]')
                    console.log(color2)
                    if(color2){
                        for (let i = 0; i < color2.length; i++) {
                            color2[i].checked = 0;
                        }
                    }
                }

                if(document.querySelector('input[name="proof32_3"]:checked').value == "FALSO"){
                    document.querySelector('.answerTrue332').style.background = "#8fed8f"
                    let color3  = document.querySelectorAll('input[name="proof32_3"]')
                    if(color3){
                        for (let i = 0; i < color3.length; i++) {
                            color3[i].disabled = true;
                            
                        }
    
                    }

                } else{
                    let color3  = document.querySelectorAll('input[name="proof32_3"]')
                    if(color3){
                        for (let i = 0; i < color3.length; i++) {
                            color3[i].checked = 0;
                            
                        }
    
                    }

                }
                    
            }, 1500);

            nopuntos32.classList.remove("emergentesreturn");
            nopuntos32.classList.add("emergentes"); 
            refnoexito.play()
            pagina24dinamicaINcorrecta.play()
            setTimeout(function(){ 
                nopuntos32.classList.remove("emergentes");
                nopuntos32.classList.add("emergentesreturn");
                // paginaproof26.style.display = "block" 
                // terminadoJuego = true
            }, 5000);
            }

    }
    

}


// answerPrincipal.forEach((answer) => {
//     answer.addEventListener('click', () => {
//         answer32
//     })
// })

// answerPrincipal.addEventListener("onfocus", answer32)
proof32.addEventListener("click", answer32)


