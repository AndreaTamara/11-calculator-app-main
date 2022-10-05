//cambiar de tema
const body = document.getElementsByTagName("body")[0];

let prefer = Number(localStorage.getItem ("theme"))

themeSwitch (prefer)

function themeSwitch (t){
   
    switch(t){
        case 1: 
            body.classList.remove("theme_3");
            body.classList.remove("theme_2");
            localStorage.setItem("theme",1)

            break;
        case 2:
            body.classList.remove("theme_3");
            body.classList.add("theme_2");
            localStorage.setItem("theme",2)
            
            break;
        case 3:
            body.classList.remove("theme_2");
            body.classList.add("theme_3");
            localStorage.setItem("theme",3)
            
            break;    

    }
}






// operaciones calculadora

const btnNumber = document.getElementsByClassName("number_btn");
const btnOper = document.getElementsByClassName("operation_btn");
const btnDelete = document.getElementById("del");
const btnReset = document.getElementById("reset");
const btnEqual = document.getElementById("equal");
const screenBox = document.getElementById("screen");
let firstEnter = "";
let lastEnter = "";
let lastCharacter;
let operation;
let result;


function addNumber (num){
    if(lastEnter.includes(".") && num=="." && !result) return;
    if(result){
        lastEnter=""
        result= ""
        displayScreen('')
    }
    lastEnter = String(lastEnter) + String(num);
    displayScreen (lastEnter);
}

function operationType (op){
    
    if(lastEnter === "") return
    if(firstEnter != ""){
        calc();
        displayScreen (result)
    }
    operation = String(op);
    firstEnter = lastEnter;
    lastEnter = "";
}

function displayResult(){
    calc();
    displayScreen (result);

}

function calc (){
    let firstNumber = Number(firstEnter);
    let lastNumber = Number(lastEnter);
    switch (operation){
        case "+":
            result = firstNumber + lastNumber;
            break;
        case "-":
            result = firstNumber - lastNumber;
            break;
        case "x":
            result = firstNumber * lastNumber;
            break;
        case "/":
            result = firstNumber / lastNumber;
            break;
        default:
            result = lastEnter
    }
    
    result = String(result)
    lastEnter = String(result);
    operation = undefined;
    firstEnter = "";

}

function displayScreen (n){
    screenBox.textContent = n.substring(0,15);
}

function reset(){
    screenBox.textContent = "";
    result="";
    firstEnter = "";
    lastEnter = "";
    operation = undefined;

}


function deleteNumber (){
    lastCharacter = lastEnter.slice(0, -1);
    lastEnter = lastCharacter;
    displayScreen (lastEnter);
}





