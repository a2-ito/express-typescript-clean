-- ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'root';

CREATE DATABASE IF NOT EXISTS sample;
USE sample;

-- GRANT ALL PRIVILEGES ON *.* TO 'testuser'@'localhost';
GRANT ALL ON *.* to 'testuser';

create table Users (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(32) NOT NULL,
    firstname VARCHAR(32) NOT NULL,
    lastname VARCHAR(32) NOT NULL,
    email VARCHAR(50) NOT NULL
);

INSERT INTO Users
    (id, name, firstname, lastname, email)
VALUES
    (1, 'sample1', 'sample1_firstname', 'sample1_lastname', 'sample1@example.com');
INSERT INTO Users
    (id, name, firstname, lastname, email)
VALUES
    (2, 'sample1', 'sample2_firstname', 'sample2_lastname', 'sample2@example.com');

