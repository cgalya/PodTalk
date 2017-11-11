DROP database podtalk_db;

CREATE database podtalk_db;

use podtalk_db;

CREATE TABLE users (
	userID INT AUTO_INCREMENT NOT NULL, 
	username VARCHAR(50) NOT NULL,
	firstname VARCHAR(50) NOT NULL,
	lastname VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	password VARCHAR(50) NOT NULL,
	PRIMARY KEY(userID)
);

CREATE TABLE comments (
	commentID INT AUTO_INCREMENT NOT NULL, 
    userID INT NOT NULL,
	body VARCHAR(255) NOT NULL,
	PRIMARY KEY(commentID)
);

CREATE TABLE podcast (
	podcastID INT AUTO_INCREMENT NOT NULL, 
	podcastURL VARCHAR(255) NOT NULL,
    podcastTitle VARCHAR(50) NOT NULL,
	userID INT NOT NULL,
	PRIMARY KEY(podcastID)
);

