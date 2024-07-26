const http = require('http');

const server = http.createServer((req,res) => {
    
    const ip = req.socket.remoteAddress;
    const userAgent = req.headers['user-agent'];

    const response = `
    <html>
        <head> 
            <title>Client Info</title>
        </head>
        <body>
            <h1>Client Info</h1>
            <p>IP Adress: ${ip}</p>
            <p>User Agent: ${userAgent}</p>
            
        </body>
    </html>
    ` // текстовый ответ
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(response);
    console.log(`IP Adress: ${ip}`);
    console.log(`User Agent: ${userAgent}`);
}); // закончили создание сервера

server.listen(3000, ()=> {
    console.log('Server is running on http://localhost:3000');
});