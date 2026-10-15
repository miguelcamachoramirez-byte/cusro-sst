const computadorChange = document.getElementById("computadorChange")
const checkCompt = document.querySelectorAll("body input.checkCompt" )


//los p del compu
const computadorp1 = document.getElementById("computadorp1")
const computadorp2 = document.getElementById("computadorp2")
const computadorp3 = document.getElementById("computadorp3")
const computadorp4 = document.getElementById("computadorp4")
const computadorp5 = document.getElementById("computadorp5")
const computadorp6 = document.getElementById("computadorp6")
const computadorp7 = document.getElementById("computadorp7")
const computadorp8 = document.getElementById("computadorp8")
const computadorp9 = document.getElementById("computadorp9")

let imagenesCompu = ["./img/PAG-43/mesa-2.png","./img/PAG-43/mesa-3.png","./img/PAG-43/mesa-4.png","./img/PAG-43/mesa-5.png","./img/PAG-43/green.png"]

//correcta emergentes 
const emergentePuntos1043 = document.getElementById("emergentePuntos1043")

// incorrecto emergente
const emergentenoAcertoPuntos1043 = document.getElementById("emergentenoAcertoPuntos1043")

//mostrar el recuadro 
const paginaproof43Btn = document.getElementById("paginaproof43")

//selecciono cinco veces
let seleccionoN = 0 



let correctaImg = 0
let incorrectaImg = 0

var succes2 = new Audio();
succes2.src="./sonidos/Success.mp3";

var errorAlert3 = new Audio();
errorAlert3.src="./sonidos/errorAlert.mp3";

let addImg = (name,value)=>{
    seleccionoN = seleccionoN + 1
    if(seleccionoN < 6){
        // if(seleccionoN == 5){
        //     computadorp1.style.color = "red"
        //     computadorp2.style.color = "red"
        //     computadorp3.style.color = "rgb(0,128,74)"
        //     computadorp4.style.color = "rgb(0,128,74)"
        //     computadorp5.style.color = "red"
        //     computadorp6.style.color = "rgb(0,128,74)"
        //     computadorp7.style.color = "rgb(0,128,74)"
        //     computadorp8.style.color = "red"
        //     computadorp9.style.color = "rgb(0,128,74)"
        // }
        
        if(value == "correcta" ){
            correctaImg = correctaImg + 1
            if (correctaImg == "1"){
                computadorChange.setAttribute("src", imagenesCompu[0]);
            }
            if (correctaImg == "2"){
                computadorChange.setAttribute("src", imagenesCompu[1]);
            }
            if (correctaImg == "3"){
                computadorChange.setAttribute("src", imagenesCompu[2]);
            }
            if (correctaImg == "4"){
                computadorChange.setAttribute("src", imagenesCompu[3]);
            }
            if (correctaImg == "5"){
                computadorChange.setAttribute("src", imagenesCompu[4]);
            }
            if (correctaImg == "5" && incorrectaImg == "0"){
                succes2.play()
                computadorChange.setAttribute("src", imagenesCompu[4]);
                emergentePuntos1043.classList.add("emergentes432")
                setTimeout(function(){ 
                    emergentePuntos1043.classList.remove("emergentes432");
                    emergentePuntos1043.classList.add("emergentes43");
                    paginaproof43Btn.style.display = "block"
                 }, 4000);
                localStorage.setItem("puntuacion43", 10);
            }

        } else {
            incorrectaImg = incorrectaImg + 1
        }


        switch (name) {
            case "computador1":
                computadorp1.style.color = "red"
                computadorp1.style.fontWeight = "900"
                document.getElementById(`${name}`).disabled=true;
                break;
            case "computador2":
                computadorp2.style.color = "red"
                computadorp2.style.fontWeight = "900"
                document.getElementById(`${name}`).disabled=true;
                break;
            case "computador3":
                computadorp3.style.color = "rgb(0,128,74)"
                computadorp3.style.fontWeight = "900"
                document.getElementById(`${name}`).disabled=true;
                break;
            case "computador4":
                computadorp4.style.fontWeight = "900"
                computadorp4.style.color = "rgb(0,128,74)"
                document.getElementById(`${name}`).disabled=true;
                break;
            case "computador5":
                computadorp5.style.fontWeight = "900"
                computadorp5.style.color = "red"
                document.getElementById(`${name}`).disabled=true;
                break;
            case "computador6":
                computadorp6.style.fontWeight = "900"
                computadorp6.style.color = "rgb(0,128,74)"
                document.getElementById(`${name}`).disabled=true;
                break;
            case "computador7":
                computadorp7.style.fontWeight = "900"
                computadorp7.style.color = "rgb(0,128,74)"
                document.getElementById(`${name}`).disabled=true;
                break;
            case "computador8":
                computadorp8.style.color = "red"
                computadorp8.style.fontWeight = "900"
                document.getElementById(`${name}`).disabled=true;
                break;
            case "computador9":
                computadorp9.style.color = "rgb(0,128,74)"
                computadorp9.style.fontWeight = "900"
                document.getElementById(`${name}`).disabled=true;
                break;
        
        }
    }  
    if (seleccionoN == 5) {
        for (let index = 0; index < checkCompt.length; index++) {
            checkCompt[index].disabled = true
        }
        if(incorrectaImg != 0 ){
            errorAlert3.play()
            emergentenoAcertoPuntos1043.classList.add("emergentes432")
            localStorage.setItem("puntuacion43", 0);
            setTimeout(function(){ 
                emergentenoAcertoPuntos1043.classList.remove("emergentes432");
                emergentenoAcertoPuntos1043.classList.add("emergentes43"); 
                paginaproof43Btn.style.display = "block"
            }, 4000);
        }    
    }


}

checkCompt.forEach((computadorimg, index) => {
    computadorimg.addEventListener('click', (event) => {
        addImg(event.target.name,event.target.value)
    })
})









// const incorrecta431 =() =>{
//         emergentenoAcertoPuntos1043.classList.add("emergentes2")

//         setTimeout(function(){ 
//             emergentenoAcertoPuntos1043.classList.remove("emergentes2");
//             emergentenoAcertoPuntos1043.classList.add("emergentes"); }, 3000);
// }




// const incorrecta393 =() =>{
//         emergentenoAcertoPuntos1039.classList.add("emergentes392")

//         setTimeout(function(){ 
//             emergentenoAcertoPuntos1039.classList.remove("emergentes392");
//             emergentenoAcertoPuntos1039.classList.add("emergentes39"); }, 4000);

//         target339.style.background = "grey"
// }



