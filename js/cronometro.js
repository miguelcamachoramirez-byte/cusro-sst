window.onload = function() {
    pantalla = document.getElementById("screen");
     

 }

var succes3 = new Audio();
succes3.src="./sonidos/Success.mp3";

var errorAlert4 = new Audio();
errorAlert4.src="./sonidos/errorAlert.mp3";

const paginaproof33 = document.getElementById("paginaproof33")

 const resultado33 = document.getElementById("resultado33")
 const resolver = document.getElementById("resolver33")
 const noAcerto = document.getElementById("noAcerto")
 const tiempoh2 = document.getElementById("tiempoh2")
 const llenar  = document.querySelectorAll("body select.llenar")
//  let resolver33 = document.getElementById("resolver33")
const btnNext32 = document.querySelectorAll('body button.next31')




 
 
 let verfificarSiLLeno = (name,value) => {
     if(llenar[0].value && llenar[1].value && llenar[2].value && llenar[3].value ) {
         resolver.style.visibility = "visible"
     } else {
         resolver.style.visibility = "hidden"
     }
 }
 
 llenar.forEach((llenarEach, index) => {
     llenarEach.addEventListener('click', (event) => {
         verfificarSiLLeno(event.target.name,event.target.value)
     })
 })


 var isMarch = false;
let incio = false

 var acumularTime = 0; 
 function start () {

          if (isMarch == false && incio == false) { 
             timeInicial = new Date();
             control = setInterval(cronometro,10);
             isMarch = true;
             incio = true
             console.log(incio)
             }
          }


btnNext32[0].addEventListener('click',start)

 function cronometro () { 
          timeActual = new Date();
          acumularTime = timeActual - timeInicial;
          acumularTime2 = new Date();
          acumularTime2.setTime(acumularTime); 
          cc = Math.round(acumularTime2.getMilliseconds()/10);
          ss = acumularTime2.getSeconds();
          mm = acumularTime2.getMinutes();
          hh = acumularTime2.getHours()-19;
         //  hh = "00"
          if (cc < 10) {cc = "0"+cc;}
          if (ss < 10) {ss = "0"+ss;} 
          if (mm < 10) {mm = "0"+mm;}
          if (hh < 10) {hh = "0"+hh;}
          pantalla.innerHTML = hh+" : "+mm+" : "+ss+" : "+cc;
          }
 
//  function stop () { 



   
         
//           } 

// resolver33.addEventListener("click",stop)  
 
 function resume () {
          if (isMarch == false) {
             timeActu2 = new Date();
             timeActu2 = timeActu2.getTime();
             acumularResume = timeActu2-acumularTime;
             
             timeInicial.setTime(acumularResume);
             control = setInterval(cronometro,10);
             isMarch = true;
             }     
          }


 
 function reset () {
          if (isMarch == true) {
             clearInterval(control);
             isMarch = false;
             }
          acumularTime = 0;
          pantalla.innerHTML = "00 : 00 : 00 : 00";
          }

const todasContestadas =() =>{
   console.log("entre")
   console.log(llenar)
   for (let i = 0; i < llenar.length; i++) {
         console.log(llenar[i].value) 
}
   if(llenar[0].value == "eficiente" && llenar[1].value == "transparente" && llenar[2].value == "libremente" && llenar[3].value == "clara y oportuna") {
         resultado33.classList.add("emergentes332")
         succes3.play()
         resolver.style.visibility = "hidden"
         localStorage.setItem("puntuacion33", 10);
         if (isMarch == true) {
            clearInterval(control);
            isMarch = false;
            }  
   for (let i = 0; i < llenar.length; i++) {
         setTimeout(function(){ 
            llenar[i].disabled = true
         }, 1000);
         
   }
         setTimeout(function(){ 
            tiempoh2.innerHTML = "Tu tiempo fue"
            resultado33.classList.remove("emergentes332");
            paginaproof33.style.display = "block"
            resultado33.classList.add("emergentes33"); }, 4000);
   } else {
      
      resolver.style.visibility = "hidden"
      errorAlert4.play()
      localStorage.setItem("puntuacion33", 0);
      if (isMarch == true) {
         clearInterval(control);
         isMarch = false;
         }  
for (let i = 0; i < llenar.length; i++) {
      setTimeout(function(){ 
         llenar[i].disabled = true
      }, 1000);
}
      noAcerto.classList.add("emergentes332")
      setTimeout(function(){
         tiempoh2.innerHTML = "Tu tiempo fue"
         noAcerto.classList.remove("emergentes332");
         paginaproof33.style.display = "block"
         noAcerto.classList.add("emergentes33"); }, 4000);
   }

            
}

 
resolver.addEventListener('click',todasContestadas)