const lengthInput = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const generatebtn = document.getElementById("generatebtn");
const result=document.getElementById("result");

generatebtn.addEventListener("click",function(){
    let characters = "";
    if(uppercase.checked){
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(lowercase.checked){
        characters += "abcdefghijklmnopqurstuvwxyz";
    }
    if(numbers.checked){
        characters += "0123456789";
    }
    if(characters === ""){
        alert("Select at least one option!");
        return;
    }

    let password = "";
    let length = Number(lengthInput.value);
    for(let i = 0;i<length;i++){
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    result.innerText = password;
})