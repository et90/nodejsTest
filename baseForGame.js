var sqlite3 = require('sqlite3').verbose();




// создание базы в файле
var db1 = new sqlite3.Database('./db1.sqlite');





// описанеи на гугл диске файл быки коровы


//создание таблиц под разные нужды
//данные пользователя
db1.run('CREATE TABLE user( id INTEGER PRIMARY KEY AUTOINCREMENT, slot INTEGER, name BLOB(16), password TEXT(16), rating INTEGER, email TEXT(32), gametotal INTEGER, win INTEGER, defeat INTEGER, timetotal BLOB(3), datereg BLOB(3),whitelist BLOB, blacklist BLOB, token TEXT, datecloseprof BLOB(3))');

//слоты игровые
db1.run('CREATE TABLE gameslot( num INTEGER, id1 INTEGER, id2 INTEGER, letterCount INTEGER, gametyp INTEGER, timestart BLOB(3), id1berserk INTEGER, id2berserk INTEGER, id1timeleft BLOB(3), id2timelef BLOB(3), idturn INTEGER, wordpl1 BLOB, wordpl2 BLOB, lastWordpl1 BLOB, lastwordpl2 BLOB, lasttimepl1 BLOB, lasttimepl2BLOB)');


// сыгранные игры
db1.run('CREATE TABLE usergames3( id INTEGER, gamebt INTEGER, gamebw INTEGER, gamebd INTEGER, gamert INTEGER, gamerw INTEGER, gamerd INTEGER, gamect INTEGER, gamecw INTEGER, gamecd INTEGER)'); 
db1.run('CREATE TABLE usergames4( id INTEGER, gamebt INTEGER, gamebw INTEGER, gamebd INTEGER, gamert INTEGER, gamerw INTEGER, gamerd INTEGER, gamect INTEGER, gamecw INTEGER, gamecd INTEGER)'); 
db1.run('CREATE TABLE usergames5( id INTEGER, gamebt INTEGER, gamebw INTEGER, gamebd INTEGER, gamert INTEGER, gamerw INTEGER, gamerd INTEGER, gamect INTEGER, gamecw INTEGER, gamecd INTEGER)'); 
db1.run('CREATE TABLE usergames6( id INTEGER, gamebt INTEGER, gamebw INTEGER, gamebd INTEGER, gamert INTEGER, gamerw INTEGER, gamerd INTEGER, gamect INTEGER, gamecw INTEGER, gamecd INTEGER)'); 
db1.run('CREATE TABLE usergamesfreegames( id INTEGER, gametotal, gamewin INTEGER, gamedefeat INTEGER)');

//общий чат
db1.run('CREATE TABLE generalchat(langNumber INTEGER, name BLOB(16), time BLOB(5), message TEXT(64))');

// чат только для игровой комнаты
db1.run('CREATE TABLE gamechat( slotnum INTEGER, message TEXT, nameplayer1 TEXT(16), nameplayer2 TEXT(16))');

// для статистики
db1.run('CREATE TABLE appstatistic( date BLOB(3), ip BLOB(4), device TEXT(16), screensize BLOB(4), memory INTEGER, rez1 TEXT(16), rez2 TEXT(16), rez3 TEXT(16), rez4 TEXT(16), rez5 TEXT(16))');
// для анализи отвалов
db1.run('CREATE TABLE exit( date BLOB(3), event1 INTEGER, event2 INTEGER, event3 INTEGER,  event4 INTEGER, event5 INTEGER, event6 INTEGER, event7 INTEGER, event8 INTEGER, event9 INTEGER, event10 INTEGER, event11 INTEGER, event12 INTEGER, event13 INTEGER,  event14 INTEGER, event15 INTEGER, event16 INTEGER)');
