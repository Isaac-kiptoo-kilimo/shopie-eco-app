CREATE OR ALTER PROCEDURE updateUser(
    @userID VARCHAR (100),
    @fullName VARCHAR(200),
    @email VARCHAR(250)
)
AS BEGIN
    UPDATE Users SET fullName=@fullName,email=@email WHERE userID = @userID;

END