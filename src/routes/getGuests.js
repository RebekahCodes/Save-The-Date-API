// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import pool from "../database/pool.js";
//ADDGUEST HANDLER FUNCTION

//Query the database to create a new guest and return the newly created guest
export async function getGuests() {
  try {
    //SQL Query to insert a new guest
    const queryText = `SELECT * FROM guests`;
    //Send the query to the database
    const response = await pool.query(queryText);
    //Return from the database
    return response.rows;
  } catch (error) {
    console.error("Error adding guest:", error);
    // Handle the error
    throw new Error("Error adding guest to database");
  }
}
