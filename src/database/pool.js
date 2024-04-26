import pg from "pg";
import connectionString from "./environment.js"; // Import the connection string

// Export a new instance of pg.Pool
const pool = new pg.Pool({
  // Pass the connection string to the pool
  connectionString,
});

export default pool;
