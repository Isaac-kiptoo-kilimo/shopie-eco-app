CREATE TABLE Users(
    userID VARCHAR(100) PRIMARY KEY,
    fullName VARCHAR(200) NOT NULL,
    email VARCHAR(250) NOT NULL,
    password VARCHAR(100) NOT NULL,
    role VARCHAR(100) DEFAULT 'customer',
    resetPasswordToken VARCHAR(100),
    resetPasswordExpires DATETIME,
    welcomed BIT Default 0,
)

select * from Users

UPDATE Users SET role='Admin' where email='joshuaomondi3334@gmail.com' 

DROP TABLE Users