let notes = []; //массив для текста заметок
let titles = []; //массив для заголовков
let generatedNotes = []; //массив для созданного дива
let noteString = ''; //переменная для генерируемой заметки

document.addEventListener("DOMContentLoaded", function (event) {
    let addedNote = localStorage.getItem('note'); //переменная для ключа в хранилище
    if (addedNote != null) { //если есть такой ключ в хранилище
        generatedNotes = JSON.parse(addedNote); //то массив-строку переделываем обратно в массив
    }
    if (generatedNotes.length > 0) {
        for (noteString of generatedNotes) {
            document.getElementById("notes").innerHTML += noteString;
        }
    }
});

function addNote() { //функция добавления заметки
    let title = document.getElementById("add-box__note-title").value; //переменная для введенного заголовка заметки
    let note = document.getElementById("add-box__note-input").value; //переменная для введенного текста заметки
    titles.push(title); //добавление в массив
    notes.push(note); //добавление в массив
    
    for (i = 0; i < notes.length; i++) { //перебираем каждый элемент массива добавленных текстов, цикл с счетчиком, потому что нужно склеить массив заголовков и массив текстов
        noteString = `<div id="note${i}" class="note"><h3 id="note-title">${title}</h3><p id="note-text">${note}</p><button id="note-btn" type="button" onclick="deleteNote(${i});"><img src="assets/images/note-icon-delete.svg" alt="delete"></button></div>`; //создаем заметку в виде дива с заголовком и кнопкой удалить (еще в процессе)
    }
    generatedNotes.push(noteString); //добавление в массив новых заметок
    document.getElementById("notes").innerHTML += noteString; //вывод в див

    localStorage.setItem('note', JSON.stringify(generatedNotes)); //записываем ключ-значение в хранилище
}

function clearAll() { //функция очищения всех заметок из хранилища и из документа
    localStorage.removeItem('note'); //очищаем ключ
    document.querySelectorAll(".note").forEach(note => { note.style.display = "none" }); //выбираем все созданные дивы, перебираем и присваиваем каждому стиль display: none;
    //нагуглила просто замечательный способ
}

function deleteNote(id) {
    generatedNotes = JSON.parse(localStorage.getItem('note'));
    for (i = 0; i < generatedNotes.length; i++) {
        generatedNotes.splice(id, 1);
        document.querySelector("#note" + id).style.display = "none";
        localStorage.setItem('note', JSON.stringify(generatedNotes));
    }
}