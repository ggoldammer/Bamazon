const mySqlConnect = require("./mySqlConnect");

let products = getProducts(results);

console.log(products);

function getProducts() {
    mySqlConnect.connection.query("SELECT product_id, product_name, stock_quantity FROM products", function (err, results) {
        return results(results);
    });
}

module.exports = {
    products,
    getProducts
}