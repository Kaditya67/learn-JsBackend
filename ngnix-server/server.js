const fs = require('fs');
const http = require('http');
const path = require('path');

// Helper function to get MIME types
const getMimeType = (ext) => {
    const mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript'
    };
    return mimeTypes[ext] || 'application/octet-stream';
};

// Creating the server
const server = http.createServer((req, res) => {
    let safePath = path.normalize(req.url).replace(/^(\.\.[\/\\])+/, ''); // Prevent directory traversal
    const filepath = path.join(__dirname, safePath === '/' ? 'index.html' : safePath);

    const extName = path.extname(filepath).toLowerCase();
    const contentType = getMimeType(extName);

    fs.readFile(filepath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // File not found
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404: File Not Found');
            } else {
                // Other server errors
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('500: Internal Server Error');
            }
        } else {
            // Serve the file
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
