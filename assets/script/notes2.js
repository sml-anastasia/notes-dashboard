let modal = document.querySelector(".modal");
let noteForm = document.querySelector(".noteForm");
let noteDiv = document.querySelector("#notes");
let cancel = document.querySelector(".cancel");
let noteList = [];

document.addEventListener("DOMContentLoaded", function (event) {
    if (localStorage.getItem('notes') != null) {
        noteList = JSON.parse(localStorage.getItem('notes'));
    }
    if (noteList.length > 0) {
        for (n of noteList) {
            noteDiv.innerHTML += n.card;
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
    noteList.push(newNote);
    title.value = '';
    note.value = '';

    let noteCard = '';
    for (n of noteList) {
        noteCard = `<div class="note"><h3 id="note-title">${newNote.title}</h3><p id="note-text">${newNote.note}</p><button id="note-btn" type="button"><img src="assets/images/note-icon-delete.svg" alt="delete"></button></div>`;
        newNote.card = noteCard;
    }
    noteDiv.innerHTML += noteCard;
    
    localStorage.setItem('notes', JSON.stringify(noteList));
    //localStorage.setItem('note-card', JSON.stringify(noteCards));
    cancel.click();
}

function clearAll() { //функция очищения всех заметок из хранилища и из документа
    localStorage.removeItem('notes'); //очищаем ключ
    document.querySelectorAll('.note').forEach(note => { note.style.display = "none" }); //выбираем все созданные дивы, перебираем и присваиваем каждому стиль display: none;
    //нагуглила просто замечательный способ
}