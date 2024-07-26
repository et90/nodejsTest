const mongojs = require('mongojs');
//var  db = mongojs('localhost:27017/userdb');
//var  db = mongojs('mongodb://localhost:27017/userdb');

// ==> var  db = mongojs('mongodb://127.0.0.1:27017/userdb');

//const db = mongojs('mongodb://178.23.190.90:27017/userdb'); // last
//const db = mongojs('http://178.23.190.90:27017/userdb', ['users']);
//db.users.insertOne({"name":"base", "age": "0"});
const db = mongojs('mongodb://178.23.190.90:27017/userdb');
db.users.insertOne({"name":"basfde", "age": "0"});
/*
const mycollection = db.collection('user');

db.mycollection.insertOne({neme:"peta",age:100});

s = db.mycollection.find({name:"tom"});
console.log(s);
*/
//db.mycollection.find({}).toArray(function (err, docs) { ... })
