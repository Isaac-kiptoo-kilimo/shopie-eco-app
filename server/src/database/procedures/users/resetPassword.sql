-- CREATE OR ALTER PROCEDURE resetPassword(
--     @userID VARCHAR(100),
--     @password VARCHAR(100)
-- )

-- AS
-- BEGIN
--     UPDATE Users SET password=@password WHERE userID=@userID

-- END

CREATE OR ALTER PROCEDURE ResetPassword
    @userID VARCHAR(100),
    @newPassword VARCHAR(100)
AS
BEGIN
    UPDATE Users
    SET password = @newPassword,
        resetPasswordToken = NULL,
        resetPasswordExpires = NULL
    WHERE userID = @userID;
END;
