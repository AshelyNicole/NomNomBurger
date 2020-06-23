### Schema

CREATE DATABASE burger_db;
USE burger_db;

DROP TABLE IF EXISTS burgers

CREATE TABLE  burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	eat BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
