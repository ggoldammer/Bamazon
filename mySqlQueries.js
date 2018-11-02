const mySqlConnect = require("./mySqlConnect");

function getProducts(callback) {
    mySqlConnect.connection.query("SELECT * FROM products", function (err, results) {
        callback(results);
    });
}

module.exports = {
    getProducts
}