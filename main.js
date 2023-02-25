const btnEl = document.getElementById("btn");

function createNoteEl(id, content){
    console.log(id,content);
};

function addnote(){
    const noteobj = {
        id:Math.floor(Math.random() * 100000),
        content: "",
    };
    const noteEl = createNoteEl(noteobj.id, noteobj.content);
}

btnEl.addEventListener("click", addnote);