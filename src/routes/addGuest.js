// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../database/pool.js";

import crypto from "crypto";

//ADDGUEST HANDLER FUNCTION

//Query the database to create a new guest and return the newly created guest
//Declare a function that will add a guest to the database
export async function addGuest(guestDataJson) {
  try {
    // Initialize an array to store the inserted guests
    const guestsToAdd = [];
    const householdId = crypto.randomUUID({ type: "v4" }); // Generate UUID for the household id using crypto.
    // Iterate over each guest object in the array
    for (const guest of guestDataJson) {
      // SQL Query to insert a new guest
      const queryText = `
        INSERT INTO guests (
          household_id,
          first_name,
          last_name,
          email,
          phone_number,
          rsvp_status,
          wine_choice,
          meal_choice,
          accommodation
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        RETURNING *;
      `;

      //Send the query to the database
      const response = await pool.query(queryText, [
        householdId,
        guest.first_name,
        guest.last_name,
        guest.email,
        guest.phone_number,
        guest.rsvp_status,
        guest.wine_choice,
        guest.meal_choice,
        guest.accommodation,
      ]);

      // Add the newly created guest data to the guestsToAdd array
      guestsToAdd.push(response.rows[0]);
    }
    // Return the array of inserted guests
    return guestsToAdd;
  } catch (error) {
    console.error("Error adding guest:", error);

    // Handle the error
    throw new Error("Error adding guest to database");
  }
}
