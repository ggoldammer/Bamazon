const mySqlConnect = require("./mySqlConnect");

function getProducts() {
    mySqlConnect.connection.query("SELECT product_id, product_name, stock_quantity FROM products", function (err, results) {
        return products(results);
    });
}

function products(results){
    console.log(results);
    return results;
};

module.exports = {
    products,
    getProducts
}