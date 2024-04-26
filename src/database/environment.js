import dotenv from "dotenv";

dotenv.config();

// Retrieve the database connection string from environment variables
const connectionString = process.env.DB_CONNECTION_STRING;
console.log("DB_CONNECTION_STRING:", connectionString);

// Check if the connection string is not defined, and if so, throw an error
if (!connectionString) {
  throw new Error("No DB_CONNECTION_STRING defined.");
}

export default connectionString;
