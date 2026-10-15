let btnNext = document.querySelectorAll('body button.nextBtn')
let btnBefore = document.querySelectorAll('body button.beforeBtn')


var sonido = new Audio();
sonido.src="";

var ref0 = new Audio();
ref0.src="./sonidos/Pagina1/pagina1.mp3";

let transicionAuto = false
let transicionAutoVHV = false
let proof15VHV = false
let transicion1 = false
let click = false
let transicionRef6 = false

let sound1 = false


let transitionNext = (name, nextName, nextName2) => {

    // desplazamiento inicial
    switch (name) {

        case "start":

            if(!startbool){
                ref0.play()
                ref0.addEventListener("ended", function(){
                    startbool = true
                    document.getElementById(`${name}`).classList.remove('beforeUP');
                    document.getElementById(`${nextName}`).classList.remove('beforeUP');
                    document.getElementById(`${nextName}`).classList.remove('before2UP');
                    document.getElementById(`${name}`).classList.remove('next2UP');
                    // document.getElementById(${name}).style.left = "0%"
                    document.getElementById(`${name}`).classList.add('nextUP');
                    document.getElementById(`${nextName}`).classList.add('next2UP');
                    document.getElementById(`pagina${nextName}`).style.display ="block"
                    // refend.play()

                });
        
    
            } else{
                document.getElementById(`${name}`).classList.remove('beforeUP');
                document.getElementById(`${nextName}`).classList.remove('beforeUP');
                document.getElementById(`${nextName}`).classList.remove('before2UP');
                document.getElementById(`${name}`).classList.remove('next2UP');
                // document.getElementById(${name}).style.left = "0%"
                document.getElementById(`${name}`).classList.add('nextUP');
                document.getElementById(`${nextName}`).classList.add('next2UP');
            
            }
            break

        // normalizado vetical, vertical, horizontal automatizado
        case "proof3a":
            document.getElementById(`${name}`).classList.remove('beforeUP');
            document.getElementById(`${nextName}`).classList.remove('beforeUP');
            document.getElementById(`${nextName}`).classList.remove('before2UP');
            document.getElementById(`${name}`).classList.remove('next2UP');
            // document.getElementById(${name}).style.left = "0%"
            document.getElementById(`${name}`).classList.add('nextUP');
            document.getElementById(`${nextName}`).classList.add('next2UP');

            if(!transicionRef6){
                transicionRef6 = true
                var ref6 = new Audio();
                ref6.src="./sonidos/Pagina6/pagina6.mp3";
                ref6.play()
    
            }

            if(!transicionAuto){
                setTimeout(() => {
                    document.getElementById(`${nextName}`).classList.remove('beforeUP');
                    document.getElementById(`${nextName}`).classList.remove('next2UP');
                    document.getElementById(`${nextName}`).classList.add('nextUP');

                    document.getElementById(`${nextName2}`).style.left = "0%";
                    document.getElementById(`${nextName2}`).classList.remove('beforeUP');
                    document.getElementById(`${nextName2}`).classList.add('next2');

                    // document.getElementById(`pagina${nextName2}`).style.display ="block"

                    transicionAuto = true
                }, 12000);

            } else {
                document.getElementById(`${name}`).classList.remove('beforeUP');
                document.getElementById(`${nextName}`).classList.remove('before');
                document.getElementById(`${nextName}`).classList.remove('before2');
                document.getElementById(`${name}`).classList.remove('next2UP');
                document.getElementById(`${name}`).classList.add('nextUP');
                document.getElementById(`${nextName}`).classList.add('next2');
            }
    
            break;



        //normalizado vertical automatico

        case "proof0":
            document.getElementById(`${name}`).classList.remove('beforeUP');
            document.getElementById(`${nextName}`).classList.remove('beforeUP');
            document.getElementById(`${nextName}`).classList.remove('before2UP');
            document.getElementById(`${name}`).classList.remove('next2UP');
            // document.getElementById(${name}).style.left = "0%"
            document.getElementById(`${name}`).classList.add('nextUP');
            document.getElementById(`${nextName}`).classList.add('next2UP');
            if(!transicion1){
                setTimeout(() => {
                    document.getElementById(`${nextName}`).classList.remove('beforeUP');
                    document.getElementById(`${nextName2}`).classList.remove('beforeUP');
                    document.getElementById(`${nextName2}`).classList.remove('before2UP');
                    document.getElementById(`${nextName}`).classList.remove('next2UP');
                    // document.getElementById(${name}).style.left = "0%"
                    document.getElementById(`${nextName}`).classList.add('nextUP');
                    document.getElementById(`${nextName2}`).classList.add('next2UP');

                    //boton para mostrar
                    // proof 2
                    var ref2 = new Audio();

                    ref2.src="./sonidos/Pagina3/pagina3.mp3";
                    ref2.play()

                    setTimeout(() => {
                        document.getElementById(`pagina${nextName2}`).style.display ="block"
                        
                    }, 21000);


                    transicion1 = true
                }, 15000);

            }
            break

         //normalizado horizontal adyecten inmediatamente anterior de la 15
        // case "start":
        // normalizado vetical, horizontal, vertical automatizado

        // case "proof15":
        //     document.getElementById(`${name}`).classList.remove('beforeUP');
        //     document.getElementById(`${nextName}`).classList.remove('before');
        //     document.getElementById(`${nextName}`).classList.remove('before2');
        //     document.getElementById(`${name}`).classList.remove('next2UP');
        //     document.getElementById(`${name}`).classList.add('nextUP');
        //     document.getElementById(`${nextName}`).classList.add('next2');
        //     if(proof15VHV == false){
        //         setTimeout(() => {

        //             document.getElementById(`${nextName}`).style.left = "0%";
        //             document.getElementById(`${nextName}`).classList.remove('beforeUP');
        //             document.getElementById(`${nextName}`).classList.add('next2');
        //             document.getElementById(`${nextName}`).classList.add('nextUP');


        //             document.getElementById(`${nextName2}`).classList.remove('beforeUP');
        //             document.getElementById(`${nextName2}`).classList.remove('before2UP');
        //             document.getElementById(`${nextName2}`).classList.add('next2UP');
        //             proof15VHV = true
        //         }, 5000);
        //     } else {
        //         document.getElementById(`${name}`).classList.remove('beforeUP');
        //         document.getElementById(`${nextName}`).classList.remove('before');
        //         document.getElementById(`${nextName}`).classList.remove('before2');
        //         document.getElementById(`${name}`).classList.remove('next2UP');
        //         document.getElementById(`${name}`).classList.add('nextUP');
        //         document.getElementById(`${nextName}`).classList.add('next2');
        //     }
    
        //     break;
    

        //normalizado horizontal adyecten inmediatamente anterior
        case "proof4" : //6
        case "proof8" : //13
        case "proof15": //16
        case "proof18": //21
        case "proof26": //29
        case "proof30": //33
        case "proof37": //38
        case "proof39a"://39
        case "proof40"://40
            document.getElementById(`${name}`).classList.remove('beforeUP');
            document.getElementById(`${nextName}`).classList.remove('before');
            document.getElementById(`${nextName}`).classList.remove('before2');
            document.getElementById(`${name}`).classList.remove('next2UP');
            document.getElementById(`${name}`).classList.add('nextUP');
            document.getElementById(`${nextName}`).classList.add('next2');
    
            break;

        //normalizado horizontal
        case "proof6"://4
        case "proof13"://8
        case "proof16"://15
        case "proof21"://18
        case "proof29": //26
        case "proof33": //33
        case "proof38": //37
        case "proof32"://39
        case "proof40a"://40a
            document.getElementById(`${name}`).style.left = "0%";
            document.getElementById(`${nextName}`).classList.remove('before2UP');
            document.getElementById(`${name}`).classList.remove('beforeUP');
            document.getElementById(`${nextName}`).classList.remove('next2');
            document.getElementById(`${nextName}`).classList.remove('next');
            document.getElementById(`${name}`).classList.add('nextUP');
            document.getElementById(`${nextName}`).classList.add('next2UP'); 
            break;

        //depzplazaminto default vertical
        default:
            document.getElementById(`${name}`).classList.remove('beforeUP');
            document.getElementById(`${nextName}`).classList.remove('beforeUP');
            document.getElementById(`${nextName}`).classList.remove('before2UP');
            document.getElementById(`${name}`).classList.remove('next2UP');
            // document.getElementById(${name}).style.left = "0%"
            document.getElementById(`${name}`).classList.add('nextUP');
            document.getElementById(`${nextName}`).classList.add('next2UP');
            break;
    }

}

