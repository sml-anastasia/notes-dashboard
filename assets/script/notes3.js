let modal = document.querySelector(".modal");
let noteForm = document.querySelector(".noteForm");
let noteDiv = document.querySelector("#notes");
let cancel = document.querySelector(".cancel");
let noteDeleteButtons;
let noteList = [];

document.addEventListener("DOMContentLoaded", function (event) {
    noteList = JSON.parse(localStorage.getItem('notes'));
    if (noteList != null) {
        appendNotes();
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
    noteList.push(newNote);
    appendNotes();
    cancel.click();
}

function appendNotes() {
    let notes = document.querySelectorAll(".note-item");
    if (notes.length > 0) {
        notes.forEach(note => {
            note.remove();
        })
    }

    noteList.map(note => {
        let noteBox = document.createElement('div');
        noteBox.classList = 'note-item';
        let noteTitle = document.createElement('span');
        noteTitle.innerText = note.title;
        noteTitle.classList = 'note-title';
        let noteText = document.createElement('span');
        noteText.innerText = note.note;
        noteText.classList = 'note-text';
        let noteDelete = document.createElement('img');
        noteDelete.src = 'assets/images/note-icon-delete.svg';
        noteDelete.classList.add('note-delete');

        noteBox.appendChild(noteTitle);
        noteBox.appendChild(noteText);
        noteBox.appendChild(noteDelete);
        
        noteDiv.appendChild(noteBox);
        getDeleteButtons();
        localStorage.setItem('notes', JSON.stringify(noteList));
    })
}

function getDeleteButtons() {
    noteDeleteButtons = Array.from(document.querySelectorAll('.note-delete'));
    noteDeleteButtons.forEach(button => {
        let noteToDelete = button.previousSibling.previousSibling.innerText;
        button.addEventListener('click', () => {
            deleteNote(noteToDelete);
        })
    })
}

function deleteNote(noteToDelete) {
    for(let i = 0; i < noteList.length; i++) {
        if(noteList[i].title == noteToDelete) {
            noteList.splice(i, 1);
        }
    }
    localStorage.setItem('notes', JSON.stringify(noteList));
    appendNotes();
}


/*function clearAll() { //функция очищения всех заметок из хранилища и из документа
    localStorage.removeItem('notes'); //очищаем ключ
    document.querySelectorAll('.note').forEach(note => { note.style.display = "none" }); //выбираем все созданные дивы, перебираем и присваиваем каждому стиль display: none;
    //нагуглила просто замечательный способ
}*/