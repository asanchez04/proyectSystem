CREATE DATABASE IF NOT EXISTS company;

use company;

CREATE TABLE employees (
		id INT(11) NOT NULL AUTO_INCREMENT,
		name VARCHAR(45) DEFAULT NULL, 
        phoneCell INT(15) DEFAULT NULL,
        addrees VARCHAR(30) DEFAULT NULL,
        picture VARCHAR(45) DEFAULT NULL,
        PRIMARY KEY(id)

);


DESCRIBE employees;

INSERT INTO employees values 
 (1, 'Daniel Castillo', 1234567, 'Nuevo Bosque Mz5Lt4', 1),
 (2, 'Juan Batty', 7654321, 'Manga Mz1Lt1', 2),
 (3, 'Alan Sanchez', 5277448, 'Alto Campestre Mz1Lt8', 3);

SELECT * FROM employees;