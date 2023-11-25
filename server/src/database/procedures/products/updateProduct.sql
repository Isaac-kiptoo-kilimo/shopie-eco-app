-- use SHOPPIE
-- select * from Products
CREATE PROCEDURE UpdateProduct
   @AssignedProductName NVARCHAR(255),
   @NewStatus NVARCHAR(255)
AS
BEGIN
    
    UPDATE Users
SET ProductStatus = @NewStatus,
    isCompleted = CASE WHEN @NewStatus = 'completed' THEN 1 ELSE 0 END
WHERE AssignedProductName = @AssignedProductName;

END;
DROP PROCEDURE  UpdateProduct
-- UPDATE User
    -- SET ProductStatus = @NewStatus
    -- WHERE AssignedProductName = @AssignedProductName;

