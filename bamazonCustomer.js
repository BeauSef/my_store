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

    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;
        console.table(res);
    })
}

function prompt(){
        console.log(" ==========   WELCOME TO BAMAZON   ===========")
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

                    var idPicked = answer.item_id;
                    var quantityPicked = answer.quantity -1;
                    
                
                    if(quantityPicked < idPicked.stock_quantity){
                            console.log("Your item has been ordered"  )
                            connection.query( " Update SELECT from products")
                    }else{
                        console.log("Not enough on hands" + products)
            }
              
                })
            }
        
    

                // wantMore();
                // function wantMore(){
                //     inquirer
                //     .prompt([{
                //             type: 'confirm',
                //             name: 'reply',
                //             message: 'Would you like to buy more?',
                //     }]).then(function(answer){
                //         if(answer.reply){
                //             start();
                //         } else {
                //             console.log("Please come again!")
                //         }
                //     })
                // }
                load()

                prompt();
            
            