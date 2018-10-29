var inquirer = require("inquirer");
var mySql = require("mysql");

let connection = mySql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) {
        console.log("Error: " + err);
        return;
    }
    console.log("Connected as ID " + connection.threadId);
});

connection.query("SELECT product_id, product_name, stock_quantity FROM products", function (err, results) {
    let productNames = [];
    let productID;
    for (let i = 0; i < results.length; i++) {
        productNames.push(results[i].product_name);
    }
    initiateQuestions(productNames, results);
});

connection.end();

function initiateQuestions(productNames, results) {
    inquirer.prompt(questions(productNames)[0]).then(answer1 => {
        inquirer.prompt(questions(productQuantity(answer1, results))[1]).then(answer2 => {
            console.log(answer1);
            console.log(answer2);
        });
    });
}

let questions = function (input) {
    let questionArray = [{
        type: "list",
        name: "productChoice",
        message: "Which product would you like to purchase?",
        choices: input
    },
    {
        type: "input",
        name: "purchaseAmount",
        message: "How many would you like to purchase? (Current Quantity: " + input + ")"
    }];

    return questionArray;
}

let productQuantity = function (productName, productArray) {
    for (let i = 0; i < productArray.length; i++) {
        if (productName.productChoice === productArray[i].product_name) {
            if(productArray[i].stock_quantity > 0){
                productId = .indexOf(productName.productChoice);
                console.log(productId);
                return productArray[i].stock_quantity;
            } else{
                let response = "SOLD OUT";
                return response;
            }
        }
    }
}

function productPurchase(productName, productQuantity){
    if(productQuantity === "SOLD OUT"){
        console.log("Insufficient inventory");
    } else {
        connection.query("")
    }
}