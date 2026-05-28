const addbtn = document.getElementById("addbtn");
const userinput = document.getElementById("userinput");
const result = document.getElementById("result");

addbtn.addEventListener("click",function(){
    if(userinput.value.trim() === ""){
        alert("Please enter a task");
        return;
    }
    const taskdiv = document.createElement("div");
    taskdiv.classList.add("task");

    const taskpara = document.createElement("p");
    taskpara.innerText= userinput.value.trim();

    const btndiv = document.createElement("div");
    btndiv.classList.add("btn");

    const cpl = document.createElement("button");
    cpl.innerText = "Complete";
    cpl.classList.add("cplbtn");

    cpl.addEventListener("click",function(){
        taskpara.classList.toggle("complete");
    })

    const del = document.createElement("button");
    del.innerHTML = "Delete";
    del.classList.add("delbtn");

    del.addEventListener("click",function(){
        taskdiv.remove();
    })

    btndiv.appendChild(cpl);
    btndiv.appendChild(del);

    taskdiv.appendChild(taskpara);
    taskdiv.appendChild(btndiv);

    result.appendChild(taskdiv);

    userinput.value = "";
})