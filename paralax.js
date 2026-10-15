let start = document.getElementById("next")
let palma1 = document.getElementById("palma1") 
let palma2 = document.getElementById("palma2") 
let palma3 = document.getElementById("palma3") 
let medio = document.getElementById("medio") 
let fondo1 = document.getElementById("fondo1") 


let animar = false

let proof1Paralax = () =>{
    palma1.classList.remove("palma1Out")
    palma2.classList.remove("palma2Out")
    palma3.classList.remove("palma3Out")
    medio.classList.remove("medioOut")
    fondo1.classList.remove("fondo1Out")

    palma1.classList.add("palma1")
    palma2.classList.add("palma2")
    palma3.classList.add("palma3")
    medio.classList.add("medio")
    fondo1.classList.add("fondo1")
}


start.addEventListener("mouseover",proof1Paralax)

let proof1ParalaxOut = () =>{

    palma1.classList.remove("palma1")
    palma2.classList.remove("palma2")
    palma3.classList.remove("palma3")
    medio.classList.remove("medio")
    fondo1.classList.remove("fondo1")


    palma1.classList.add("palma1Out")
    palma2.classList.add("palma2Out")
    palma3.classList.add("palma3Out")
    medio.classList.add("medioOut")
    fondo1.classList.add("fondo1Out")
    setTimeout(() => {
        medio.classList.remove("medioOut")
    }, 1000);

}


start.addEventListener("mouseout",proof1ParalaxOut)



let bodys = document.getElementById("body")


