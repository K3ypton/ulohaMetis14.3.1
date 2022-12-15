let solution = [];

solution = JSON.parse(localStorage.getItem("solution"));
console.log(solution);


if(solution === null){
    solution =[];
}
let historyOfNumbers = document.getElementById("historyOfNumbers");
historyOfNumbers.innerText = solution;


function solve(){
    let solut = document.getElementById("solut");
    let num1 = parseFloat(document.getElementById("num1").value); 
    let num2 = parseFloat(document.getElementById("num2").value);

    
    
    switch(document.getElementById("operation").value){
        
        
        case "plus": 
            solut.value = num1 + num2;
            solution.unshift(num1 + num2);
            break;
        
        
            case "minus": 
            solut.value = num1 - num2;
            solution.unshift(num1 - num2);
            break;
       
       
            case "krat": 
            solut.value = num1 * num2;
            solution.unshift(num1 * num2);
            break;
        
        
            case "deleno": 
            solut.value = num1 / num2;
            solution.unshift(num1 / num2);
            break;
    }

    
    let historyOfNumbers = document.getElementById("historyOfNumbers");
    if(solution.length > 5){
        solution.pop();
    } 
    historyOfNumbers.innerText = solution;

   
   
    localStorage.setItem("solution", JSON.stringify(solution));
}



function delHistory(){
    localStorage.removeItem("solution");
    solution = [];
    historyOfNumbers.innerText = solution;
}