const fs = require('fs');
const os = require('os');
const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message) {
        this.emit('logMessage', { message, timestamp: new Date().toISOString() });
    }

    alert(message) {
        this.emit('alertMessage', { message, timestamp: new Date().toISOString() });
    }
}

const logger = new Logger();
const logFile = './eventlog.txt';

const logToFile = (event) => {
    const logMessage = `${event.timestamp} - LOG: ${event.message}\n`;
    fs.appendFile(logFile, logMessage, (err) => {
        if (err) {
            console.error("Error writing to log file:", err);
        }
    });
};
 
const logAlertToFile = (event) => {
    const logMessage = `${event.timestamp} - ALERT: ${event.message}\n`;
    fs.appendFile(logFile, logMessage, (err) => {
        if (err) {
            console.error("Error writing to log file:", err);
        }
    });
};

const printToConsole = (event) => {
    console.log(`[${event.timestamp}] ${event.message}`);
};

// Handle 'logMessage' events
logger.on('logMessage', logToFile);
logger.on('logMessage', printToConsole);

// Handle 'alertMessage' events
logger.on('alertMessage', logAlertToFile);
logger.on('alertMessage', (event) => {
    console.warn(`ALERT: ${event.message} (logged at ${event.timestamp})`);
});

// Emit Events Periodically
setInterval(() => {
    logger.log({ message: `System status: Free Memory = ${(os.freemem() / os.totalmem() * 100).toFixed(2)}%` });
}, 5000);

setInterval(() => {
    logger.alert({ message: `System alert: CPU load is unusually high.` });
}, 15000);

// Show Error Handling with uncaught event
logger.on('error', (err) => {
    console.error(`ERROR: ${err.message}`);
});

// Simulate an error (uncomment to test)
// logger.emit('error', new Error('Something went wrong!'));
