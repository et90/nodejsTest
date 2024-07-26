
var http = require('http');
var url = require('url');

const socetIO = require('socket.io');
const bodyParser = require('body-parser');

const sqlite3 = require('sqlite3').verbose();

const PORT = 3000;
//const io = socetIO(server);


var server = http.createServer(function(req,res){
    req.requrl = url.parse(req.url, true);
    if(req.requrl.pathname =='/'){
        console.log('path: ' + req.requrl.pathname );
    }
    
} );

server.listen(3000);