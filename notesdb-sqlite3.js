/*
    для работы нужны следующие файлы
        notesdb-swlite3.js
        show.js 
        setup.js
*/


//var util = require('util');
var colors = require('colors');

var sqlite3 = require('sqlite3');
sqlite3.verbose();
var db = undefined;


//подключение к базе данных
exports.connect = function (callback) {
    db = new sqlite3.Database("chap06.sqlite3",
        sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
        function (err) {
            if (err) {
                console.log(('Fail on create database ' + err).red);
                callback(err);
            } else {
                console.log("connectel to db".green);
                callback(null);
            }
        });
}


// отключение от базы данных
exports.disconnect = function (callback) {
    callback(null);
}


// создание таблицы
exports.setup = function (callback) {
    db.run("CREATE TABLE IF NOT EXISTS notes " +
        "(ts DATETIME, author VARCHAR(255), note TEXT)",
        function (err) {
            if (err) {
                console.log(('FAIL on creating table ' + err).red);
                callback(error);
            } else {
                console.log("Create table OK".green);
                callback(null);
            }
        });
}


//создание пустой строки
exports.emptyNote = { "ts": "", "author": "", "note": "" };


// добавление записи
exports.add = function (author, note, callback) {
    db.run("INSERT INTO notes (ts, author, note)" +
        "VALUES ( ?, ?, ? );",
        [new Date(), author, note],
        function (error) {
            if (error) {
                console.log(('FAIL to add INSERT ' + error).red);
                callback(error);
            } else {
                console.log("Insert OK".green);
                callback(null);
            }
        });
}


// удаление пока не понятно как 
exports.delete = function (ts, callback) {
    db.run("DELETE FROM notes Where ts = ?",
        [ts],
        function (err) {
            if (err) {
                console.log(('Fail to delete ' + err).red);
                callback(err);
            } else {
                console.log("DELETE line OK".green);
                callback(null);
            }
        });
}


// редактирование записи
exports.edit = function (ts, author, note, callback) {
    db.run("UPDATE notes " +
        "SET ts = ?, author = ?, note = ? " +
        "WHERE ts = ?",
        [ts, author, note, ts],
        function (err) {
            if (err) {
                console.log(('FAIL on updating table ' + err).red);
                callback(err);
            } else{
                callback(null);
                console.log("Update line OK".green);
            }
        });
}



exports.allNotes = function (callback) {
    util.log(' in allNote');
    db.all("SELECT * FROM notes", callback);
}



exports.forAll = function (doEach, done) {
    db.each("SELECT * FROM notes", function (err, row) {
        if (err) {
            console.log(('FAIL to retrieve row ' + err).red);
            done(err, null);
        } else {
            console.log("Retrieve row OK".green);
            doEach(null, row);
        }
    }, done);
}


exports.findNoteById = function (ts, callback) {
    var didOne = false;
    db.each("SELECT * FROM notes WHERE ts = ?",
        [ts],
        function (err, row) {
            if (err) {
                console.log(('FAIL findNoteById ' + err).red);
                callback(err, null);
            } else {
                if (!didOne) {
                    console.log("findNoteById OK".green);
                    callback(null, row);
                    didOne = true;
                }
            }
        });
}