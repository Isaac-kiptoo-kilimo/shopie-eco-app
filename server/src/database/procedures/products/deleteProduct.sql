-- use TESTSHOPPIE
-- drop procedure deleteProduct
-- select * from Products
CREATE OR ALTER PROCEDURE deleteProduct
    @ProductID VARCHAR(1000)  
AS
BEGIN
       
        IF EXISTS (
            SELECT 1
            FROM Projects
            WHERE ProductID = @ID
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