btnNext.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        transitionNext(event.target.name, btnNext[index+1].name , btnNext[index+2].name)
    })
})

let click17 = false

let transitionBefore = (name, beforeName) => {
    switch (name) {
        case "proof1":
            document.getElementById(`${beforeName}`).classList.remove('nextUP');
            document.getElementById(`${name}`).classList.remove('next2UP');
            document.getElementById(`${name}`).classList.add('before2UP');
            document.getElementById(`${beforeName}`).classList.add('beforeUP');
            break;

        //nuevas paginas before
        // case "proof17":  
        //     if (!click17) {

        //         document.getElementById(`${beforeName}`).classList.remove('next2');
        //         document.getElementById(`${name}`).classList.remove('next2');
        //         document.getElementById(`${beforeName}`).classList.remove('nextUP');  

        //         document.getElementById(`${name}`).classList.remove('next2UP');
        //         document.getElementById(`${name}`).classList.add('before2UP');
       
        //         document.getElementById(`proof16`).classList.remove('beforeUP');
        //         document.getElementById(`proof16`).classList.remove('before2');
        //         document.getElementById(`proof16`).classList.remove('next2UP');
        //         document.getElementById(`proof16`).classList.add('next2');

        //     } else {
        //         document.getElementById(`proof17`).classList.remove('before2UP');
        //     }
    
        //     break;

        case "proof6"://4
        case "proof13"://8
        case "proof16"://15
        case "proof21"://18
        case "proof29": //26
        case "proof33": //33
        case "proof38": //37
        case "proof32"://39
        case "proof40a"://40a
            document.getElementById(`${name}`).classList.remove('next');
            document.getElementById(`${beforeName}`).classList.remove('nextUP');
            document.getElementById(`${name}`).classList.add('before2');
            document.getElementById(`${beforeName}`).classList.add('beforeUP');
            document.getElementById(`${name}`).classList.remove('next2');
            document.getElementById(`${name}`).classList.remove('beforeUP');
            break;
        
            case "proof4" : //6
            case "proof8" : //13
            case "proof15": //16
            case "proof18": //21
            case "proof26": //29
            case "proof30": //33
            case "proof37": //38
            case "proof39a"://39
            case "proof40"://40
            document.getElementById(`${name}`).classList.remove('before2UP');
            document.getElementById(`${name}`).classList.remove('beforeUP');
            document.getElementById(`${name}`).classList.remove('next2');
            document.getElementById(`${beforeName}`).classList.remove('next2');
            document.getElementById(`${name}`).classList.remove('next2');
            document.getElementById(`${beforeName}`).classList.remove('nextUP');   
            document.getElementById(`${name}`).classList.remove('next2UP');
            document.getElementById(`${name}`).classList.add('before2UP');
            document.getElementById(`${beforeName}`).classList.add('beforeUP');
            document.getElementById(`${name}`).classList.remove('next2UP');
            break;

        default:
            document.getElementById(`${name}`).classList.remove('before2UP');
            document.getElementById(`${name}`).classList.remove('beforeUP');
            document.getElementById(`${beforeName}`).classList.remove('nextUP');   
            document.getElementById(`${name}`).classList.remove('next2UP');
            document.getElementById(`${name}`).classList.add('before2UP');
            document.getElementById(`${beforeName}`).classList.add('beforeUP');
            document.getElementById(`${name}`).classList.remove('next2UP');
        break;
    }

    
    document.getElementById(`pagina${name}`).style.display ="none"
    document.getElementById(`pagina${beforeName}`).style.display ="block"
        
}

btnBefore.forEach((button, index) => {
    button.addEventListener('click', (event) => {
            transitionBefore(event.target.name, btnBefore[index-1].name)
    })
})









