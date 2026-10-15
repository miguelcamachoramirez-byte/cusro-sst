var ref5_a = new Audio();
ref5_a.src="./sonidos/Pagina5/5a.mp3";

var ref5_b = new Audio();
ref5_b.src="./sonidos/Pagina5/5b.mp3";

var ref5_c = new Audio();
ref5_c.src="./sonidos/Pagina5/5c.mp3";

var ref5_d = new Audio();
ref5_d.src="./sonidos/Pagina5/5d.mp3";

var ref5_e = new Audio();
ref5_e.src="./sonidos/Pagina5/5e.mp3";

var ref5_f = new Audio();
ref5_f.src="./sonidos/Pagina5/5f.mp3";

// proof 5
ref5.src="./sonidos/Pagina5/pagina5.mp3";


const productServSon = document.querySelectorAll("body img.audios3a")

let click1 = false
let click2 = false
let click3 = false
let click4 = false
let click5 = false
let click6 = false

console.log(productServSon)

const sonidoproductServSon = (name) =>{
    console.log(name)

    let radar1 = document.querySelectorAll(".radar1")
    let radar2 = document.querySelectorAll(".radar2")
    let radar3 = document.querySelectorAll(".radar3")
    let radar4 = document.querySelectorAll(".radar4")
    let radar5 = document.querySelectorAll(".radar5")
    let radar6 = document.querySelectorAll(".radar6")

    let sonido3a = document.getElementById("sonido3a")
    let sonido3b = document.getElementById("sonido3b")
    let sonido3c = document.getElementById("sonido3c")
    let sonido3d = document.getElementById("sonido3d")
    let sonido3e = document.getElementById("sonido3e")
    let sonido3f = document.getElementById("sonido3f")


    switch (name) {
        case "sol1":
            ref5_a.play()
            click1 = true
            for (let i = 0; i < radar1.length; i++) {
                radar1[i].style.display= "block"
                radar2[i].style.display= "none"
                radar3[i].style.display= "none"
                radar4[i].style.display= "none"
                radar5[i].style.display= "none"
                radar6[i].style.display= "none"
            }
            sonido3a.style.display= "block"
            sonido3b.style.display= "none"
            sonido3c.style.display= "none"
            sonido3d.style.display= "none"
            sonido3e.style.display= "none"
            sonido3f.style.display= "none"

            ref5_d.pause()
            ref5_e.pause()
            ref5_b.pause()
            ref5_c.pause()
            ref5_f.pause()
            ref5.pause()
            break;
            
        case "sol2":
            ref5_d.play()
            click2 = true
            for (let i = 0; i < radar4.length; i++) {
                radar4[i].style.display= "block"
                radar2[i].style.display= "none"
                radar3[i].style.display= "none"
                radar1[i].style.display= "none"
                radar5[i].style.display= "none"
                radar6[i].style.display= "none"

            }
            sonido3d.style.display= "block"
            sonido3b.style.display= "none"
            sonido3c.style.display= "none"
            sonido3a.style.display= "none"
            sonido3e.style.display= "none"
            sonido3f.style.display= "none"

        

            ref5_a.pause()
            ref5_e.pause()
            ref5_b.pause()
            ref5_c.pause()
            ref5_f.pause()
            ref5.pause()
            break;
            
        case "sol3":
            ref5_e.play()
            click3 = true

            for (let i = 0; i < radar5.length; i++) {
                radar5[i].style.display= "block"
                radar2[i].style.display= "none"
                radar3[i].style.display= "none"
                radar4[i].style.display= "none"
                radar1[i].style.display= "none"
                radar6[i].style.display= "none"

            }
            sonido3f.style.display= "block"
            sonido3b.style.display= "none"
            sonido3c.style.display= "none"
            sonido3d.style.display= "none"
            sonido3e.style.display= "none"
            sonido3a.style.display= "none"


            ref5_a.pause()
            ref5_d.pause()
            ref5_b.pause()
            ref5_c.pause()
            ref5_f.pause()
            ref5.pause()
            break;
    
        case "sol4":
            click4 = true
            ref5_b.play()
         
            for (let i = 0; i < radar2.length; i++) {
                radar2[i].style.display= "block"
                radar1[i].style.display= "none"
                radar3[i].style.display= "none"
                radar4[i].style.display= "none"
                radar5[i].style.display= "none"
                radar6[i].style.display= "none"

            }
            sonido3b.style.display= "block"
            sonido3a.style.display= "none"
            sonido3c.style.display= "none"
            sonido3d.style.display= "none"
            sonido3e.style.display= "none"
            sonido3f.style.display= "none"


            ref5_a.pause()
            ref5_d.pause()
            ref5_e.pause()
            ref5_c.pause()
            ref5_f.pause()
            ref5.pause()
            break;
    
        case "sol5":
            click5 = true
          
            ref5_c.play()
                 for (let i = 0; i < radar3.length; i++) {
                radar3[i].style.display= "block"
                radar2[i].style.display= "none"
                radar1[i].style.display= "none"
                radar4[i].style.display= "none"
                radar5[i].style.display= "none"
                radar6[i].style.display= "none"

            }
            sonido3c.style.display= "block"
            sonido3b.style.display= "none"
            sonido3a.style.display= "none"
            sonido3d.style.display= "none"
            sonido3e.style.display= "none"
            sonido3f.style.display= "none"


            ref5_a.pause()
            ref5_d.pause()
            ref5_e.pause()
            ref5_b.pause()
            ref5_f.pause()
            ref5.pause()
            break;
    
        case "sol6":
            click6 = true
        
            ref5_f.play()
            for (let i = 0; i < radar6.length; i++) {
                radar6[i].style.display= "block"
                radar2[i].style.display= "none"
                radar3[i].style.display= "none"
                radar4[i].style.display= "none"
                radar5[i].style.display= "none"
                radar1[i].style.display= "none"

            }
            sonido3e.style.display= "block"
            sonido3b.style.display= "none"
            sonido3c.style.display= "none"
            sonido3d.style.display= "none"
            sonido3a.style.display= "none"
            sonido3f.style.display= "none"


            ref5_a.pause()
            ref5_d.pause()
            ref5_e.pause()
            ref5_b.pause()
            ref5_c.pause()
            ref5.pause()
            break;
    
    
    }

    if(click1 && click2 && click3 && click4 && click5 && click6){
        document.getElementById(`paginaproof3a`).style.display = "block"
    }
}


