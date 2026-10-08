// Question 3 - File Module
// This program creates a Logs folder and adds 10 text files.

// Import the modules needed to work with files and folders
const fs = require('fs');
const path = require('path');

// Find the current directory and add Logs to its path
const logsPath = path.join(process.cwd(), 'Logs');

// Create the Logs folder only if it does not exist
if (!fs.existsSync(logsPath)) {
    fs.mkdirSync(logsPath);
}

// Move the current working directory to Logs
process.chdir(logsPath);

// Create 10 files using a loop
for (let i = 0; i < 10; i++) {

    // Give each file a different name from log0.txt to log9.txt
    let fileName = "log" + i + ".txt";

    // Create the file and write some text inside it
    fs.writeFileSync(fileName, "This is log file " + i);

    // Display the filename in the terminal
    console.log(fileName);
}