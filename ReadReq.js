const http = require('http');
const console = require('console');

const server = http.createServer((req, res) =>{
    console.log(`Request metod: ${req.method}`);
    console.log(`Request URL: ${req.url}`);
    res.end();
});

server.listen(3000, () => console.log('Server start'));

