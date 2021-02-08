let notes = []; //пустой массив для заметок

document.addEventListener("DOMContentLoaded", function (event) { //действие при перезагрузке страницы
let addedNote = localStorage.getItem('note'); //переменная для ключа в хранилище
    if (addedNote != null) { //если есть такой ключ в хранилище
        notes = JSON.parse(addedNote); //то массив-строку переделываем обратно в массив
    }

    if (notes.length > 0) {
        for (let n of notes) {
        document.getElementById("notes").innerHTML += `<div>${n}<div> <br>`;
        } //перебираем каждый элемент массива с добавленными заметками и формируем див с конкретной заметкой
    } //здесь цикл отвечает за появление списка после обновления страницы
});

function addNote() {
    let note = document.getElementById("add-note").value; //берем значение из textarea
    notes.push(note); //добавление в массив заметки

    document.getElementById("notes").innerHTML = ''; //эта строчка убирает дублирование введенного текста, заметки просто появляются друг за другом
    localStorage.setItem('note', JSON.stringify(notes)); //создание ключа и значения в хранилище, значение берется из массива, который сначала преобразуем в строку

    if (notes.length > 0) {
        for (let n of notes) {
            document.getElementById("notes").innerHTML += `<div>${n}<div> <br>`;
        } //перебираем каждый элемент массива с добавленными заметками и формируем див с конкретной заметкой
    } //здесь цикл отвечает за то, чтобы заметки всегда были на экране, без него они пропадают при введеннии новой, но появляются после обновления страницы
}