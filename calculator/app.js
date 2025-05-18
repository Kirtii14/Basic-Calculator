let sText = document.querySelector("#s-text");
let btns = document.querySelectorAll(".btn");
let c = document.querySelector(".C");
let eql = document.querySelector(".eql");


btns.forEach(btn => {    //screen-visuals
    btn.addEventListener("click", () => {
       sText.innerText += btn.innerText;
       
    });  
    });

const clear = () => {   //c-screen

sText.innerText = "";
}
 c.addEventListener("click", clear); //clear-screen


 
 const equal = () => {  //calculation-logic
    let texts = sText.innerText;
        if (texts.includes("+")){ //add
        let parts = texts.split("+");
        let a = parseInt(parts[0]);
        let b = parseInt(parts[1]);
        let result = a + b; 
        sText.innerText = result.toString();  // Update texts
        }

        else if (texts.includes("-")){ //subtract
        let parts = texts.split("-");
        let a = parseInt(parts[0]);
        let b = parseInt(parts[1]);
        let result = a - b; 
        sText.innerText = result.toString();  // Update texts
        }

        else if (texts.includes("/")){ //division
        let parts = texts.split("/");
        let a = parseInt(parts[0]);
        let b = parseInt(parts[1]);
        let result = a / b; 
        sText.innerText = result.toString();  // Update texts
        }

        else if (texts.includes("x")){ //multiplication
        let parts = texts.split("x");
        let a = parseInt(parts[0]);
        let b = parseInt(parts[1]);
        let result = a * b; 
        sText.innerText = result.toString();  // Update texts
        }

        else{
            return texts = "error!";
        }

        for(let btn of btns){
            btn.disabled = true;
        }
        
    }
    
 

 eql.addEventListener("click", equal); //eql-btn

 const add = () =>{
   let texts = sText.innerText;
    if (texts.includes("+")) {
        let parts = texts.split("+");
        let a = parseInt(parts[0]);
        let b = parseInt(parts[1]);
        let result = a + b;
        texts = result.toString();  // Update texts
    }

 }


