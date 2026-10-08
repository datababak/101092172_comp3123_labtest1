// Question 3 - File Module
// This program removes the log files and then deletes the Logs folder.

// Import the file system and path modules
const fs = require('fs');
const path = require('path');

// Get the location of the Logs folder
const logsPath = path.join(process.cwd(), 'Logs');

// Check if the Logs folder exists before deleting anything
if (fs.existsSync(logsPath)) {

    // Get the names of all files inside Logs
    let files = fs.readdirSync(logsPath);

    // Go through the files one by one
    for (let i = 0; i < files.length; i++) {

        // Find the complete path of each file
        let filePath = path.join(logsPath, files[i]);

        // Delete the file
        fs.unlinkSync(filePath);

        // Show which file was deleted
        console.log("delete files..." + files[i]);
    }

    // After deleting all files, remove the empty Logs folder
    fs.rmdirSync(logsPath);
}