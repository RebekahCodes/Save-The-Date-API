import pg from "pg";
import connectionString from "./environment.js"; // Import the connection string. uncomment after tests
//process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0; // Disables SSL certificate verification (not recommended for production!) Delete after testing

// Export a new instance of pg.Pool
export const pool = new pg.Pool({
  // Pass the connection string to the pool
  connectionString,
  //ssl: true, //Try deleting once deployed
});

export default pool;
