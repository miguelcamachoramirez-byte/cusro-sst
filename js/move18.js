

let left = document.getElementById("left")
let rigth = document.getElementById("rigth")


let moveLeft = () => {
    let move1 = document.getElementById("move1") 
    let move2 = document.getElementById("move2") 
    let move3 = document.getElementById("move3") 
    let move4 = document.getElementById("move4") 

    let move1Img = document.getElementById("move1Img") 
    let move2Img = document.getElementById("move2Img") 
    let move3Img = document.getElementById("move3Img") 
    let move4Img = document.getElementById("move4Img") 


    move1.classList.remove("moveRight1")
    move1.classList.remove("moveRight2")
    move1.classList.remove("moveRight3")
    move1.classList.remove("moveRight4")
    move2.classList.remove("moveRight1")
    move2.classList.remove("moveRight2")
    move2.classList.remove("moveRight3")
    move2.classList.remove("moveRight4")
    move3.classList.remove("moveRight1")
    move3.classList.remove("moveRight2")
    move3.classList.remove("moveRight3")
    move3.classList.remove("moveRight4")
    move4.classList.remove("moveRight1")
    move4.classList.remove("moveRight2")
    move4.classList.remove("moveRight3")
    move4.classList.remove("moveRight4")


    let contanerRelative = document.querySelector(".contanerRelative") 

        if(contanerRelative.classList.contains('position2')){
            contanerRelative.classList.remove("position2")
            contanerRelative.classList.add("position3")

            move3Img.classList.remove("imgWidthMax")
            move3Img.classList.add("imgWidthMin")
            // 2341
            
            move4Img.classList.remove("imgWidthMin")
            move4Img.classList.add("imgWidthMax")

            move1.classList.remove("moveLeft1")
            move2.classList.remove("moveLeft2")
            move3.classList.remove("moveLeft3")
            move4.classList.remove("moveLeft4")
         
            move1.classList.add("moveLeft4")
            move2.classList.add("moveLeft1")
            move3.classList.add("moveLeft2")
            move4.classList.add("moveLeft3")
            
        } 
        else if(contanerRelative.classList.contains('position3')){
            contanerRelative.classList.remove("position3")
            contanerRelative.classList.add("position4")

                  
            move4Img.classList.remove("imgWidthMax")
            move4Img.classList.add("imgWidthMin")

            move1Img.classList.remove("imgWidthMin")
            move1Img.classList.add("imgWidthMax")
            // 3412

            move1.classList.remove("moveLeft4")
            move2.classList.remove("moveLeft1")
            move3.classList.remove("moveLeft2")
            move4.classList.remove("moveLeft3")
         
            move1.classList.add("moveLeft3")
            move2.classList.add("moveLeft4")
            move3.classList.add("moveLeft1")
            move4.classList.add("moveLeft2")

        } else if(contanerRelative.classList.contains('position4')){
            contanerRelative.classList.remove("position4")
            contanerRelative.classList.add("position1")

                  
            move1Img.classList.remove("imgWidthMax")
            move1Img.classList.add("imgWidthMin")

            move2Img.classList.remove("imgWidthMin")
            move2Img.classList.add("imgWidthMax")
            // 4123

            move1.classList.remove("moveLeft3")
            move2.classList.remove("moveLeft4")
            move3.classList.remove("moveLeft1")
            move4.classList.remove("moveLeft2")
         
            move1.classList.add("moveLeft2")
            move2.classList.add("moveLeft3")
            move3.classList.add("moveLeft4")
            move4.classList.add("moveLeft1")

        }
        else{

            // initial
            move1Img.classList.remove("imgWidthMin")

            contanerRelative.classList.remove("position1")
            contanerRelative.classList.add("position2")

            move2Img.classList.remove("imgWidthMax")
            move2Img.classList.add("imgWidthMin")
            // 1234
            move3Img.classList.remove("imgWidthMin")
            move3Img.classList.add("imgWidthMax")
 
            move1.classList.remove("moveLeft2")
            move2.classList.remove("moveLeft3")
            move3.classList.remove("moveLeft4")
            move4.classList.remove("moveLeft1")

            move1.classList.add("moveLeft1")
            move2.classList.add("moveLeft2")
            move3.classList.add("moveLeft3")
            move4.classList.add("moveLeft4")
        }
}

