DROP DATABASE IF EXIST arca_de_noe;

CREATE DATABASE arca_de_noe;

USE arca_de_noe;

CREATE TABLE user
(
    id BINARY(16) NOT NULL,
    name VARCHAR(256) NOT NULL,
    email VARCHAR(256) NOT NULL,
    username VARCHAR(256) NOT NULL,
    adress VARCHAR(256) NOT NULL,
    password VARCHAR (16) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE dog
(
    id BINARY(16) NOT NULL,
    dog_name VARCHAR(256) NOT NULL,
    breed VARCHAR(256) NOT NULL,
    description VARCHAR(256) NOT NULL,
    url_image VARCHAR(256) NOT NULL,
    phone VARCHAR(24) NOT NULL,
    adopeted VARCHAR(1) NOT NULL DEFAULT 'N',
    PRIMARY KEY(id)
);