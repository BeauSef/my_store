var inquirer = require('inquirer');
var mysql = require("mysql");
var Table = require('easy-table')
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "bamazon_db"

});


connection.connect(function (err) {
    // console.log("Connected as id: "+ connection.threadId);
    if (err) throw err;

});

var start = function() {

var data = [{
        item_id: 1,
        product_name: "Xbox",
        department_name: "Electronics",
        price: 250.50,
        stock_quantity: 150
    },
    {
        item_id: 2,
        product_name: "Fishing Pole",
        department_name: "Sporting Goods",
        price: 29.99,
        stock_quantity: 80
    },
    {
        item_id: 3,
        product_name: "Beef Jerky",
        department_name: "Grocery",
        price: 1.99,
        stock_quantity: 10000
    },
    {
        item_id: 4,
        product_name: "Paint Brush",
        department_name: "Paint",
        price: 5.00,
        stock_quantity: 50
    },
    {
        item_id: 5,
        product_name: "Extension Cord",
        department_name: "Electrical",
        price: 10.00,
        stock_quantity: 15
    },
    {
        item_id: 6,
        product_name: "Drill",
        department_name: "Hardware",
        price: 199.99,
        stock_quantity: 10
    },
    {
        item_id: 7,
        product_name: "Sheet Rock",
        department_name: "Building Materials",
        price: 12.55,
        stock_quantity: 10
    },
    {
        item_id: 8,
        product_name: "Piping",
        department_name: "Plumbing",
        price: 9.97,
        stock_quantity: 10
    },
    {
        item_id: 9,
        product_name: "Hose",
        department_name: "Garden",
        price: 24.97,
        stock_quantity: 15
    },
    {
        item_id: 10,
        product_name: "Bike",
        department_name: "Outdoors",
        price: 375.75,
        stock_quantity: 7
    }
]

var table = new Table

data.forEach(function (products) {
    table.cell('Item ID', products.item_id)
    table.cell('Product', products.product_name)
    table.cell('Department', products.department_name)
    table.cell('Price', products.price, Table.number(2))
    table.cell('Stock', products.stock_quantity)
    table.newRow()
})

console.log(table.toString())

inquirer
    .prompt([
        {
			type: 'input',
			name: 'item_id',
            message: 'Enter ID of product:',
            validate: function(value) {
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
            validate: function(value) {
                if (isNaN(value) == false) {
                    return true
                } else {
                    return false;
                }
            }
		}
    ]).then(function(data){
        connection.query(function (err) {
            if (err) throw err;
        });

    });
}

start();
