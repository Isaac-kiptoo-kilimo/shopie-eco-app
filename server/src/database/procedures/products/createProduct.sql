-- USE SHOPPIE
CREATE OR ALTER PROCEDURE 
AddProduct(
    @ProductID UNIQUEIDENTIFIER,
    @name VARCHAR(100),
    @shortDescription VARCHAR(200),
    @price VARCHAR(300),
    @image VARCHAR(100)

)
AS
BEGIN
    IF NOT EXISTS (SELECT 1 FROM Products WHERE name = @name)
    BEGIN
        -- DECLARE @userID UNIQUEIDENTIFIER = NEWID();
        
        INSERT INTO Products (ProductID, name,  shortDescription, price, image)
        VALUES (@ProductID, @name, @shortDescription,@price, @image);
    END
END;