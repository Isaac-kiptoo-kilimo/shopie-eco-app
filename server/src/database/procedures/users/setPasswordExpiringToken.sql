CREATE OR ALTER PROCEDURE SetResetTokenAndExpiration
    @userID VARCHAR(100),
    @resetToken VARCHAR(100),
    @expiration DATETIME
AS
BEGIN
    UPDATE Users
    SET resetPasswordToken = @resetToken,
        resetPasswordExpires = @expiration
    WHERE userID = @userID;
END;
