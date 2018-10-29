CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
product_id INTEGER AUTO_INCREMENT NOT NULL,
product_name VARCHAR(100),
department_name VARCHAR(100),
price INTEGER,
stock_quantity INTEGER,
PRIMARY KEY (product_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo Switch", "Video Games", 300, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Super Smash Bros. Ultimate", "Video Games", 60, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Google Pixel 3", "Mobile Phones", 800, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Limited Edition Collectible Coin", "Misc", 200, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cat Food", "Pets", 20, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dog Food", "Pets", 25, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Spooky Pumpkin", "Holidays", 15, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Christmas Tree", "Holidays", 80, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Christmas Ornaments", "Holidays", 10, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mystery Box", "Misc", 25, 10);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';