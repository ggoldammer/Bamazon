var mySql = require("mysql");

let connection = mySql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "bamazon_db"
});

let connectionCheck = function () {
    connection.connect(function (err) {
        if (err) { return console.log("Error: " + err); }

        console.log("Connected as ID " + connection.threadId);
    });
}

module.exports = { connection, connectionCheck } 