//Import the required modules
import express from "express";

// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from ".";

//Initialose the express app
const app = express();

//Retrieve the port number from environment variables
const PORT = process.env.PORT;

// use express.joson() middleware to parse incoming JSON requests
app.use(express.json());

//ADD GUEST HANDLER FUNCTION

//Query the database to create a new guest and return the newly created guest
export async function addGuest(guest) {
  try {
    //SQL Query to insert a new guest
    const queryText = `INSERT INTO guests (household_id, first_name, last_name, email, phone_number, rvsp_status, wine_choice, meal_choice, accommodation)
VALUES ($1, $2, $3, $, $5, $6, $7, $8, $9)
RETURNING*;`;
    //Send the query to the database
    const result = await pool.query(queryText, [
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
    return result.rows;
  } catch (error) {
    console.error("Error adding guest:", error);
    // Handle the error
    throw new Error("Error adding guest to database");
  }
}

// ADD GUEST ROUTE HANDLER

//Endpoint to create a new guest
app.post("/guests/", async function (req, res) {
  //define the arguement- what is guest? it will be the object created when the user fills in and submits the form
  const guest = req.body;
  //call the helper function you want
  const newGuest = await addGuest(guest);
  //return the response
  res.status(201).json({ status: "success", payload: newGuest });
});
