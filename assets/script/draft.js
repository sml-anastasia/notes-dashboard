/*
а вот этот цикл в удалении всех заметок не сработал

let elems = document.getElementsByClass("note");
for (let i = 0; i < elems.length; i++)
elems[i].style.display = "none";
*/




/*for (let i = 0; i < generatedNotes.length; i++) {
        if (generatedNotes[i].id == id) {
            generatedNotes.splice(id, 1);
        }
    }
    
    
    localStorage.setItem('note', JSON.stringify(generatedNotes));
//let indexOfNoteToDelete = generatedNotes.findIndex((noteInArray) => noteInArray.id == id);
    //console.log(indexOfNoteToDelete);
    //let updatedNotes = generatedNotes.splice(indexOfNoteToDelete, 1);
    //console.log(updatedNotes);
    //
    //document.querySelector(".note").this.style.display = "none";
function removeItemFromTodos(itemId, todos) {
  // find the index of the todo with the id you are looking for
const indexOfTodoToDelete = todos.findIndex((todoInArray) => todoInArray.id === itemId));
  // remove that todo:
  todos.splice(indexOfTodoToDelete, 1) // delete the todo
} 

    localStorage.setItem('note', JSON.stringify(generatedNotes));
    
    
    
    
        //let indexNote = generatedNotes.indexOf(noteToDelete);
    //console.log(indexNote);
    /*if (indexNote > -1) {
        generatedNotes.splice(indexNote, 1);
        }
    console.log(generatedNotes);
    
    console.log(indexNote);
    //generatedNotes = generatedNotes.filter(item => item != noteToDelete);
    
    //let deletedNote = generatedNotes.find(noteToDelete => noteToDelete.id == this.index);*/
    /*
let value = 3

let arr = [1, 2, 3, 4, 5, 3]

arr = arr.filter(item => item !== value)

console.log(arr)
// [ 1, 2, 4, 5 ]



    var array = [1, 3, 5];
console.log(array);
// array = [1, 3, 5]
var index = array.indexOf(3);
if (index > -1) {
array.splice(index, 1);
}
// array = [1, 5]
console.log(array);



background-image: url("../images/main_background.JPG");
    background-attachment: fixed;
    background-color: $backgroundColor;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;




    */
    //generatedNotes.splice(noteToDelete, );
    //console.log(noteToDelete);
    //console.log(deletedNote);
    //let noteToDelete = generatedNotes.splice(id, 1);