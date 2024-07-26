const mysql = require('mysql2');

const pool = mysql.createPool({
    port: "3306",
    user: "adddataplc",
    host: "81.31.246.124",
    database: "default_db",
    password: ":+r(9/XnK@ZWl&"
}).promise()

async function getData() {
    const result = await pool.query("SELECT * FROM PLC_Message");
    console.log(result);
}

getData();

