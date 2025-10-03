var color = document.querySelector("#color");
var createButton = document.querySelector("#createButton");
var list = document.querySelector("#list");

var createNoteElement = () => {

    var noteDiv = document.createElement("div");
    noteDiv.classList.add("note");

    var closeSpan = document.createElement("span");
    closeSpan.classList.add("close");
    closeSpan.textContent = "Desk";

    var textarea = document.createElement("textarea");
    textarea.name = "content";
    textarea.id = "content";
    textarea.rows = 0;
    textarea.cols = 30;

    noteDiv.appendChild(closeSpan);
    noteDiv.appendChild(textarea);

    noteDiv.style.borderColor = color.value;
    noteDiv.style.backgroundColor = color.value;

    return noteDiv;
};

createButton.addEventListener("click", () => {
    var newNote = createNoteElement();
    list.appendChild(newNote);
});

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("close")) {
        e.target.parentNode.remove();
    }
});

var cursor = {
    x: null,
    y: null,
};

var note = {
    dom: null,
    x: null,
    y: null
};

document.addEventListener("mousedown", (e) => {
    if(e.target.classList.contains("note")) {
        cursor = {
            x: e.clientX,
            y: e.clientY,
        };

        note = {
            dom: e.target,
            x: e.target.getBoundingClientRect().left,
            y: e.target.getBoundingClientRect().top,
        };
    }
});

document.addEventListener("mousemove", (e) => {
    if (note.dom === null) return;

    if (e.target.classList.contains("note")){
        var currentCursor = {
            x: e.clientX,
            y: e.clientY,
        };

        var distance = {
            x: currentCursor.x - cursor.x,
            y: currentCursor.y - cursor.y,
        };

        note.dom.style.left = note.x + distance.x + "px";
        note.dom.style.top = note.y + distance.y + "px";
        note.dom.style.cursor = "grab";
    }
});

document.addEventListener("mouseup", () => {
    if(note. dom === null) return;

    note.dom.style.cursor = "auto";
    note.dom = null;
});