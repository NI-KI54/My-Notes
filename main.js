const btnEl = document.getElementById("btn");


function addNote(){
    const noteObj = {
        id: Math.floor(Math.random()*100000)
        content: "",
    };
    console.log("noteObj");
}

btnEl.addEventListener("click", addNote);