let  move3d = (e) =>{
    let adelante = document.getElementById("adelante")
    let medio = document.getElementById("medio")
    let medioProof00 = document.getElementById("medioProof00")
    let atrasProof1 = document.getElementById("atrasProof1")
    let medioProof1 = document.getElementById("medioProof1")
    let adelanteProof2 = document.getElementById("adelanteProof2")
    let adelanteProof4 = document.getElementById("adelanteProof4")
    let atrasProof4 = document.getElementById("atrasProof4")
    let atrasProof8 = document.getElementById("atrasProof8")
    let medioProof8 = document.getElementById("medioProof8")
    let atrasProof13 = document.getElementById("atrasProof13")
    let atras6 = document.getElementById("atras6")
    let adelante6 = document.getElementById("adelante6")
    let hand2 = document.getElementById("hand2")
   
    let medioProof13 = document.getElementById("medioProof13")
    let adelanteProof13 = document.getElementById("adelanteProof13")
    let atrasProof15 = document.getElementById("atrasProof15")
    let medioProof15 = document.getElementById("medioProof15")
    let atras17 = document.getElementById("atras17")
    let atrasProof18 = document.getElementById("atrasProof18")
    let medioProof18 = document.getElementById("medioProof18")
    let atrasProof21 = document.getElementById("atrasProof21")
    let medioProof21 = document.getElementById("medioProof21")
    let atrasProof24 = document.getElementById("atrasProof24")
    let medioProof24 = document.getElementById("medioProof24")
    let atrasProof26 = document.getElementById("atrasProof26")
    let medioProof26 = document.getElementById("medioProof26")
    let atrasProof29 = document.getElementById("atrasProof29")
    let medioProof29 = document.getElementById("medioProof29")
    let proof30Img = document.getElementById("proof30Img")
    let atrasProof30 = document.getElementById("atrasProof30")
    let adelanteProof30 = document.getElementById("adelanteProof30")
    let atras32 = document.getElementById("atras32")
    let adelante32 = document.getElementById("adelante32")
    let atrasProof33 = document.getElementById("atrasProof33")
    let medioProof33 = document.getElementById("medioProof33")
    let atrasProof34 = document.getElementById("atrasProof34")
    let medioProof34 = document.getElementById("medioProof34")
    let atrasProof36 = document.getElementById("atrasProof36")
    let medioProof36 = document.getElementById("medioProof36")
    let atrasProof36a = document.getElementById("atrasProof36a")
    let medioProof36a = document.getElementById("medioProof36a")
    let matas36 = document.getElementById("matas36")
    let atrasProof37 = document.getElementById("atrasProof37")
    let medioProof37 = document.getElementById("medioProof37")
    let atrasProof38 = document.getElementById("atrasProof38")
    let adelanteProof38 = document.getElementById("adelanteProof38")
    let atras39 = document.getElementById("atras39")
    let medio39 = document.getElementById("medio39")
    let atras39a = document.getElementById("atras39a")
    let adelante39a = document.getElementById("adelante39a")
    let atrasProof40 = document.getElementById("atrasProof40")
    let medioProof40 = document.getElementById("medioProof40")
    let atras21 = document.getElementById("atras21")
    let adelante21 = document.getElementById("adelante21")
    let atras41 = document.getElementById("atras41")
    let adelante41 = document.getElementById("adelante41")


     document.getElementById("palma4").classList.add("floatall")
   
    

    let recta = -((-23.75/475)*(e.clientX) + 23.75)
    let recta2 = -((-10.75/475)*(e.clientX) + 10.75)

    let rectay = -((-23.75/313)*(e.clientY) + 23.75)
    let recta2y = ((-10.75/313)*(e.clientY) + 10.75)

    let recta3 = -((-40/313)*(e.clientY) + 40)
    let recta3y = ((-10/313)*(e.clientY) + 10)

    let recta4 = -((20/313)*(e.clientY) + 40)
    let recta4y = ((-10/313)*(e.clientY) + 10)

    document.getElementById("palma1").style.transform = `translate3d(${recta }px,${rectay}px, 0px)`
    document.getElementById("palma2").style.transform = `translate3d(${recta3 }px,${recta3y}px, 0px)`
    document.getElementById("palma3").style.transform = `translate3d(${recta4 }px,${recta4y}px, 0px)`

    
    adelante.style.transform = `translate3d(${recta }px,${rectay}px, 0px)`
    medio.style.transform = `translate3d(${recta2}px,${recta2y}px, 0px)`
    hand2.style.transform = `translate3d(${recta2}px,${recta2y}px, 0px)`
    atrasProof1.style.transform = `translate3d(${recta2}px,${recta2y}px, 0px)`
    medioProof1.style.transform = `translate3d(${recta }px,${rectay}px, 0px)`
    medioProof00.style.transform = `translate3d(${recta }px,${rectay}px, 0px)`
    adelanteProof2.style.transform = `translate3d(${recta2}px,${recta2y}px, 0px)`
    atrasProof4.style.transform = `translate3d(${recta}px,${rectay}px, 0px)`
    adelanteProof4.style.transform = `translate3d(${recta2}px,${recta2y}px, 0px)`
    atrasProof8.style.transform = `translate3d(${recta2}px,${recta2y}px, 0px)`
    medioProof8.style.transform = `translate3d(${recta }px,${rectay}px, 0px)`
    atras6.style.transform = `translate3d(${recta2}px,${recta2y}px, 0px)`
    medioProof13.style.transform = `translate3d(${recta }px,${rectay}px, 0px)`
    // adelanteProof13.style.transform = `translate3d(${recta2}px,${recta2y}px, 0px)`
    atrasProof15.style.transform = `translate3d(${recta2}px,${recta2y}px, 0px)`
    medioProof15.style.transform = `translate3d(${recta }px,${rectay}px, 0px)`
    atras17.style.transform = `translate3d(${recta }px,${rectay}px, 0px)`
    atrasProof18.style.transform = `translate3d(${recta }px,${rectay}px, 0px)`
    medioProof18.style.transform = `translate3d(${recta2}px,${recta2y}px, 0px)`
    atrasProof21.style.transform = `translate3d(${recta2}px,${recta2y}px, 0px)`
    medioProof21.style.transform = `translate3d(${recta }px,${rectay}px, 0px)`
    atrasProof24.style.transform = `translate3d(${recta2}px,${recta2y}px, 0px)`
    medioProof24.style.transform = `translate3d(${recta }px,${rectay}px, 0px)`
    atrasProof26.style.transform = `translate3d(${recta2}px,${recta2y}px, 0px)`
    medioProof26.style.transform = `translate3d(${recta }px,${rectay}px, 0px)`
    atrasProof29.style.transform = `translate3d(${recta }px,${rectay}px, 0px)`
    medioProof29.style.transform = `translate3d(${recta2 }px,${recta2y}px, 0px)`
    proof30Img.style.transform = `translate3d(${recta2 }px,${recta2y}px, 0px)`
    // atrasProof30.style.transform = `translate3d(${recta2}px,${recta2y}px, 0px)`
    atras32.style.transform = `translate3d(${recta2}px,${recta2y}px, 0px)`
    adelante32.style.transform = `translate3d(${recta}px,${rectay}px, 0px)`
    adelanteProof30.style.transform = `translate3d(${recta}px,${rectay}px, 0px)`
    atrasProof33.style.transform = `translate3d(${recta2}px,${recta2y}px, 0px)`
    medioProof33.style.transform = `translate3d(${recta }px,${rectay}px, 0px)`
    atrasProof34.style.transform = `translate3d(${recta2}px,${recta2y}px, 0px)`
    medioProof34.style.transform = `translate3d(${recta }px,${rectay}px, 0px)`
    atrasProof36.style.transform = `translate3d(${recta2}px,${recta2y}px, 0px)`
    medioProof36.style.transform = `translate3d(${recta }px,${rectay}px, 0px)`
    atrasProof36a.style.transform = `translate3d(${recta2}px,${recta2y}px, 0px)`
    medioProof36a.style.transform = `translate3d(${recta }px,${rectay}px, 0px)`
    matas36.style.transform = `translate3d(${recta2}px,${recta2y}px, 0px)`
    atrasProof37.style.transform = `translate3d(${recta2}px,${recta2y}px, 0px)`
    medioProof37.style.transform = `translate3d(${recta }px,${rectay}px, 0px)`
    atrasProof38.style.transform = `translate3d(${recta2}px,${recta2y}px, 0px)`
    adelanteProof38.style.transform = `translate3d(${recta }px,${rectay}px, 0px)`
    atras39.style.transform = `translate3d(${recta2}px,${recta2y}px, 0px)`
    medio39.style.transform = `translate3d(${recta }px,${rectay}px, 0px)`
    atras39a.style.transform = `translate3d(${recta2}px,${recta2y}px, 0px)`
    adelante39a.style.transform = `translate3d(${recta }px,${rectay}px, 0px)`
    atrasProof40.style.transform = `translate3d(${recta2}px,${recta2y}px, 0px)`
    medioProof40.style.transform = `translate3d(${recta}px,${rectay}px, 0px)`
    // atras21.style.transform = `translate3d(${recta2}px,${recta2y}px, 0px)`
    // adelante21.style.transform = `translate3d(${recta}px,${rectay}px, 0px)`
    atras41.style.transform = `translate3d(${recta2}px,${recta2y}px, 0px)`
adelante41.style.transform = `translate3d(${recta}px,${recta2}px, 0px)`

    





}

bodys.addEventListener("mousemove", move3d)
