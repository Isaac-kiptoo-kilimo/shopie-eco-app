import mssql, { pool } from "mssql";
import dotenv from "dotenv";

dotenv.config();

export const dbConfig = {
  user: process.env.DB_USER as string,
  password: process.env.DB_PWD as string,
  database: process.env.DB_NAME as string,
  server: "localhost",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

export async function testConnection() {
  const pool = await mssql.connect(dbConfig);
  if (pool.connected) {
    console.log("connected to database");
  } else {
    console.log("not connected");
  }
}

// testConnection()
