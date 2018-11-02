const mySqlConnect = require("./mySqlConnect");
const mySqlQueries = require("./mySqlQueries");
const inquirerQuestions = require("./inquirerQuestions");

mySqlConnect.connection;
mySqlConnect.connectionCheck();

mySqlQueries.getProducts(function(results){

    inquirerQuestions.initiateQuestion(results);
});

mySqlConnect.connection.end();

























// function initiateQuestions(productNames, results) {
//     inquirer.prompt(questions(productNames)[0]).then(answer1 => {
//         inquirer.prompt(questions(productQuantity(answer1, results))[1]).then(answer2 => {
//             console.log(answer1);
//             console.log(answer2);
//         });
//     });
// }

// let questions = function (input) {
//     let questionArray = [{
//         type: "list",
//         name: "productChoice",
//         message: "Which product would you like to purchase?",
//         choices: input
//     },
//     {
//         type: "input",
//         name: "purchaseAmount",
//         message: "How many would you like to purchase? (Current Quantity: " + input + ")"
//     }];

//     return questionArray;
// }

// let productQuantity = function (productName, productArray) {
//     for (let i = 0; i < productArray.length; i++) {
//         if (productName.productChoice === productArray[i].product_name) {
//             if(productArray[i].stock_quantity > 0){
//                 productId = .indexOf(productName.productChoice);
//                 console.log(productId);
//                 return productArray[i].stock_quantity;
//             } else{
//                 let response = "SOLD OUT";
//                 return response;
//             }
//         }
//     }
// }

// function productPurchase(productName, productQuantity){
//     if(productQuantity === "SOLD OUT"){
//         console.log("Insufficient inventory");
//     } else {
//         connection.query("")
//     }
// }