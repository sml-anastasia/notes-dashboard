let modal = document.querySelector(".modal");
let noteForm = document.querySelector(".noteForm");
let noteDiv = document.querySelector("#notes");
let cancel = document.querySelector(".cancel");
let noteCard = '';
let noteList = [];

document.addEventListener("DOMContentLoaded", function (event) {
    if (localStorage.getItem('notes') != null) { //если есть такой ключ в хранилище
        noteList = JSON.parse(localStorage.getItem('notes')); //то массив-строку переделываем обратно в массив
    }
    if (noteList.length > 0) {
        for (i = 0; i < noteList.length; i++) {
            noteDiv.innerHTML += noteCard;
        }
    }
});

noteForm.addEventListener('submit', (event) => {
    addNote(event);
});

function addNote(event) {
    event.preventDefault();

    let newNote = {};
    let title = document.querySelector("#add-box__note-title");
    let note = document.querySelector("#add-box__note-input");

    if (title.value == '' || note.value == '') {
        return alert("Please, enter both fields");
    } else {
        newNote.title = title.value;
        newNote.note = note.value;
    }

    title.value = '';
    note.value = '';

    for (n of noteList) {
        noteCard = `<div class="note"><h3 id="note-title">${newNote.title}</h3><p id="note-text">${newNote.note}</p><button id="note-btn" type="button"><img src="assets/images/note-icon-delete.svg" alt="delete"></button></div>`;
    }
    noteDiv.innerHTML += noteCard;
    noteList.push(newNote);
    localStorage.setItem('notes', JSON.stringify(noteList));
    //localStorage.setItem('note-card', noteCard);
    cancel.click();
}