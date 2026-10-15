var ref16_a = new Audio();
ref16_a.src="./sonidos/Pagina10/10a.mp3";

var ref16_b = new Audio();
ref16_b.src="./sonidos/Pagina10/10b.mp3";

var ref16_c = new Audio();
ref16_c.src="./sonidos/Pagina10/10c.mp3";


const productServSon16 = document.querySelectorAll("body img.audios16")

let click16a = false
let click16b = false
let click16c = false

var ref16 = new Audio();
ref16.src="./sonidos/Pagina10/pagina10.mp3";


let btn16returnall = document.getElementById("btn16returnall")

let btn16returnone = document.getElementById("btn16returnone")

let btn16return = document.getElementById("btn16return")



console.log(productServSon16)

let video16uno = document.querySelector(".video16uno")
let video16dos = document.querySelector(".video16dos")
let video16tres = document.querySelector(".video16tres")

const sonidoproductServSon16 = (name) =>{
    console.log(name)

    switch (name) {
        case "sol16a":
            video16dos.classList.remove("next2")
            video16tres.classList.remove("next2")

            video16uno.classList.add("next2")

            if(!click16a){
            document.getElementById("videoProof16PEP1").play()


                document.getElementById("videoProof16PEP1").addEventListener("ended", function(){
                    document.getElementById("btn16returnone").style.display = "block"
                    click16a = true

                    document.getElementById("videoProof16PEP1").style.display = "none"
                    document.getElementById("videoProof16PEP1show").style.display = "block"

            
                  });
    
            } else {
                document.getElementById("btn16returnone").style.display = "block"
            }

            document.getElementById("videoProof16PEP2").pause()
            document.getElementById("videoProof16PEP3").pause()
            ref16.pause()
            break;



        case "sol16b":

            video16tres.classList.remove("next2")
            video16uno.classList.remove("next2")

            video16dos.classList.add("next2")
            if(!click16b){
            document.getElementById("videoProof16PEP2").play()
                
                document.getElementById("videoProof16PEP2").addEventListener("ended", function(){
                    click16b = true
                    document.getElementById("btn16returnall").style.display = "block"

                    document.getElementById("videoProof16PEP2").style.display = "none"
                    document.getElementById("videoProof16PEP2show").style.display = "block"

                // }, 20000);
                });
            } else{
                document.getElementById("btn16returnall").style.display = "block"
            }

            document.getElementById("videoProof16PEP3").pause()
            document.getElementById("videoProof16PEP1").pause()
            ref16.pause()
            break;

        case "sol16c":

            video16uno.classList.remove("next2")
            video16dos.classList.remove("next2")

            video16tres.classList.add("next2")


            if(!click16c){
                document.getElementById("videoProof16PEP3").play()

                document.getElementById("videoProof16PEP3").addEventListener("ended", function(){
                    click16c = true
                    document.getElementById("btn16returnall").style.display = "block"
                    document.getElementById("videoProof16PEP3").style.display = "none"
                    document.getElementById("videoProof16PEP3show").style.display = "block"

                // }, 50000);
            });
            } else {
                document.getElementById("btn16returnall").style.display = "block"
            }


            document.getElementById("videoProof16PEP2").pause()
            document.getElementById("videoProof16PEP1").pause()
            ref16.pause()
            break;

    }

    if(click16a && click16b && click16c  ){
        
        document.getElementById(`paginaproof16`).style.display = "block"
    }
}


productServSon16.forEach((productServSonImg, index) => {
    productServSonImg.addEventListener('click', (event) => {
        sonidoproductServSon16(event.target.name)
    })
})
btn16returnall.addEventListener("click",sonidoproductServSon16) 
btn16return.addEventListener("click",sonidoproductServSon16) 



let siguiente1_16 = () =>{
    video16dos.classList.remove("next2")
    video16tres.classList.remove("next2")
    document.getElementById("videoProof16PEP2").pause()
    document.getElementById("videoProof16PEP3").pause()
    setTimeout(() => {
        document.getElementById("btn16returnall").style.display = "none"
    }, 300);

}

btn16returnall.addEventListener("click",siguiente1_16)

let siguiente1_16one = () =>{

    document.getElementById("consanguinidad16").classList.remove("next2nopa")
    document.getElementById("consanguinidad16").classList.add("next2nopa")

    video16uno.classList.remove("next2")
    video16uno.classList.add("next")

    document.getElementById("videoProof16PEP1").pause()
    document.getElementById("btn16returnone").style.display = "none"

}

btn16returnone.addEventListener("click",siguiente1_16one)


let close_one = () =>{

    document.getElementById("consanguinidad16").classList.remove("next2nopa")

}

btn16return.addEventListener("click",close_one)


let silenciarPagina16 = ()=>{
    document.getElementById("videoProof16PEP1").pause()
    document.getElementById("videoProof16PEP2").pause()
    document.getElementById("videoProof16PEP3").pause()
}

document.getElementById(`paginaproof16`).addEventListener("click",silenciarPagina16)

