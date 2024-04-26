// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../database/pool.js";
//ADDGUEST HANDLER FUNCTION

//Query the database to create a new guest and return the newly created guest
export async function addGuest(guest) {
  try {
    //SQL Query to insert a new guest
    const queryText = `INSERT INTO guests (id, household_id, first_name, last_name, email, phone_number, rvsp_status, wine_choice, meal_choice, accommodation)
  VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7, $8, $9)
  RETURNING*;`;
    //Send the query to the database
    const response = await pool.query(queryText, [
      guest.household_id,
      guest.first_name,
      guest.last_name,
      guest.email,
      guest.phone_number,
      guest.rsvp_status,
      guest.wine_choice,
      guest.meal_choice,
      guest.accommodation,
    ]);
    //Return from the database
    return response.rows;
  } catch (error) {
    console.error("Error adding guest:", error);
    // Handle the error
    throw new Error("Error adding guest to database");
  }
}
