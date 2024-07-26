const http = require('http');

const server = http.createServer((req, res) => {
    req.setEncoding('utf-8');
    req.on('data', (data) => {
        console.log('получено сообщение: ', data);
    });
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Сообщение получено');
});


server.listen(3000, 'localhost', ()=> {
    console.log('сервер запущен');
});


