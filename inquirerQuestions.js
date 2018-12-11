const mySqlConnect = require("./mySqlConnect");
const inquirer = require("inquirer");



let initiateQuestion = function (callback) {

    // Create function to pass into questions. Pass a query that queries SQL for the product names alone.

    var choicesArr = [];

    let questions = [{
        type: "list",
        name: "productChoice",
        message: "Which product would you like to purchase?",
        choices: choicesArr
    },
    {
        type: "input",
        name: "purchaseAmount",
        message: "How many would you like to purchase?"
    }];

    let getProducts = () => {
        mySqlConnect.connection.query("SELECT * FROM products", function (err, results) {
            choicesArr = results.map(results => results.product_name);
            console.log(choicesArr);
        });
    }

    getProducts();

    inquirer.prompt(questions).then(answers => console.log(answers));
}



module.exports = {
    initiateQuestion
}