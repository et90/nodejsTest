const express = require('express');
const http = require('http');
const socetIO = require('socket.io');
const bodyParser = require('body-parser');

const sqlite3 = require('sqlite3').verbose();

const PORT = 3000;

const app = express();
const server = http.createServer(app);
const io = socetIO(server);

app.use(bodyParser.raw({ type: 'application/octet-stream'}));

//создание нового пользователя
app.get('/createuser', function(req, res){
    const data = req.body;

    console.log(data);
    res.send('RRecived!!!')
});

server.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
  });