var refexito = new Audio();
refexito.src="./sonidos/EXITO_DINAMICAS.mp3";

var refnoexito = new Audio();
refnoexito.src="./sonidos/ERROR_DINAMICAS.mp3";

var pagina17dinamicacorrecta = new Audio();
pagina17dinamicacorrecta.src="./sonidos/Pagina17/pagina17dinamicacorrecta.mp3";

var pagina17dinamicaINcorrecta = new Audio();
pagina17dinamicaINcorrecta.src="./sonidos/Pagina17/pagina17dinamicaINcorrecta.mp3";

/**
 * 
 * 
* Función que se ejecuta al arrastrar el elemento. 
**/
function start332(e) {
    e.dataTransfer.effecAllowed = 'move'; // Define el efecto como mover (Es el por defecto)
    e.dataTransfer.setData("Text", e.target.id); // Coje el elemento que se va a mover
    e.target.style.opacity = '0.4'; 
  }
  
  /**
  * Función que se ejecuta se termina de arrastrar el elemento. 
  **/
  function end33(e){
    e.target.style.opacity = ''; // Restaura la opacidad del elemento     
    e.dataTransfer.clearData("Data");     
  }
  
  /**
  * Función que se ejecuta cuando un elemento arrastrable entra en el elemento desde del que se llama. 
  **/
  function enter33(e) {
    return true;
  }
  
  /**
  * Función que se ejecuta cuando un elemento arrastrable esta sobre el elemento desde del que se llama. 
  * Devuelve false si el objeto se puede soltar en ese elemento y true en caso contrario.
  **/
  function over33(e) {
    if ((e.target.className == "contenedorPieza33") || (e.target.className == "contenedorPiezas33")){
      return false;
    } else{
        return true;
    }
  
  }

  /**
  * Función que se ejecuta cuando un elemento arrastrable se suelta sobre el elemento desde del que se llama. 
  **/
  function drop33(e){
    let hijos = document.querySelectorAll(".contenedorPieza33 img")
    e.preventDefault(); // Evita que se ejecute la accion por defecto del elemento soltado.
    var elementoArrastrado = e.dataTransfer.getData("Text");
    // if(hijos.length < 4){
    e.target.appendChild(document.getElementById(elementoArrastrado)); // Coloca el elemento soltado sobre el elemento desde el que se llamo esta funcion
    // }

    comprobarPuzzle33();

  }

function drop331(e){
    var elementoArrastrado = e.dataTransfer.getData("Text");
    if(elementoArrastrado == "pieza331"){
        e.target.appendChild(document.getElementById(elementoArrastrado));
    }
}

function drop332(e){
    var elementoArrastrado = e.dataTransfer.getData("Text");
    if(elementoArrastrado == "pieza332"){
        e.target.appendChild(document.getElementById(elementoArrastrado));
    }
}
function drop333(e){
    var elementoArrastrado = e.dataTransfer.getData("Text");
    if(elementoArrastrado == "pieza333"){
        e.target.appendChild(document.getElementById(elementoArrastrado));
    }
}
function drop334(e){
    var elementoArrastrado = e.dataTransfer.getData("Text");
    if(elementoArrastrado == "pieza3334"){
        e.target.appendChild(document.getElementById(elementoArrastrado));
    }
}
function drop335(e){
    var elementoArrastrado = e.dataTransfer.getData("Text");
    if(elementoArrastrado == "pieza335"){
        e.target.appendChild(document.getElementById(elementoArrastrado));
    }
}
function drop336(e){
    var elementoArrastrado = e.dataTransfer.getData("Text");
    if(elementoArrastrado == "pieza336"){
        e.target.appendChild(document.getElementById(elementoArrastrado));
    }
}
function drop337(e){
    var elementoArrastrado = e.dataTransfer.getData("Text");
    if(elementoArrastrado == "pieza337"){
        e.target.appendChild(document.getElementById(elementoArrastrado));
    }
}
function drop338(e){
    var elementoArrastrado = e.dataTransfer.getData("Text");
    if(elementoArrastrado == "pieza338"){
        e.target.appendChild(document.getElementById(elementoArrastrado));
    }
}

let juego1 = false
let juego2 = false
let juego3 = false
let juego4 = false


// proof 34
var ref34 = new Audio();
ref34.src="./sonidos/Pagina18/pagina18.mp3";

