DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products (
item_id INTEGER(15) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(20) NOT NULL,
price DECIMAL(30,5) NOT NULL,
stock_quantity INTEGER(15) NOT NULL,
PRIMARY KEY (item_id)
);


INSERT INTO bamazon_db.products(item_id,product_name,department_name,price,stock_quantity)
VALUES 
(1,"Xbox", "Electronics", 250.50, 150),
(2,"Fishing Pole", "Sporting Goods", 29.99, 80),
(3,"Beef Jerky", "Grocery", 1.99, 10000),
(4,"Paint Brush", "Paint", 5.00, 50),
(5,"Extension Cord", "Electrical", 10.00, 15),
(6,"Drill", "Hardware", 199.99, 10),
(7,"Sheet Rock", "Building Materials", 12.55, 100),
(8,"Piping", "Plumbing", 9.97, 10),
(9,"Hose", "Garden", 24.97, 15),
(10, "Bike", "Outdoors", 375.75, 7);