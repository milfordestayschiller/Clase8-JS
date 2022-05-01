var colorInput = document.querySelector(".color")
var colorBody = document.querySelector(".body")

colorInput.addEventListener("keypress", function (envent) {
    if (envent.key ==  "Enter" && colorInput.value== "rojo") {
        colorBody.classList.add("bodyrojo")
        }   
        if (envent.key ==  "Enter" && colorInput.value== "verde") {
            colorBody.classList.add("bodyverde")
            }  
            
             if (envent.key ==  "Enter" && colorInput.value== "azul") {
                colorBody.classList.add("bodyazul")
                }   
                   if (envent.key ==  "Enter" && colorInput.value== "rosado") {
                        colorBody.classList.add("bodyrosado")
                        }  
                        if (envent.key ==  "Enter" && colorInput.value== "amarillo") {
                            colorBody.classList.add("bodyamarillo")
                            } 
                            if (envent.key ==  "Enter" && colorInput.value== "naranja") {
                                colorBody.classList.add("bodynaranja")
                                } 
                                if (envent.key ==  "Enter" && colorInput.value== "cafe") {
                                    colorBody.classList.add("bodycafe")
                                    } 


})
