CREATE DATABASE Promedio;

USE promedio;
 
CREATE TABLE promedios(
	id  INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(75),
    parcial_uno FLOAT,
    parcial_dos FLOAT,
    parcial_tres FLOAT,
    promedio FLOAT,
    updated_at DATETIME,
    created_at DATETIME
);