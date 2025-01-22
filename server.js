var fs = require('fs'); // File System
var os = require('os'); // Operating System
var notes = require('./notes.js'); // Importing notes.js file

notes.printNotes("ABCD"); 
console.log(notes.message);
var user = os.userInfo(); // Getting user information
var date = new Date(); // Getting current date and time
var log = `User: ${user.username} - Date: ${date}`; // Creating a log
console.log(log); // Logging the log