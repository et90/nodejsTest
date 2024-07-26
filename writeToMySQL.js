const mysql = require('mysql2');

const connection = mysql.createConnection({
    port: "3306",
    user: "adddataplc",
    host: "81.31.246.124",
    database: "default_db",
    password: ":+r(9/XnK@ZWl&"
});


const currentDate = new Date();
const currentDateTime = currentDate.toISOString();
const floatValue = 3.14

// Данные для добавления
const data = {
  dateTime: currentDateTime,
  deviceType:'tip neizwesten!',
   deviceName:"plc",
    dataText: 'John Doe',
    dataInt:1221,
    dataFloat:23.33,
    message1:'message1',
    message2:'message2',
    message3:'message3',
    message4:'message4',
 
};

// SQL-запрос для добавления данных
const query = 'INSERT INTO PLC_Message SET ?';

// Выполнение запроса
connection.query(query, data, (error, results) => {
  if (error) {
    console.error(error);
    return;
  }
  
  console.log('Данные успешно добавлены!');
});

// Закрытие подключения
connection.end();