var ref34b = new Audio();
ref34b.src="./sonidos/Pagina18/18b.mp3";

  
  function comprobarPuzzle33(){
    // -----text Change---------
    let textChange33 = document.getElementById("textChange33")

      let puntos6 = document.getElementById("puntos33ID")
      let nopuntos6 = document.getElementById("noPuntos33ID")
    // ---------div final de la pieza----------
      let uno33 = document.getElementById('uno33')
      let dos33 = document.getElementById('dos33')
      let tres33 = document.getElementById('tres33')
      let cuatro33 = document.getElementById('cuatro33')

    //   -----div inicial de la img------------
      let contenedorPieza331 = document.getElementById('contenedorPieza331')
      let contenedorPieza332 = document.getElementById('contenedorPieza332')
      let contenedorPieza333 = document.getElementById('contenedorPieza333')
      let contenedorPieza334 = document.getElementById('contenedorPieza334')
      let contenedorPieza335 = document.getElementById('contenedorPieza335')
      let contenedorPieza336 = document.getElementById('contenedorPieza336')
      let contenedorPieza337 = document.getElementById('contenedorPieza337')
      let contenedorPieza338 = document.getElementById('contenedorPieza338')

    //   ----las img moviendose------
      let pieza331 = document.getElementById('pieza331')
      let pieza332 = document.getElementById('pieza332')
      let pieza333 = document.getElementById('pieza333')
      let pieza334 = document.getElementById('pieza334')
      let pieza335 = document.getElementById('pieza335')
      let pieza336 = document.getElementById('pieza336')
      let pieza337 = document.getElementById('pieza337')
      let pieza338 = document.getElementById('pieza338')

    //   ----parrafos----------
      let questionuno = document.getElementById("questionuno")
      let questiondos = document.getElementById("questiondos")
      let questiontres = document.getElementById("questiontres")
      let questioncuatro = document.getElementById("questioncuatro")

    //   -----------pregunta 1----------------
      if (document.getElementById('pieza332').parentNode.id=='uno33' && juego1 == false ) {
        juego1 = true
        contenedorPieza332.style.background = "#5fff2f"
        pieza332.style.display = "none"
        uno33.style.background = "no-repeat center/140% url(/img/PAG-16/Agray.png)";

        setTimeout(() => {
            textChange33.innerHTML = "Las Personas Expuestas Políticamente son:"
            dos33.style.display = "block"
            questionuno.style.display = "none"
            questiondos.style.display = "block"
        }, 1000);

      } 
// --------------pregunta dos-----------
      else if (document.getElementById('pieza333').parentNode.id=='dos33' && !juego2) {
            console.log(questiontres)
        juego2 = true
        contenedorPieza333.style.background = "#5fff2f"
        pieza333.style.display = "none"
        dos33.style.background = "no-repeat center/140% url(/img/PAG-16/Bgray.png)";
        setTimeout(() => {
            textChange33.innerHTML = "Una persona puede beneficiarse de un individuo PEP:"
            tres33.style.display = "block"
            questiondos.style.display = " none"
            questiontres.style.display = " block"

        }, 1000);
      } 

// --------------pregunta tres-----------
      else if (document.getElementById('pieza335').parentNode.id=='tres33' && !juego3) {
        juego3 = true
        contenedorPieza335.style.background = "#5fff2f"
        pieza335.style.display = "none"
        tres33.style.background = "no-repeat center/140% url(/img/PAG-16/Cgray.png)";
        setTimeout(() => {
            textChange33.innerHTML = "Los familiares y asociados cercanos de las PEP gozan de:"
            cuatro33.style.display = "block"
            questiontres.style.display = " none"
            questioncuatro.style.display = " block"

        }, 1000);
      } 

// --------------pregunta cuatro-----------


      else if (document.getElementById('pieza338').parentNode.id=='cuatro33' && !juego4) {
        juego4 = true
        contenedorPieza338.style.background = "#5fff2f"
        pieza338.style.display = "none"
        cuatro33.style.background = "no-repeat center/140% url(/img/PAG-16/Dgray.png)";
        
        puntos6.classList.remove("emergentesreturn");
        puntos6.classList.add("emergentes"); 
        refexito.play()
        pagina17dinamicacorrecta.play()
  
        setTimeout(() => {
            puntos6.classList.remove("emergentes");
            puntos6.classList.add("emergentesreturn");
            questioncuatro.style.display = " none"
        }, 7000);

        
  
        setTimeout(() => {
          ref34.play()
          document.getElementById(`proof33`).classList.remove('beforeUP');
          document.getElementById(`proof34`).classList.remove('beforeUP');
          document.getElementById(`proof34`).classList.remove('before2UP');
          document.getElementById(`proof33`).classList.remove('next2UP');
          document.getElementById(`proof33`).style.left = "0%"
          document.getElementById(`proof33`).classList.add('nextUP');
          document.getElementById(`proof34`).classList.add('next2UP');
  
        ref34.addEventListener("ended", function(){
              const containerProof34hidden = document.querySelector(".containerProof34hidden")
              const containerProof34show = document.querySelector(".containerProof34show")
              const tituleProof34 = document.querySelector(".tituleProof34")
          
              let medioProof34 = document.getElementById("medioProof34") 
              let fondo34 = document.getElementById("fondo34") 
          
              medioProof34.classList.add("translatefastleft")
              fondo34.classList.add("translatefastrigth")
          
              containerProof34hidden.classList.add("opacityanimateinverse")
              ref34b.play()
              containerProof34hidden.style.display = "none"
              containerProof34show.style.display = "block"
              tituleProof34.style.display = "none"
              containerProof34show.classList.add("opacityanimate")

              ref34b.addEventListener("ended", function(){
                document.getElementById(`paginaproof34`).style.display ="block"
              });
            });
      }, 9000);

      }
      
      else {
        nopuntos6.classList.remove("emergentesreturn");
        nopuntos6.classList.add("emergentes"); 
        refnoexito.play()
        pagina17dinamicaINcorrecta.play()
        setTimeout(function(){ 
            if(juego1 == false){
                contenedorPieza331.style.background = "#ea0043"
                pieza331.style.display = "none"
            }
            if(juego2 == false && juego1 == true){
                contenedorPieza334.style.background = "#ea0043"
                pieza334.style.display = "none"
                
            }
            if(juego3 == false && juego2 == true && juego1 == true){
                contenedorPieza336.style.background = "#ea0043"
                pieza336.style.display = "none"
                
            }
            if(juego4 == false && juego3 == true && juego2 == true && juego1 == true){
                contenedorPieza337.style.background = "#ea0043"
                pieza337.style.display = "none"
                
            }
            
            nopuntos6.classList.remove("emergentes");
            nopuntos6.classList.add("emergentesreturn");
            document.getElementById("contenedorPieza433").appendChild(document.getElementById("pieza133"));

        }, 6000);
      }

}
  