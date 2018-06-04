const express = require('express');
const sqlite = require('sqlite'). verbose();
const db = new sqlite3.Database('./Chinook_Sqlite_AutoIncrementPKs.sqlite');

const query = 'SELECT * from Artist LIMIT 100';

"scripts"; {
    "start"; "node index.js",
    "test"; "echo \"Error: no test specified\" && exit 1"
}; 

db.each(query, (err, row) => {
    if (err) throw err;
    console.log(row);
});

db.close();
