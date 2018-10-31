const mySqlConnect = require("./mySqlConnect");

function getProducts(callback) {
    mySqlConnect.connection.query("SELECT product_id, product_name, stock_quantity FROM products", function (err, results) {
        callback(results);
    });
}

module.exports = {
    getProducts
}