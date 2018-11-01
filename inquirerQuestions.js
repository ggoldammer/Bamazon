const mySqlConnect = require("./mySqlConnect");
const mySqlQueries = require("./mySqlQueries");
const inquirer = require("inquirer");



let initiateQuestion = function (results) {

    console.log(results);

    function products(results) {
        for (let i = 0; i < results.length; i++) {
            return results[i].product_name;
        }
    }
    
    function quantity(results) {
        for (let i = 0; i < results.length; i++) {
            return results[i].quantity;
        }
    }

    let questions = [{
        type: "list",
        name: "productChoice",
        message: "Which product would you like to purchase?",
        choices: products(results)
    },
    {
        type: "input",
        name: "purchaseAmount",
        message: "How many would you like to purchase? (Current Quantity: " + quantity(results) + ")"
    }];

    inquirer.prompt(questions).then(answers => {
        console.log(answer);
    });
}



module.exports = {
    initiateQuestion
}