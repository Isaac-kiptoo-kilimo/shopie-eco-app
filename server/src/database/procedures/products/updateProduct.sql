-- use SHOPPIE

CREATE PROCEDURE UpdateProduct(
   @productID VARCHAR(100),
   @name VARCHAR(200),
   @shortDescription VARCHAR(300),
   @price INT,
   @image VARCHAR(200)
)

AS
BEGIN
    UPDATE Products
    SET
        name = @name,
        shortDescription = @shortDescription,
        price = @price,
        image = @image
    WHERE productID = @productID;
END;
