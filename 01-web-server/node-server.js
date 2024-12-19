const http = require('http');
const port = 3001;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Node JS Server here!');
    }
    else if(req.url === '/about'){
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, About Node JS Server!');   
    }else if(req.url === '/contact'){
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Contact Node JS Server at ${port}!`);
    }else{
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404: File Not Found');
    }

})

server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})