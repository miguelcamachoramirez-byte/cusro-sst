var ref8_a = new Audio();
ref8_a.src="./sonidos/Pagina8/8a.mp3";

var ref8_b = new Audio();
ref8_b.src="./sonidos/Pagina8/8b.mp3";

var ref8_c = new Audio();
ref8_c.src="./sonidos/Pagina8/8c.mp3";

var ref8_d = new Audio();
ref8_d.src="./sonidos/Pagina8/8d.mp3";

var ref8_e = new Audio();
ref8_e.src="./sonidos/Pagina8/8e.mp3";




const productServSon13 = document.querySelectorAll("body img.audios13")

let click13a = false
let click13b = false
let click13c = false
let click13d = false
let click13e = false

console.log(productServSon13)

const sonidoproductServSon13 = (name) =>{
    console.log(name)

    let radar1 = document.querySelectorAll(".radar13a")
    let radar2 = document.querySelectorAll(".radar13b")
    let radar3 = document.querySelectorAll(".radar13c")
    let radar4 = document.querySelectorAll(".radar13d")
    let radar5 = document.querySelectorAll(".radar13e")

    let sonido3a = document.getElementById("sonido13a")
    let sonido3b = document.getElementById("sonido13b")
    let sonido3c = document.getElementById("sonido13c")
    let sonido3d = document.getElementById("sonido13d")
    let sonido3e = document.getElementById("sonido13e")


    switch (name) {
        case "sol13a":
            ref8_a.play()
            click13a = true
            for (let i = 0; i < radar1.length; i++) {
                radar1[i].style.display= "block"
                radar2[i].style.display= "none"
                radar3[i].style.display= "none"
                radar4[i].style.display= "none"
                radar5[i].style.display= "none"
            }
            sonido3a.style.display= "block"
            sonido3b.style.display= "none"
            sonido3c.style.display= "none"
            sonido3d.style.display= "none"
            sonido3e.style.display= "none"

            ref8_d.pause()
            ref8_e.pause()
            ref8_b.pause()
            ref8_c.pause()
            ref8.pause()
            break;
            
        case "sol13d":
            ref8_d.play()
            click13d = true
            for (let i = 0; i < radar4.length; i++) {
                radar4[i].style.display= "block"
                radar2[i].style.display= "none"
                radar3[i].style.display= "none"
                radar1[i].style.display= "none"
                radar5[i].style.display= "none"

            }
            sonido3d.style.display= "block"
            sonido3b.style.display= "none"
            sonido3c.style.display= "none"
            sonido3a.style.display= "none"
            sonido3e.style.display= "none"

        

            ref8_a.pause()
            ref8_e.pause()
            ref8_b.pause()
            ref8_c.pause()
            ref8.pause()
            break;
            
        case "sol13e":
            ref8_e.play()
            click13e = true

            for (let i = 0; i < radar5.length; i++) {
                radar5[i].style.display= "block"
                radar2[i].style.display= "none"
                radar3[i].style.display= "none"
                radar4[i].style.display= "none"
                radar1[i].style.display= "none"

            }
            sonido3e.style.display= "block"
            sonido3b.style.display= "none"
            sonido3c.style.display= "none"
            sonido3d.style.display= "none"
            sonido3a.style.display= "none"


            ref8_a.pause()
            ref8_d.pause()
            ref8_b.pause()
            ref8_c.pause()
            ref8.pause()
            break;
    
        case "sol13b":
            click13b = true
            ref8_b.play()
         
            for (let i = 0; i < radar2.length; i++) {
                radar2[i].style.display= "block"
                radar1[i].style.display= "none"
                radar3[i].style.display= "none"
                radar4[i].style.display= "none"
                radar5[i].style.display= "none"

            }
            sonido3b.style.display= "block"
            sonido3a.style.display= "none"
            sonido3c.style.display= "none"
            sonido3d.style.display= "none"
            sonido3e.style.display= "none"


            ref8_a.pause()
            ref8_d.pause()
            ref8_e.pause()
            ref8_c.pause()
            ref8.pause()
            break;
    
        case "sol13c":
            click13c = true
          
            ref8_c.play()
                 for (let i = 0; i < radar3.length; i++) {
                radar3[i].style.display= "block"
                radar2[i].style.display= "none"
                radar1[i].style.display= "none"
                radar4[i].style.display= "none"
                radar5[i].style.display= "none"

            }
            sonido3c.style.display= "block"
            sonido3b.style.display= "none"
            sonido3a.style.display= "none"
            sonido3d.style.display= "none"
            sonido3e.style.display= "none"


            ref8_a.pause()
            ref8_d.pause()
            ref8_e.pause()
            ref8_b.pause()
            ref8.pause()
            break;
    
    }

    if(click13a && click13b && click13c && click13d 
        && click13e 
        ){
        document.getElementById(`paginaproof13`).style.display = "block"
    }
}


productServSon13.forEach((productServSonImg, index) => {
    productServSonImg.addEventListener('click', (event) => {
        sonidoproductServSon13(event.target.name)
    })
})



let silenciarPagina13 = ()=>{
    ref8_a.pause()
    ref8_d.pause()
    ref8_e.pause()
    ref8_b.pause()
    ref8_c.pause()
}


document.getElementById(`paginaproof13`).addEventListener("click",silenciarPagina13)

