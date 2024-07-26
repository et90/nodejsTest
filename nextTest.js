/*
var http = require('http');

var count = 0;

var server = http.createServer( foo
   // function(req,res){
   //     res.write("hello");
   //     res.end();
   // }

).listen(3000);


function foo(req,res){
   
    res.write('hello you count : ' + count.toString());
    res.end();
    count++;
}

*/

const { json } = require('express');
var express = require('express');

var app = express();

var str = " ";

app.get('/base/:id', (req, res) => {
console.log('base');
str = "base " + req.params["id"];

res.end(str);
});

app.get('/mass', (req, res) => {
    console.log('mass');
    var dummyData = {
        "userID":10,
        "userName":"myName",
        "someArray":[
            {name:"aOne", value: 100.3},
            {name:"aTwo", value: 200.3},
            {name:"aTree", value: 300.3},
        ]
    }
    res.json(dummyData);
    });

app.listen(3000);