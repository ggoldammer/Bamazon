const mySqlConnect = require("./mySqlConnect");
const mySqlQueries = require("./mySqlQueries");
const inquirer = require("inquirer");



let initiateQuestion = function (results) {

    // Create function to pass into questions. Pass a query that queries SQL for the product names alone.

    let questions = [{
        type: "list",
        name: "productChoice",
        message: "Which product would you like to purchase?",
        choices: productsArray.productId
    },
    {
        type: "input",
        name: "purchaseAmount",
        message: "How many would you like to purchase? (Current Quantity: " + "" + ")"
    }];

    inquirer.prompt(questions).then(answer => {
        console.log(answer);
    });
}



module.exports = {
    initiateQuestion
}