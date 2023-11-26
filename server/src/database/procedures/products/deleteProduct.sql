CREATE OR ALTER PROCEDURE deleteProduct
    @ProductID VARCHAR(100)  
AS
BEGIN

        IF EXISTS (
            SELECT 1
            FROM Projects
            WHERE ProductID = @ProductID
        )
        BEGIN

            DELETE FROM Projects
            WHERE ProductID = @ProductID;

            SELECT 1 AS DeletionResult; 
        END
        ELSE
        BEGIN
            SELECT -2 AS DeletionResult; 
        END
END

DROP PROCEDURE deleteProduct