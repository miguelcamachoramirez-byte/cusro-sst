
let termino = false


var refexito = new Audio();
refexito.src="./sonidos/EXITO_DINAMICAS.mp3";

var refnoexito = new Audio();
refnoexito.src="./sonidos/ERROR_DINAMICAS.mp3";

var pagina13dinamicacorrecta = new Audio();
pagina13dinamicacorrecta.src="./sonidos/Pagina13/pagina13dinamicacorrecta.mp3";

var pagina13dinamicaINcorrecta = new Audio();
pagina13dinamicaINcorrecta.src="./sonidos/Pagina13/pagina13dinamicaINcorrecta.mp3";

let answer21 = () =>{

    console.log("entre")
    // -------- mergentes--------
    let puntos21 = document.getElementById("puntos21ID")
    let nopuntos21 = document.getElementById("noPuntos21ID")

        
    let answers = document.querySelectorAll('.answer')
    let answersTrue1 = document.querySelector('.answerTrue1')
    let answersTrue2 = document.querySelector('.answerTrue2')
    let answersTrue3 = document.querySelector('.answerTrue3')
    let answersFalse1 = document.querySelector('.answerFalse1')
    let answersFalse2 = document.querySelector('.answerFalse2')
    let answersFalse3 = document.querySelector('.answerFalse3')
    // let answersFalse = document.querySelectorAll('.answerFalse')


    if(document.querySelector('input[name="proof21_1"]:checked')
    && document.querySelector('input[name="proof21_2"]:checked')
    && document.querySelector('input[name="proof21_3"]:checked')
    && termino == false
    ){

        console.log("ya click all")
        if(document.querySelector('input[name="proof21_1"]:checked').value == "FALSO"
        && document.querySelector('input[name="proof21_2"]:checked').value == "VERDADERO"
        && document.querySelector('input[name="proof21_3"]:checked').value  == "VERDADERO"
        ){
            console.log("todas estan buenas")
            termino = true

            for (let i = 0; i < answers.length; i++) {
                answers[i].disabled=true;
                
            }

            setTimeout(() => {
                answersTrue1.style.background = "#8fed8f"
                answersTrue2.style.background = "#8fed8f"
                answersTrue3.style.background = "#8fed8f"

            }, 1500);

            localStorage.setItem("puntuacion21", 10);
            puntos21.classList.remove("emergentesreturn");
            puntos21.classList.add("emergentes"); 
            refexito.play()
            pagina13dinamicacorrecta.play()
            setTimeout(function(){ 
                puntos21.classList.remove("emergentes");
                puntos21.classList.add("emergentesreturn");
                // document.getElementById(`paginaproof21`).style.display ="block"

                setTimeout(() => {
    

                    let tituleProof24 = document.querySelector(".tituleProof24") 
                    let containerProof24Text = document.querySelector(".containerProof24Text") 
                
                    let tituleProof24B = document.querySelector(".tituleProof24B") 
                    let containerProof24BText = document.querySelector(".containerProof24BText") 
                
                    let subtituleProof24B = document.getElementById("subtituleProof24B")
                
                
                    setTimeout(() => {
                        containerProof24Text.classList.add("transicion24Left")
                        containerProof24BText.classList.add("transicion24LeftReturn")
                
                        tituleProof24.classList.add("transicion24Rigth")
                        tituleProof24B.classList.add("transicion24RigthReturn")
                        setTimeout(() => {
                            subtituleProof24B.classList.add("transicion24RigthReturn")
                        }, 200);

                        // proof 24
                        var ref15a = new Audio();
                        ref15a.src="./sonidos/Pagina15/pagina15a.mp3";
                        ref15a.play()
                        setTimeout(() => {
                            document.getElementById(`paginaproof24`).style.display ="block"
                        }, 18000);
                        
                    }, 27000);

            }, 4000);
                

// -------------movimiento de la 24------------         



                
          
                // terminadoJuego = true
            }, 12000);

            // ------´
  

            setTimeout(() => {
                document.getElementById(`proof21`).classList.remove('beforeUP');
                document.getElementById(`proof24`).classList.remove('beforeUP');
                document.getElementById(`proof24`).classList.remove('before2UP');
                document.getElementById(`proof21`).classList.remove('next2UP');
                document.getElementById(`proof21`).style.left = "0%"
                document.getElementById(`proof21`).classList.add('nextUP');
                document.getElementById(`proof24`).classList.add('next2UP');

                 // proof 24
                 var ref14 = new Audio();
                 ref14.src="./sonidos/Pagina14/pagina14.mp3";
                 ref14.play()
           
 

    
            }, 14000);

        } else {

            setTimeout(() => {
                if(document.querySelector('input[name="proof21_1"]:checked').value == "FALSO"){
                    document.querySelector('.answerTrue1').style.background = "#8fed8f"
                    let color1  = document.querySelectorAll('input[name="proof21_1"]')
                    console.log(color1)
                    if(color1){
                        for (let i = 0; i < color1.length; i++) {
                            color1[i].disabled = true;
                            
                        }
    
                    }
                } else {
                    let color1  = document.querySelectorAll('input[name="proof21_1"]')
                    console.log(color1)
                    if(color1){
                        for (let i = 0; i < color1.length; i++) {
                            color1[i].checked = 0;
                        }
    
                    }
                }

                if(document.querySelector('input[name="proof21_2"]:checked').value == "VERDADERO"){
                    document.querySelector('.answerTrue2').style.background = "#8fed8f"
                    let color2  = document.querySelectorAll('input[name="proof21_2"]')
                    if(color2){
                        for (let i = 0; i < color2.length; i++) {
                            color2[i].disabled = true;
    
                    }
                        
                    }
                } else {
                    let color2  = document.querySelectorAll('input[name="proof21_2"]')
                    console.log(color2)
                    if(color2){
                        for (let i = 0; i < color2.length; i++) {
                            color2[i].checked = 0;
                        }
                    }
                }

                if(document.querySelector('input[name="proof21_3"]:checked').value == "VERDADERO"){
                    document.querySelector('.answerTrue3').style.background = "#8fed8f"
                    let color3  = document.querySelectorAll('input[name="proof21_3"]')
                    if(color3){
                        for (let i = 0; i < color3.length; i++) {
                            color3[i].disabled = true;
                            
                        }
    
                    }

                } else{
                    let color3  = document.querySelectorAll('input[name="proof21_3"]')
                    if(color3){
                        for (let i = 0; i < color3.length; i++) {
                            color3[i].checked = 0;
                            
                        }
    
                    }

                }
                    
            }, 1500);

            nopuntos21.classList.remove("emergentesreturn");
            nopuntos21.classList.add("emergentes"); 
            refnoexito.play()
            setTimeout(function(){ 
                nopuntos21.classList.remove("emergentes");
                nopuntos21.classList.add("emergentesreturn");
                // paginaproof26.style.display = "block" 
                // terminadoJuego = true
            }, 8000);
            }
    }
}


// answerPrincipal.forEach((answer) => {
//     answer.addEventListener('click', () => {
//         answer21
//     })
// })

// answerPrincipal.addEventListener("onfocus", answer21)
proof21.addEventListener("click", answer21)


