// I am using it as a helping file to learn how to import and export modules in node.js

var message = "This is a message from notes.js";
const printNotes = function (note) {
    console.log(note);
}

module.exports = {
    printNotes,
    message
}