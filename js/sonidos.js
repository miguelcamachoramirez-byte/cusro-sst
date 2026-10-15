let btnNextSonidos = document.querySelectorAll('body button.nextBtn')
let btnBeforeSonidos = document.querySelectorAll('body button.beforeBtn')


let nivelesZindex = document.querySelector(".logo")

//pagina start
// var ref0 = new Audio();
// ref0.src="./sonidos/Pagina1/pagina1.mp3";

// proof 0
var ref1 = new Audio();
ref1.src="./sonidos/Pagina2/pagina2.mp3";





// proof 3
var ref3 = new Audio();
ref3.src="./sonidos/Pagina4/pagina4.mp3";

// proof 5
var ref5 = new Audio();
ref5.src="./sonidos/Pagina5/pagina5.mp3";

// proof 13
var ref8 = new Audio();
ref8.src="./sonidos/Pagina8/pagina8.mp3";

// proof 15
var ref9 = new Audio();
ref9.src="./sonidos/Pagina9/pagina9.mp3";


// proof 16
var ref16 = new Audio();
ref16.src="./sonidos/Pagina10/pagina10.mp3";

// proof 16
var ref17 = new Audio();
ref17.src="./sonidos/Pagina11/pagina11.mp3";

// proof 18
var ref18 = new Audio();
ref18.src="./sonidos/FONDO_SELVA.mp3";

// proof 21
var ref21 = new Audio();
ref21.src="./sonidos/Pagina13/pagina13.mp3";

// proof 24
var ref24 = new Audio();
ref24.src="./sonidos/Pagina15/15b.mp3";


// proof 30
var ref30 = new Audio();
ref30.src="./sonidos/Pagina16/pagina16.mp3";

// proof 36a
var ref36a = new Audio();
ref36a.src="./sonidos/Pagina20/pagina20a.mp3";

// proof 36b
var ref36b = new Audio();
ref36b.src="./sonidos/Pagina20/pagina20b.mp3";

// proof 30
var ref37 = new Audio();
ref37.src="./sonidos/Pagina21/Pagina21.mp3";

// proof 32
var ref32 = new Audio();
ref32.src="./sonidos/Pagina24/pagina24.mp3";

// proof 18
var refend = new Audio();
refend.src="./sonidos/FONDO_SELVA2.mp3";




let startbool = false
let proof0bool = false
let proof1bool = false
let proof2bool = false
let proof3abool = false
let proof4bool = false
let proof6bool = false
let proof8bool = false

let proof5bool =false


let proof7bool = false

let proof9bool = false

let proof11bool = false
let proof13bool = false
let proof17bool = false
let proof18bool = false
let proof21bool = false
let proof24bool = false
let proof29bool = false
let proof30bool = false
let proof32bool = false
let proof34bool = false

let proof36bool = false
let proof36abool = false

let proof37bool = false

let proof39bool = false
let proof39abool = false

let proof41bool = false

let proof42bool = false

let proof43bool = false


//juegos bool
let juego8 = false

//derechos medalla a medalla
let medallas16 = false //derechos
let medallas17 = false //deberes


// psita salto bool
let medallas20 = false

//velocidad bool
let velocidad25 = false

//velocidad bool
let pruebaAgilidad32 = false

//pista olimpica bool
let pistaOlimpica32 = false

// sanciones bool
let sanciones38 = false

//principios prientadores
let prinOrientadores = false

// sanciones bool
let canalAtencion42 = false

//derechos y deberes
let derYDeb = false

//logica escritorio
let escritorio = false

//logica cuadro arrastre
let agilidadbool = false


let auto3 = false


// console.log(btnNextSonidos)
let sonidoNext = (name, nextName,nextName2) => {
  console.log(name)
    switch (name) {
        
        case "start": // de start a prof1
            if(!startbool){
                ref0.addEventListener("ended", function(){
                    startbool = true
                    document.getElementById(`pagina${nextName}`).style.display ="block"
                    refend.play()

                });
      
            } else {
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"
                refend.play()
            }
            break

        case "proof0": // de start a prof1
            refend.pause()
            if(!proof0bool){
                proof0bool = true
                ref1.play()
                    document.getElementById(`pagina${name}`).style.display ="block"

            } else {
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"
                }
            break
        case "proof1": // de start a prof1
            refend.play()
            document.getElementById(`pagina${nextName}`).style.display ="block"
            document.getElementById(`pagina${name}`).style.display ="none"
            break


        case "proof2": // subir lucho
        refend.pause()
        if(!proof2bool){
            // ref3.play()
            document.getElementById("videoProof3").play()
            setTimeout(() => {
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"
                document.getElementById("videoProof3").style.display = "none"
                document.getElementById("videoProof3dos").style.display = "block"
                
            }, 55000);
            proof2bool = true

        } else {
            document.getElementById(`pagina${nextName}`).style.display ="block"
            document.getElementById(`pagina${name}`).style.display ="none"
            }
        break

        case "proof3": //automatica vertical
            if(!auto3){
                // setTimeout(() => {
                    ref5.play()
                    document.getElementById("videoProof3").pause()
                    document.getElementById(`pagina${nextName}`).style.display ="none"
                    auto3 = true

            // }, 5000);
            } else {
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"
            }
            break;
        

        case "proof3a":
            refend.play()
            if(!proof3abool){
            // setTimeout(() => {
                document.getElementById(`pagina${nextName}`).style.display ="none"
                proof3abool = true
            // }, 14000);
            } else {
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"
            }

            break;

        case "proof4":
            refend.pause()
            if(!proof4bool){
            // setTimeout(() => {
                
                document.getElementById(`pagina${nextName}`).style.display ="block"
                proof4bool = true
            // }, 53000);
            } else {
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"
            }

            break;


        case "proof6": // subir lucho NO SE PUEDE QUITAR
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="block"
        break;

        
        case "proof8":
            if(!proof8bool){
            // setTimeout(() => {
                ref8.play()
            //     document.getElementById(`pagina${nextName}`).style.display ="block"
                proof8bool = true
            // }, 53000);
            } else {
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"
            }

            break;
        
        case "proof13":
            if(!proof13bool){
                ref9.play()
                setTimeout(() => {
                    document.getElementById(`pagina${nextName}`).style.display ="block"
                    proof13bool = true
                }, 10000);
            } else {
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"
            }

            break;

        case "proof15": // este cambia
            if(!derYDeb){
                ref16.play()
                derYDeb = true

            } else {
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"
            }
            break;
        
        case "proof16": //NO SE MODIFICAN
        if(!proof17bool){
            ref17.play()
            setTimeout(() => {
                document.getElementById(`pagina${nextName}`).style.display ="block"    
            }, 17000);
            proof17bool = true

        } else {
            document.getElementById(`pagina${nextName}`).style.display ="block"
            document.getElementById(`pagina${name}`).style.display ="none"
        }
        break;
    
        case "proof17": 
            ref18.play()
            document.getElementById(`pagina${nextName}`).style.display ="block"
            document.getElementById(`pagina${name}`).style.display ="none"
        break;
        
        
        case "proof18": //pista nivles vistos
            ref18.pause()
            if(!proof18bool){
                 ref21.play()
                document.getElementById(`pagina${nextName}`).style.display ="none"
                document.getElementById(`pagina${nextName2}`).style.display ="none"
                proof18bool = true
            } else {
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"
            }
            break;
        
            
        case "proof24": // ele juego de arratrar
        if(!proof24bool){
            ref24.play()
            proof24bool = true
            document.getElementById(`pagina${nextName}`).style.display ="none"
            
            document.getElementById("parentezco").disabled = true
            document.getElementById("parentezco").classList.remove("clasegover")
            setTimeout(() => {
                document.getElementById("parentezco").disabled = false
                document.getElementById("parentezco").classList.add("clasegover")
            }, 11000);

            
        } else {
            document.getElementById(`pagina${nextName}`).style.display ="block"
            document.getElementById(`pagina${name}`).style.display ="none"            
    }
            break;

        case "proof29":  //modificar
            if(!proof29bool){
                ref30.play()
                document.getElementById(`pagina${nextName}`).style.display ="none"
                document.getElementById(`pagina${nextName2}`).style.display ="none"
                proof29bool = true
            } else {
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"            
            }
            break;            

        // case "proof30":
        //     if(!proof30bool){
        //         document.getElementById(`pagina${nextName}`).style.display ="none"
        //         document.getElementById(`pagina${nextName2}`).style.display ="none"
        //         proof30bool = true
        //     } else {
        //         document.getElementById(`pagina${nextName}`).style.display ="block"
        //     }
        //     break;


        // case "proof32": // listo
        //     if(!proof32bool){
        //         ref41.play()
        //         setTimeout(() => {
        //             document.getElementById(`pagina${nextName}`).style.display ="block"
        //             proof32bool = true
        //         }, 24000);
        //     } else {
        //         document.getElementById(`pagina${nextName}`).style.display ="block"
        //         document.getElementById(`pagina${name}`).style.display ="none"
        //     }
        //     break;
        
        case "proof33": 
                document.getElementById(`pagina${nextName}`).style.display ="block"
            break;

        case "proof34":
            if(!proof34bool){
                proof34bool = true
                document.getElementById("videoProof36").play()
                document.getElementById("videoProof36").addEventListener("ended", function(){
                    document.getElementById(`videoProof36Show`).style.display ="block"
                    document.getElementById(`videoProof36`).style.display ="none"
                    document.getElementById(`pagina${nextName}`).style.display ="block"
                    document.getElementById(`pagina${name}`).style.display ="none"
                });
    
            } else {
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"
                    
            }
            
            break;

        case "proof36": // listo
            if(!proof36bool){
                // ref36a.play()
                // setTimeout(() => {
                    document.getElementById(`pagina${nextName}`).style.display ="block"
                    document.getElementById(`pagina${name}`).style.display ="none"
                    
                    document.getElementById("medioProof36a").classList.add("floatall")
                    document.getElementById("titule36a").classList.add("floatall")
                    
                

                    proof36bool = true
                // }, 24000);
            } else {
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"
            }
            break;  

        case "proof36a": // listo
            if(!proof36abool){
                ref36a.play()
                proof36abool = true
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"


                // setTimeout(() => {
                    // document.getElementById(`pagina${nextName}`).style.display ="block"
                // }, 4000);
            } else {
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"
            }
            break;  

        case "proof37": // listo
            if(!proof37bool){
                ref36a.pause()
                ref37.play()
                document.getElementById(`pagina${nextName}`).style.display ="none"
                proof37bool = true
            } else {
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"
            }
            break; 

        case "proof38": // listo
                refend.play()
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"
            break; 
            
        case "proof39": // listo
            refend.pause()
            if(!proof39bool){
                document.getElementById(`pagina${nextName}`).style.display ="none"
                proof39bool = true
            } else {
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"
            }
            break;

        case "proof39a": // listo
            if(!proof39abool){
                ref32.play()
                document.getElementById(`pagina${nextName}`).style.display ="none"
                proof39abool = true
            } else {
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"
            }
            break;           
            

        case "proof41": // listo
                refend.play()
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"
            break;           

        case "proof40": // listo
                refend.pause()
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"
            break;           
            

 
        default:
            document.getElementById(`pagina${nextName}`).style.display ="block"
            document.getElementById(`pagina${name}`).style.display ="none"
            break;
    }

    document.getElementById(`pagina${name}`).style.display ="none"

}

btnNextSonidos.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        sonidoNext(event.target.name, btnNextSonidos[index+1].name, btnNextSonidos[index+2].name)
    })
})










