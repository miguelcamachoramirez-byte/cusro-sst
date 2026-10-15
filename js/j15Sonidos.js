var ref5_1 = new Audio();
ref5_1.src="./sonidos/referencia5/REF 5-1.mp3";

var ref5_2 = new Audio();
ref5_2.src="./sonidos/referencia5/REF 5-2.mp3";

var ref5_3 = new Audio();
ref5_3.src="./sonidos/referencia5/REF 5-3.mp3";

var ref5_4 = new Audio();
ref5_4.src="./sonidos/referencia5/REF 5-4.mp3";

var ref5_5 = new Audio();
ref5_5.src="./sonidos/referencia5/REF 5-5.mp3";

var ref5_6 = new Audio();
ref5_6.src="./sonidos/referencia5/REF 5-6.mp3";


const productServSon = document.querySelectorAll("body img.solapar15")

console.log(productServSon)

const sonidoproductServSon = (name) =>{
    console.log(name)
    switch (name) {
        case "sol1":
            ref5_1.play()

            ref5_4.pause()
            ref5_5.pause()
            ref5_2.pause()
            ref5_3.pause()
            ref5_6.pause()
            break;
            
        case "sol2":
            ref5_4.play()

            ref5_1.pause()
            ref5_5.pause()
            ref5_2.pause()
            ref5_3.pause()
            ref5_6.pause()
            break;
            
        case "sol3":
            ref5_5.play()

            ref5_1.pause()
            ref5_4.pause()
            ref5_2.pause()
            ref5_3.pause()
            ref5_6.pause()
            break;
    
        case "sol4":
            ref5_2.play()

            ref5_1.pause()
            ref5_4.pause()
            ref5_5.pause()
            ref5_3.pause()
            ref5_6.pause()
            break;
    
        case "sol5":
            ref5_3.play()

            ref5_1.pause()
            ref5_4.pause()
            ref5_5.pause()
            ref5_2.pause()
            ref5_6.pause()
            break;
    
        case "sol6":
            ref5_6.play()

            ref5_1.pause()
            ref5_4.pause()
            ref5_5.pause()
            ref5_2.pause()
            ref5_3.pause()
            break;
    
    
        default:
            break;
    }
}


productServSon.forEach((productServSonImg, index) => {
    productServSonImg.addEventListener('click', (event) => {
        sonidoproductServSon(event.target.name)
    })
})


let siguiente15tbn = document.querySelectorAll('body button#next')

let silenciarPagina15 = ()=>{
    ref5_1.pause()
    ref5_4.pause()
    ref5_5.pause()
    ref5_2.pause()
    ref5_3.pause()
    ref5_6.pause()


}


siguiente15tbn[9].addEventListener("click",silenciarPagina15)

