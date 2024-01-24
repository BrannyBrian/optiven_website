import mysql, { Pool, PoolOptions } from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const poolConfig: PoolOptions = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "25060"),
  database: process.env.LOGISTICS_DB,
  ssl: { rejectUnauthorized: false },
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 30000,
};

const pool: Pool = mysql.createPool(poolConfig);

export async function query(sql: string, values?: any[]) {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.query(sql, values);
    return results;
  } finally {
    connection.release();
  }
}
