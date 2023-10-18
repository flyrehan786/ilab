const fs = require('fs');
const path = require('path');

// Create a writable stream to the log file
const logFilePath = path.join(__dirname, 'app.log'); // Specify the path and name of the log file
const logStream = fs.createWriteStream(logFilePath, { flags: 'a' }); // 'a' means append

// Function to write a log entry
function writeLog(logEntry) {
  const timestamp = new Date().toLocaleString();
  const logLine = `${timestamp}: ${logEntry}\n`;
  logStream.write(logLine);
}

// Example usage
writeLog('This is a log entry.');
writeLog('Another log entry.');

// Close the log stream when done (optional)
logStream.end();

// In a real application, you may want to create a log function that logs messages to the file and to the console for easy debugging.
