
const WebSocket =  require('ws');
var clients = [];

const wss = new WebSocket.Server({ port: 3000 },()=>{
    console.log('server started');
});
wss.on('connection', function(ws,req, res) {
    /*
    var id = clients.length;
    clients[id] =ws;
    console.log('новое соеденение N' + id);
    clients[id].send('Привет. Ваш номер ' + id);
    console.log(clients);

    for(var key in clients){
        if(key!=id){
            clients[key].send('к нам присоеденился N' + id);
        }
    }
    */  
    console.log("on connect");
    console.log('ip: ' + req.socket.remoteAddress);
    console.log('port: ' + req.socket.remotePort);
    console.log('statuscode: ' + req.statusCode);
    
    

   ws.on('message', (data) => {
      console.log('data received \n %o',data.toString());
      
      ws.send(data);
   })
});
wss.on('listening',()=>{
   console.log('listening on 3000');
});