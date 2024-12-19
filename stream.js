const fs = require('fs');

const readStream = fs.createReadStream('api.js');
const writeStream = fs.createWriteStream('output.txt');

// readStream.on('data', (chunk) => {
//     console.log(`Data Received: ${chunk}`);
//     writeStream.write(chunk);
// });

// readStream.on('end', () => {
//     console.log(`No more data`);
//     writeStream.end(); 
// });

const { Transform } = require('stream');

const upperTransform = new Transform({
    transform(chunk, encoding, callback) {
        const upperChunk = chunk.toString().toUpperCase();
        callback(null, upperChunk); // Pass the transformed chunk
    }
});

readStream
    .pipe(upperTransform) // Pipe through the transform stream
    .pipe(writeStream); // Write the transformed data to the output file
