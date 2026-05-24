const notesbutton = document.getElementById("notes-button");
const noteinput = document.getElementById("notes-input");
const noteslist = document.getElementById("notes-list");

notesbutton.addEventListener("click",function(){
    const notetext = noteinput.value.trim();
    if(notetext===""){
        alert("Please enter a note.");
        return;
    }
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("notes");

    const notepara = document.createElement("p");
    notepara.innerText=notetext;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText="Delete";
    deleteBtn.classList.add("deletebtn");

    deleteBtn.addEventListener("click",function(){
        noteDiv.remove();
    });

    noteDiv.appendChild(notepara);
    noteDiv.appendChild(deleteBtn);

    noteslist.appendChild(noteDiv);

    noteinput.value="";

});