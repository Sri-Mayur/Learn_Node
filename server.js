var fs = require('fs'); // File System
var os = require('os'); // Operating System
var notes = require('./notes.js'); // Importing notes.js file
var _ = require('lodash'); // Lodash library

notes.printNotes("ABCD"); 
console.log(notes.message);
var user = os.userInfo(); // Getting user information
var date = new Date(); // Getting current date and time
var log = `User: ${user.username} - Date: ${date}`; // Creating a log
console.log(log); // Logging the log

// Using lodash
var filteredArray = _.uniq(['Mayur', 1, 'Mayur', 1, 2, 3, 4]);
console.log(filteredArray);