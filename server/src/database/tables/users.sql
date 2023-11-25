CREATE TABLE Users(
    userID VARCHAR(100) PRIMARY KEY,
    fullName VARCHAR(200) NOT NULL,
    email VARCHAR(250) NOT NULL,
    password VARCHAR(100) NOT NULL,
    role VARCHAR(100) DEFAULT 'customer',
    resetPassword INT DEFAULT 0
)