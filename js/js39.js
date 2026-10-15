let proof39 = document.getElementById("proof39")
const btn39 = document.querySelector(".btn39")


let pagina39 = () =>{

   
}

proof39.addEventListener("click", pagina39)




let btn39next = ()=>{
        const containerProof39TexDos = document.querySelector(".containerProof39TexDos")
        const containerProof39TexTres = document.querySelector(".containerProof39TexTres")

        containerProof39TexDos.classList.add("opacityanimateinverse")
        setTimeout(() => {
            containerProof39TexDos.style.display = "none"
            containerProof39TexTres.style.display = "block"
            containerProof39TexTres.classList.add("opacityanimate")
            btn39.style.display = "none"
            document.getElementById(`paginaproof39`).style.display ="block"

        }, 2000);
}

btn39.addEventListener("click", btn39next)