productServSon.forEach((productServSonImg, index) => {
    productServSonImg.addEventListener('click', (event) => {
        sonidoproductServSon(event.target.name)
    })
})


let siguiente15tbn = document.querySelectorAll('body button#next')

let silenciarPagina15 = ()=>{
    ref5_a.pause()
    ref5_d.pause()
    ref5_e.pause()
    ref5_b.pause()
    ref5_c.pause()
    ref5_f.pause()
    
    let sonido3a = document.getElementById("sonido3a")
    let sonido3b = document.getElementById("sonido3b")
    let sonido3c = document.getElementById("sonido3c")
    let sonido3d = document.getElementById("sonido3d")
    let sonido3e = document.getElementById("sonido3e")
    let sonido3f = document.getElementById("sonido3f")
    sonido3e.style.display= "none"
    sonido3b.style.display= "none"
    sonido3c.style.display= "none"
    sonido3d.style.display= "none"
    sonido3a.style.display= "none"
    sonido3f.style.display= "none"

    let radar1 = document.querySelectorAll(".radar1")
    let radar2 = document.querySelectorAll(".radar2")
    let radar3 = document.querySelectorAll(".radar3")
    let radar4 = document.querySelectorAll(".radar4")
    let radar5 = document.querySelectorAll(".radar5")
    let radar6 = document.querySelectorAll(".radar6")


    for (let i = 0; i < radar6.length; i++) {
        radar6[i].style.display= "none"
        radar2[i].style.display= "none"
        radar3[i].style.display= "none"
        radar4[i].style.display= "none"
        radar5[i].style.display= "none"
        radar1[i].style.display= "none"

    }


}


document.getElementById(`paginaproof3a`).addEventListener("click",silenciarPagina15)

