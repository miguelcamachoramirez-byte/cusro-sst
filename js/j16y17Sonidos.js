// derechos 
var ref6_3 = new Audio();
ref6_3.src="./sonidos/referencia6/REF6/REF 6-3.mp3";
    
var ref6_4 = new Audio();
ref6_4.src="./sonidos/referencia6/REF6/REF 6-4.mp3";

var ref6_5 = new Audio();
ref6_5.src="./sonidos/referencia6/REF6/REF 6-5.mp3";

var ref6_6 = new Audio();
ref6_6.src="./sonidos/referencia6/REF6/REF 6-6.mp3";

var ref6_7 = new Audio();
ref6_7.src="./sonidos/referencia6/REF6/REF 6-7.mp3";

var ref6_8 = new Audio();
ref6_8.src="./sonidos/referencia6/REF6/REF 6-8.mp3";

var ref6_9 = new Audio();
ref6_9.src="./sonidos/referencia6/REF6/REF 6-9.mp3";

var ref6_10 = new Audio();
ref6_10.src="./sonidos/referencia6/REF6/REF 6-10.mp3";

var ref6_11 = new Audio();
ref6_11.src="./sonidos/referencia6/REF6/REF 6-11.mp3";


const derechoMedallas = document.querySelectorAll("body img.PRESEASDER")


const sonidoDerecho = (name) =>{
    switch (name) {
        case "MEDALLA-1":
            ref6_3.play()

            ref6_4.pause()
            ref6_5.pause()
            ref6_6.pause()
            ref6_7.pause()
            ref6_8.pause()
            ref6_9.pause()
            ref6_10.pause()
            ref6_11.pause()
            break;
            
        case "MEDALLA-2":
            ref6_4.play()
            
            ref6_3.pause()
            ref6_5.pause()
            ref6_6.pause()
            ref6_7.pause()
            ref6_8.pause()
            ref6_9.pause()
            ref6_10.pause()
            ref6_11.pause()
            break;
            
        case "MEDALLA-3":
            ref6_5.play()
 
            ref6_3.pause()
            ref6_4.pause()
            ref6_6.pause()
            ref6_7.pause()
            ref6_8.pause()
            ref6_9.pause()
            ref6_10.pause()
            ref6_11.pause()
            
            break;
    
        case "MEDALLA-4":
            ref6_6.play()

            ref6_3.pause()
            ref6_4.pause()
            ref6_5.pause()
            ref6_7.pause()
            ref6_8.pause()
            ref6_9.pause()
            ref6_10.pause()
            ref6_11.pause()
            break;
    
        case "MEDALLA-5":
            ref6_8.play()

            ref6_3.pause()
            ref6_4.pause()
            ref6_6.pause()
            ref6_7.pause()
            ref6_9.pause()
            ref6_10.pause()
            ref6_11.pause()
            break;
    
        case "MEDALLA-6":
            ref6_10.play()

            ref6_3.pause()
            ref6_4.pause()
            ref6_5.pause()
            ref6_6.pause()
            ref6_7.pause()
            ref6_8.pause()
            ref6_9.pause()
            ref6_11.pause()
            break;
    
        case "MEDALLA-7":
            ref6_11.play()

            ref6_3.pause()
            ref6_4.pause()
            ref6_5.pause()
            ref6_6.pause()
            ref6_7.pause()
            ref6_8.pause()
            ref6_9.pause()
            ref6_10.pause()
            break;
    
        case "MEDALLA-8":
            ref6_7.play()

            ref6_3.pause()
            ref6_4.pause()
            ref6_5.pause()
            ref6_6.pause()
            ref6_9.pause()
            ref6_8.pause()
            ref6_10.pause()
            ref6_11.pause()
            break;
    
    
        default:
            break;
    }
}


derechoMedallas.forEach((derechoImg, index) => {
    derechoImg.addEventListener('click', (event) => {
        sonidoDerecho(event.target.name)
    })
})



//deberes

    
var ref6_13 = new Audio();
ref6_13.src="./sonidos/referencia6/REF6/REF 6-13.mp3";

var ref6_14 = new Audio();
ref6_14.src="./sonidos/referencia6/REF6/REF 6-14.mp3";

var ref6_15 = new Audio();
ref6_15.src="./sonidos/referencia6/REF6/REF 6-15.mp3";

var ref6_16 = new Audio();
ref6_16.src="./sonidos/referencia6/REF6/REF 6-16.mp3";

var ref6_17 = new Audio();
ref6_17.src="./sonidos/referencia6/REF6/REF 6-17.mp3";

var ref6_18 = new Audio();
ref6_18.src="./sonidos/referencia6/REF6/REF 6-18.mp3";


const deberesMedallas = document.querySelectorAll("body img.DEBPRESEAS2")

console.log(deberesMedallas)

const sonidoDeberes = (name) =>{
    console.log(name)
    switch (name) {
        case "MEDALLA2-1":
            ref6_13.play()

            ref6_14.pause()
            ref6_15.pause()
            ref6_16.pause()
            ref6_17.pause()
            ref6_18.pause()

            break;
            
        case "MEDALLA2-2":
            ref6_14.play()

            ref6_13.pause()
            ref6_15.pause()
            ref6_16.pause()
            ref6_17.pause()
            ref6_18.pause()
        
            break;
            
        case "MEDALLA2-3":
            ref6_15.play()
            
            ref6_13.pause()
            ref6_14.pause()
            ref6_16.pause()
            ref6_17.pause()
            ref6_18.pause()
        
            break;
    
        case "MEDALLA2-4":
            ref6_16.play()

            ref6_13.pause()
            ref6_14.pause()
            ref6_15.pause()
            ref6_17.pause()
            ref6_18.pause()

            break;
    
        case "MEDALLA2-5":
            ref6_17.play()

            ref6_13.pause()
            ref6_14.pause()
            ref6_15.pause()
            ref6_16.pause()
            ref6_18.pause()

            break;
    
        case "MEDALLA2-6":
            ref6_18.play()

            ref6_13.pause()
            ref6_14.pause()
            ref6_15.pause()
            ref6_16.pause()
            ref6_17.pause()
            break;
    
    
        default:
            break;
    }
}


deberesMedallas.forEach((deberesImg, index) => {
    deberesImg.addEventListener('click', (event) => {
        sonidoDeberes(event.target.name)
    })
})





// lucho subir


let btnNextSonidosSilecio = document.querySelectorAll('body button#next')

const silecio = ()=>{
    console.log("silencie")
    ref6_3.pause()

    ref6_4.pause()
    ref6_5.pause()
    ref6_6.pause()
    ref6_7.pause()
    ref6_8.pause()
    ref6_9.pause()
    ref6_10.pause()
    ref6_11.pause()

}

btnNextSonidosSilecio[11].addEventListener("click", silecio)


const silecio2 = ()=>{
    ref6_18.pause()
    ref6_13.pause()
    ref6_14.pause()
    ref6_15.pause()
    ref6_16.pause()
    ref6_17.pause()

}

btnNextSonidosSilecio[12].addEventListener("click", silecio2)

