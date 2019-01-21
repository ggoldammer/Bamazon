const mysql = require('mysql')
const inquirer = require('inquirer')

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'bamazon_db'
});

var products;

connection.connect();

connection.query('SELECT * FROM products', function (error, results) {
    if (error) throw error;
    products = results;

    console.log("Welcome to Bamazon! Here are our current products:");

    for (let i = 0; i < results.length; i++) {
      console.log(`Id: ${products[i].product_id} - ${products[i].product_name} - Price: ${products[i].price} - Qty: ${products[i].stock_quantity}`)
    }

    inquirer.prompt([
      {
        name: 'id',
        message: `Type the ID of the item you'd like to purchase.`
      },
      {
        name: 'qty',
        message: `Type the quantity that you'd like to purchase.`
      }
    ]).then(res => {
      if(isNaN(res.id) || isNaN(res.qty)) {
        console.log('Invalid Id or Quantity. Exiting...');
        connection.end();
        return;
      }

      if(products[(res.id - 1)].stock_quantity < res.qty){
        console.log('Not enough to purchase. Exiting...');
        connection.end();
        return;
      }
      
      let totalPrice = products[res.id - 1].price * res.qty

      let dbUpdate = 'UPDATE products SET stock_quantity = ' + (products[(res.id - 1)].stock_quantity - res.qty) + ' WHERE product_id = ' + res.id;

      connection.query(dbUpdate, (err, result) => {
        if(err){
          console.log(err);
        }

        console.log(`Total Price: $${totalPrice} `);
      });

      connection.end();

    })

    return;
  });

console.log(products);
  
  // connection.end();