// db.js
import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const connectDB = async () => {
  await pool.connect();
  console.log("PostgreSQL connected");
};

export default pool;
