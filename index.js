//import dotenv so I can securly store the connection string in the .env file and reference it below.
import dotenv from "dotenv";
dotenv.config();

// Retrieve the database connection string from environment variables
const connectionString = process.env.DB_CONNECTION_STRING;
console.log("DB_CONNECTION_STRING:", connectionString);

// Check if the connection string is not defined, and if so, throw an error
if (!connectionString) {
  throw new Error("No DB_CONNECTION_STRING defined.");
}

// Import the pg (node-postgres) library
import pg from "pg";

// Export a new instance of pg.Pool, which will be used to interact with the PostgreSQL database
export const pool = new pg.Pool({
  // Pass the connection string to the pool, so it knows how to connect to your database
  connectionString,
});
