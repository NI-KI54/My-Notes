const btnEl = document.getElementById("btn");
const appEl = document.getElementById("app");

function createNoteEl(id, content){
    const element = document.createElement("textarea")
    element.classList.add("note");
    element.placeholder = "Empty Note"
    element.value = content

    element.addEventListener("dblclick", ()=>{
        const warning = confirm("Do you want to delete this note?")
        if(warning){
            deleteNote(id, element)
        }
    })


element.addEventListener("input", ()=>{
    upadateNote(id, element.value)
});

return element;
};

function deleteNote(){

}

function updateNote(){

}

function addnote(){
    const notes = getNotes();
    const noteobj = {
        id:Math.floor(Math.random() * 100000),
        content: "",
    };
    const noteEl = createNoteEl(noteobj.id, noteobj.content);
    appEl.insertBefore(noteEl, btnEl);

    notes.push(noteobj);

    saveNote(notes);
}

function saveNote(notes){
    localStorage.setItem("note-app", JSON.stringify(notes))
}

function getNotes(){
    return JSON.parse(localStorage.getItem("note-app") || "[]");
}

btnEl.addEventListener("click", addnote);