left.addEventListener("mouseover", moveLeft)
left.addEventListener("click", moveLeft)



let moveRigth = () => {
    let move1 = document.getElementById("move1") 
    let move2 = document.getElementById("move2") 
    let move3 = document.getElementById("move3") 
    let move4 = document.getElementById("move4") 

    let move1Img = document.getElementById("move1Img") 
    let move2Img = document.getElementById("move2Img") 
    let move3Img = document.getElementById("move3Img") 
    let move4Img = document.getElementById("move4Img") 


    move1.classList.remove("moveLeft1")
    move1.classList.remove("moveLeft2")
    move1.classList.remove("moveLeft3")
    move1.classList.remove("moveLeft4")
    move2.classList.remove("moveLeft1")
    move2.classList.remove("moveLeft2")
    move2.classList.remove("moveLeft3")
    move2.classList.remove("moveLeft4")
    move3.classList.remove("moveLeft1")
    move3.classList.remove("moveLeft2")
    move3.classList.remove("moveLeft3")
    move3.classList.remove("moveLeft4")
    move4.classList.remove("moveLeft1")
    move4.classList.remove("moveLeft2")
    move4.classList.remove("moveLeft3")
    move4.classList.remove("moveLeft4")

    let contanerRelative = document.querySelector(".contanerRelative") 

        if(contanerRelative.classList.contains('position4')){
            contanerRelative.classList.remove("position4")
            contanerRelative.classList.add("position3")

            move1Img.classList.remove("imgWidthMax")
            move1Img.classList.add("imgWidthMin")

            
            move4Img.classList.remove("imgWidthMin")
            move4Img.classList.add("imgWidthMax")


            move1.classList.remove("moveRight1")
            move2.classList.remove("moveRight2")
            move3.classList.remove("moveRight3")
            move4.classList.remove("moveRight4")
         
            move1.classList.add("moveRight2")
            move2.classList.add("moveRight3")
            move3.classList.add("moveRight4")
            move4.classList.add("moveRight1")
            
            console.log("ya me movi")
        } 
        else if(contanerRelative.classList.contains('position3')){
            contanerRelative.classList.remove("position3")
            contanerRelative.classList.add("position2")

            move4Img.classList.add("imgWidthMin")
            move4Img.classList.add("imgWidthMin")

            move3Img.classList.remove("imgWidthMin")
            move3Img.classList.add("imgWidthMax")

            move1.classList.remove("moveRight2")
            move2.classList.remove("moveRight3")
            move3.classList.remove("moveRight4")
            move4.classList.remove("moveRight1")
            
         
            move1.classList.add("moveRight3")
            move2.classList.add("moveRight4")
            move3.classList.add("moveRight1")
            move4.classList.add("moveRight2")
        }    
        
        else if(contanerRelative.classList.contains('position2')){
            contanerRelative.classList.remove("position2")
            contanerRelative.classList.add("position1")

            move3Img.classList.add("imgWidthMin")
            move3Img.classList.add("imgWidthMin")

            move2Img.classList.remove("imgWidthMin")
            move2Img.classList.add("imgWidthMax")
            
            move1.classList.remove("moveRight3")
            move2.classList.remove("moveRight4")
            move3.classList.remove("moveRight1")
            move4.classList.remove("moveRight2")

            move1.classList.add("moveRight4")
            move2.classList.add("moveRight1")
            move3.classList.add("moveRight2")
            move4.classList.add("moveRight3")
        }
        else{
            contanerRelative.classList.remove("position1")
            contanerRelative.classList.add("position4")

            move2Img.classList.remove("imgWidthMax")
            move2Img.classList.add("imgWidthMin")

            // 1234
            move1Img.classList.remove("imgWidthMin")
            move1Img.classList.add("imgWidthMax")


            move1.classList.remove("moveRight4")
            move2.classList.remove("moveRight1")
            move3.classList.remove("moveRight2")
            move4.classList.remove("moveRight3")

            move1.classList.add("moveRight1")
            move2.classList.add("moveRight2")
            move3.classList.add("moveRight3")
            move4.classList.add("moveRight4")
        }
}

rigth.addEventListener("mouseover", moveRigth)
rigth.addEventListener("click", moveRigth)

