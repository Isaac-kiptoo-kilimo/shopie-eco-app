CREATE OR ALTER PROCEDURE resetPassword(
    @userID VARCHAR(100),
    @password VARCHAR(100)
)

AS
BEGIN
    UPDATE Users SET password=@password WHERE userID=@userID

END