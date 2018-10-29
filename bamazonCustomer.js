var inquirer = require("inquirer");
var mySql = require("mysql");

let connection = mySql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "bamazon_db"
});

connection.connect(function(err){
    if (err){
        console.log("Error: " + err);
        return;
    }
    console.log("Connected as ID " + connection.threadId);
});

connection.query("SELECT product_name FROM products", function(err, results){
    let resultsArray = [];
    for (let i = 0; i < results.length; i++) {
        resultsArray.push(results[i].product_name);
    }
    console.log(resultsArray);
    initiateInquirer(resultsArray);
});

connection.end();

function initiateInquirer(productNames){
    inquirer.prompt([{
        type: "list",
        name: "productChoice",
        message: "Which product would you like to purchase?",
        choices: productNames
    }
    ]).then(answers => {
    
    });
}
