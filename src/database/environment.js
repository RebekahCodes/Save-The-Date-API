import dotenv from "dotenv";
import path from "path";

// Determine environment
const env = process.env.NODE_ENV || "development";
const envPath = path.resolve(process.cwd(), `.env.${env}`);

// Load environment variables from the appropriate .env file
dotenv.config({ path: envPath });


// Retrieve the database connection string from environment variables
const connectionString = process.env.DATABASE_URL;
console.log("DATABASE_URL:", connectionString);

// Check if the connection string is not defined, and if so, throw an error
if (!connectionString) {
  throw new Error("No DATABASE_URL defined.");
}

export default connectionString;
