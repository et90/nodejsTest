/*
    для работы нужны следующие файлы
        notesdb-swlite3.js
        show.js 
        setup.js
*/


var colors = require('colors');
var util  = require('util');
//var async = require('async');
var async = require('async');

var notesdb = require('./notesdb-sqlite3');

notesdb.connect(function (error) {
    if (error){
        console.log('Errror on connect '.red)
        throw error;
    } 
    else{
        console.log('connect'.blue);
    }
});

notesdb.setup(function (error) {
    if (error) {
        util.log('ERROR on start set up:  ' + error);
        throw error;
    }

    async.series([
        function (cb) {
            notesdb.add("какоето имя",
                "какойто тукст ",
                function (error) {
                    if (error) util.log('ERROR ' + error);
                    cb(error);
                });
        }
    ],
        function (error, result) {
            if (error) util.log('ERROR ' + error);
            notesdb.disconnect(function (err) { });
        }
    );
});