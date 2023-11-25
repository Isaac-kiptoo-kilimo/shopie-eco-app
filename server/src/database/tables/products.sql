CREATE TABLE Products (
    userID VARCHAR(100) PRIMARY KEY,
    name VARCHAR(200),
    shortDescription VARCHAR(300) UNIQUE,
    price VARCHAR(100),
    image VARCHAR(200)
);

DROP TABLE IF EXISTS Products;
