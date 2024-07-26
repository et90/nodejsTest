

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("./data.sqlite", sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
    console.log("Connection successful");
});


db.run('CREATE TABLE user( first_name, last_name, username, password, email, id)');

var sql = 'INSERT INTO user(first_name, last_name, username, password, email, id) VALUES(?,?,?,?,?,?)';



db.run(sql, ["sergey", "kuz", "nickname", "123", "ya@mail.ru", 1],
    (err) => {
        if (err) return console.error(err.message);
        console.log("a new row has been create");
    });




db.close((err) => {
    if (err) return console.error(err.message);
    console.log("db closed");
});
