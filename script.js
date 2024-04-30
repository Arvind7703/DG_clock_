// <----------Varibale------------> 


let hrs = document.querySelector("#hrs");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let milsec = document.querySelector("#milsec");

// <----------Function------------> 

function timeDeclaration(){
    
    let currentTime = new Date();
    
    hrs.innerHTML = currentTime.getHours();
    min.innerHTML = currentTime.getMinutes();
    sec.innerHTML = currentTime.getSeconds();
    milsec.innerHTML = currentTime.getMilliseconds();
}

// <---Call--->
setInterval(timeDeclaration, 20);



