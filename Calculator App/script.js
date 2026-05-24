const display = document.getElementById("display");

function appendValue(value){
    display.value += value;
}

function clearr(){
    display.value="";
}

function del(){
    display.value=display.value.slice(0,-1);
}

function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}