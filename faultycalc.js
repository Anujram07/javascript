let random = Math.random()
let a = prompt("Enter first number");
let b = prompt("Enter second number");
let c = prompt("Enter operaion");

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}



if(random>0.1){
      //perform correct calculation
      console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    //perform wrong calculation

    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 
}