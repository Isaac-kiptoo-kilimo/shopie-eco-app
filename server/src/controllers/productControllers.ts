import { Request, Response } from "express";
import mssql, { pool } from "mssql";
import { dbConfig } from "../config/db";
import { v4 } from "uuid";


//create product
export const AddProduct = async (req: Request, res: Response) => {
  try {
    const { name, shortDescription, price, image } = req.body;

    const pool = await mssql.connect(dbConfig);

    const ProductID = v4();

    const request = pool.request();

    request.input("ProductID", mssql.UniqueIdentifier, ProductID);
    request.input("name", mssql.VarChar(100), name);
    request.input("shortDescription", mssql.VarChar(200), shortDescription);
    request.input("price", mssql.VarChar(300), price);
    request.input("image", mssql.VarChar(100), image);

    const result = await request.execute("AddProduct");

    if (result.rowsAffected[0] === 1) {
      return res
        .status(200)
        .json({ success: true, message: "Product added successfully." });
    } else {
      return res
        .status(400)
        .json({
          success: false,
          message: "Product with the same name already exists.",
        });
    }
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

//delete user
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { ProductID } = req.body;

    if (!ProductID) {
      return res.status(400).json({ error: "userID is required." });
    }

    const pool = await mssql.connect(dbConfig);

    const request = pool.request();

    request.input("ProductID", mssql.VarChar(1000), ProductID);

    const result = await request.execute("deleteProduct");

    const deletionResult = result.recordset[0].DeletionResult;

    if (deletionResult === 1) {
      return res
        .status(200)
        .json({ success: true, message: "Product deleted successfully." });
    } else if (deletionResult === -2) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found." });
    } else {
      return res
        .status(500)
        .json({ success: false, message: "Failed to delete product." });
    }
  } catch (error) {
    return res.json({
      error: error,
    });
  }
};

// Update user status
export const UpdateProduct = async (req: Request, res: Response) => {
  try {
    const { AssignedProductName, newStatus } = req.body;

    if (!AssignedProductName || !newStatus) {
      return res
        .status(400)
        .json({ error: "assignedUserEmail and newStatus are required." });
    }
    const pool = await mssql.connect(dbConfig);

    const request = pool.request();

    request.input(
      "AssignedUserEmail",
      mssql.NVarChar(255),
      AssignedProductName
    );
    request.input("NewStatus", mssql.NVarChar(255), newStatus);
    await request.execute("UpdateProduct");

    return res.status(200).json({
      success: true,
      message: "Product status updated successfully",
    });
  } catch (error) {
    return res.json({
      error: error,
    });
  }
};
// Get single user by email
export const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { name } = req.params;

    if (!name) {
      return res.status(400).json({ error: "name parameter is required." });
    }

    const pool = await mssql.connect(dbConfig);

    const request = pool.request();

    request.input("name", mssql.VarChar(250), name);

    const result = await request.query("EXEC getSingleProduct @name");

    if (result.recordset.length > 0) {
      return res.status(200).json({
        success: true,
        user: result.recordset[0],
      });
    } else {
      return res
        .status(404)
        .json({ success: false, message: "Product not found." });
    }
  } catch (error) {
    return res.json({
      error: error,
    });
  }
};
function execute(arg0: string, arg1: { ProductID: string; name: any; shortDescription: any; price: any; image: any; }) {
    throw new Error("Function not implemented.");
}

