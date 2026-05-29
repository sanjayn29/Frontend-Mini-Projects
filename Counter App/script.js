const counter = document.querySelector(".result");
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const reset = document.getElementById("res");

let count = 0;

inc.addEventListener("click",function(){
    count++;
    counter.innerHTML = count;
})

dec.addEventListener("click",function(){
    count--;
    counter.innerHTML = count;
})

reset.addEventListener("click",function(){
    count = 0;
    counter.innerHTML = count;
})