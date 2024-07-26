var http = require("http");
 
http.createServer(async function(request, response){
     
    console.log("Url: " + request.url);
    console.log("Тип запроса: " + request.method);
    console.log("User-Agent: " + request.headers["user-agent"]);
    console.log("Все заголовки");
    console.log(request.headers);
    var data = "";
    

    if (request.url === "/user") {
         
        /* 
        request.on("data", chunk => {
            data += chunk;
        });
        request.on("end", () => {
            console.log('data: ' +data);
            const user = JSON.parse(data);
            response.end("Данные успешно получены");

        });
        */
        const buffers = []; 
         for await ( const chunk of request) {
            buffers.push(chunk);        // добавляем в буфер все полученные данные
        }
 
        const user = JSON.parse(Buffer.concat(buffers).toString());
        console.log(user.name,"-", user.password);
        response.end("Данные успешно получены");
            
           // console.log('name: ' + user.name);
    }

    response.end();

}).listen(3000);