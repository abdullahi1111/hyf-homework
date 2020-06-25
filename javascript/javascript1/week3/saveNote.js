//save a note.
let notes = [];

function saveNote(content, id) {
  notes.push({ content: content, id: id });
}
saveNote("Pick up groceries", 1);
saveNote("Do cooking", 2);
saveNote("Go to work", 3);
saveNote("Go for a walk", 4);

console.log(notes);

//Get a note

function getNote(id) {
  for (i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    } else return "Error";
  }
}

const firstNote = getNote(1);
//Log out notes
function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      "The note with id:" +
        notes[i].id +
        " has the following note text " +
        notes[i].content
    );
  }
}

logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry
