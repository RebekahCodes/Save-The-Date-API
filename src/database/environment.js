import dotenv from "dotenv";
dotenv.config();

// Retrieve the database connection string from environment variables
const connectionString = process.env.DATABASE_URL;
console.log("DATABASE_URL:", connectionString);

// Check if the connection string is not defined, and if so, throw an error
if (!connectionString) {
  throw new Error("No DATABASE_URL defined.");
}

export default connectionString;
