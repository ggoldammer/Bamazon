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
    }]
};



module.exports = {
    questions
}
