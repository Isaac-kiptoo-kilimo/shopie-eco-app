create or Alter procedure getSingleProduct
@name VARCHAR(250)
AS
BEGIN
    select * from Products
where name = @name
END