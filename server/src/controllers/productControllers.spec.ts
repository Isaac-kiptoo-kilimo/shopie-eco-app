import { Request, Response, json } from "express";
import { v4 } from "uuid";

import mssql from "mssql";
import { AddProduct, UpdateProductControllers, deleteProduct, fetchAllProductsControllers, getSingleProduct } from "./productControllers";




describe("testing the products controllers", () => {
  let res: any;
  beforeEach(() => {
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
  });

  it("should retrieve details for a single product", async () => {
    const req = {
      params: {
        productID: "0b1c7208-9895-40cb-b911-9aefecfeeeb3",
      },
    };

    let expectedProduct = {
      productID: "0b1c7208-9895-40cb-b911-9aefecfeeeb3",
      name: "Bogoria Springs",
      shortDescription: "New product",
      price: 4500,
      image:"kkkwi3i88jsjs.jpg"
    };

    jest.spyOn(mssql, "connect").mockResolvedValueOnce({
      request: jest.fn().mockReturnThis(),
      input: jest.fn().mockReturnThis(),
      execute: jest.fn().mockResolvedValueOnce({
        recordset: [expectedProduct],
      }),
    } as never);

    await getSingleProduct(req as any, res as Response);

    expect(res.json).toHaveBeenCalledWith({ product: [expectedProduct] });
  });

  it("should retrieve details for all products", async () => {
    const req = {};

    let expectedProducts = [
      {
      productID: "0b1c7208-9895-40cb-b911-9aefecfeeeb3",
      name: "Bogoria Springs",
      shortDescription: "New product",
      price: 4500,
      image:"kkkwi3i88jsjs.jpg"
      }
    ];

    jest.spyOn(mssql, "connect").mockResolvedValueOnce({
      request: jest.fn().mockReturnThis(),
      execute: jest.fn().mockResolvedValueOnce({
        recordset: expectedProducts,
      }),
    } as never);

    await fetchAllProductsControllers(req as any, res as Response);
    expect(res.json).toHaveBeenCalledWith(expectedProducts);
});
});




describe("Products Controllers", () => {
  let res: any;

  beforeEach(() => {
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    };
  });

  describe("Create Product", () => {
    it("Successfully creates a product", async () => {
      const req = {
        body: {
            name: "Bogoria Springs",
            shortDescription: "New product",
            price: 4500,
            image:"kkkwi3i88jsjs.jpg"
        }
      };

      

      const mockedInput = jest.fn().mockReturnThis();
      const mockedExecute = jest.fn().mockResolvedValue({ rowsAffected: [1] });

      const mockedRequest = {
        input: mockedInput,
        execute: mockedExecute
      };

      const mockedPool = {
        request: jest.fn().mockReturnValue(mockedRequest)
      };

      jest.spyOn(mssql, 'connect').mockResolvedValue(mockedPool as never);

      await AddProduct(req as Request, res as any);

      expect(res.json).toHaveBeenCalledWith({ message: 'Created product Successfully' });
      // expect(res.status).toHaveBeenCalledWith(201);
      // expect(mockedInput).toHaveBeenCalledWith('name', mssql.VarChar, 'Diani New Product');
      // expect(mockedInput).toHaveBeenCalledWith('description', mssql.VarChar, 'We will be visiting Diani every weekend to relax');
      // expect(mockedInput).toHaveBeenCalledWith('destination', mssql.VarChar, 'Diani exciting Product');
      // expect(mockedInput).toHaveBeenCalledWith('price', mssql.Int, 5000);
      // expect(mockedInput).toHaveBeenCalledWith('type', mssql.VarChar, 'Weekend outways');
      // expect(mockedInput).toHaveBeenCalledWith('startDate', mssql.Date, '2023-12-01');
      // expect(mockedInput).toHaveBeenCalledWith('endDate', mssql.Date, '2023-12-10');
    });
  });



  describe("Update Product", () => {
    it("Successfully updates a product", async () => {
      const req = {
        params: {
          productID: "12345678-1234-5678-1234-567812345678"
        },
        body: {
            name: "Bogoria Springs",
            shortDescription: "New product",
            price: 4500,
            image:"kkkwi3i88jsjs.jpg"
        }
      };

     

      const mockedInput = jest.fn().mockReturnThis();
      const mockedExecute = jest.fn().mockResolvedValue({ rowsAffected: [1] });

      const mockedRequest = {
        input: mockedInput,
        execute: mockedExecute
      };

      const mockedPool = {
        request: jest.fn().mockReturnValue(mockedRequest)
      };

      jest.spyOn(mssql, 'connect').mockResolvedValue(mockedPool as never);

      await UpdateProductControllers(req as any, res as any);

      expect(res.json).toHaveBeenCalledWith({ message: 'product updated successfully' });
      expect(res.status).toHaveBeenCalledWith(201);
      expect(mockedInput).toHaveBeenCalledWith('name', mssql.VarChar, 'L.Victoria ');
      expect(mockedInput).toHaveBeenCalledWith('description', mssql.VarChar, 'We will be visiting lake Victoria this weekend');
      expect(mockedInput).toHaveBeenCalledWith('destination', mssql.VarChar, 'L.Victoria Kisumu');
      expect(mockedInput).toHaveBeenCalledWith('price', mssql.Int, 6000);
      expect(mockedInput).toHaveBeenCalledWith('type', mssql.VarChar, 'Cultural');
      expect(mockedInput).toHaveBeenCalledWith('startDate', mssql.Date, '2023-12-15');
      expect(mockedInput).toHaveBeenCalledWith('endDate', mssql.Date, '2023-12-25');
    });
  });



  describe("Delete Product", () => {
    it("Successfully deletes a product", async () => {
      const req = {
        params: {
          productID: "12345678-1234-5678-1234-567812345678"
        }
      };

      const mockedInput = jest.fn().mockReturnThis();
      const mockedExecute = jest.fn().mockResolvedValue({ rowsAffected: [1] });

      const mockedRequest = {
        input: mockedInput,
        execute: mockedExecute
      };

      const mockedPool = {
        request: jest.fn().mockReturnValue(mockedRequest)
      };

      jest.spyOn(mssql, 'connect').mockResolvedValue(mockedPool as never);

      await deleteProduct(req as any, res as any);

      expect(res.json).toHaveBeenCalledWith({ message: 'Deleted successfully' });
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });



});
