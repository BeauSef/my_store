var inquirer = require('inquirer');
var mysql = require("mysql");
require('console.table')
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Rock$tar21",
    database: "bamazon_db"

});

connection.connect(function (err) {
    // console.log("Connected as id: "+ connection.threadId);
    if (err) throw err;



});

function load() {

    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.table(res);
    })
}

function prompt() {
    
    inquirer
        .prompt([{
                type: 'input',
                name: 'item_id',
                message: 'Enter ID of product:',
                validate: function (value) {
                    if (isNaN(value) == false) {
                        return true
                    } else {
                        return false;
                    }
                }

            },
            {
                type: 'input',
                name: 'quantity',
                message: 'How many do you need?',
                validate: function (value) {
                    if (isNaN(value) == false) {
                        return true
                    } else {
                        return false;
                    }
                }

            }

        ]).then(function (answer) {
            var quantity = stock_quantity
            var idPicked = answer.item_id;
            var quantityPicked = answer.quantity - 1;
            connection.query("SELECT * FROM products WHERE?", [{
                id: idPicked,
                quantity: stock_quantity,
            }], function (err, selected) {
                if (err) throw err;
                if (selected[0].stock_quantity - quantityPicked >= 0) {
                    var total = quantityPicked * selected[0].price;
                    console.log('Your item has been ordered (' + selected[0].product_name + ')!');
                    console.log("On Hands: " + selected[0].stock_quantity + "Order Quantity: " + quantity);
                    console.log("Price $ " + total);

                    connection.query("UPDATE products SET stock_quantity = ? WHERE id=?", [selected[0].stock_quantity - quantityPicked, idPicked],
                        function (err, onHands) {
                            if (err) throw err;
                        })}else {
                            console.log("Not enough on hands" + products)
                        }
                    
                    
              
            })
            
            })
        
        }
        

load();
prompt();