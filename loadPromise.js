
/*
var mongojs = require('mongojs');
//var  db = mongojs('localhost:27017/userdb');
//var  db = mongojs('mongodb://localhost:27017/userdb');
var db = mongojs('mongodb://178.23.190.90:27017/userdb');

db.users.insertOne({ "name": "newBase", "age": "99" });
*/

import { appendFile } from 'node:fs';

appendFile('message.txt', 'data to append', (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
});


