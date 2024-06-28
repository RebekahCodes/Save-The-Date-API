import { pool } from "./pool.js";
import crypto from "crypto";

async function seedGuests() {
  try {
    // Create the guests table (if it doesn't exist)
    await pool.query(` 
    CREATE TABLE IF NOT EXISTS guests (
        id SERIAL PRIMARY KEY, 
        household_id VARCHAR(255) NOT NULL,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        email VARCHAR(255), 
        phone_number VARCHAR(255),
        rsvp_status VARCHAR(255),
        wine_choice VARCHAR(255),
        meal_choice VARCHAR(255),
        accommodation VARCHAR(255)
      );
    `);

    // Uncomment this section if you want to seed the table with dummy data in in it
    /*
    const dummyGuests = [
      // Your array of guest objects with name, email, etc. (replace with your actual data)
      {
        household_id: crypto.randomUUID({ type: "v4" }),
        first_name: "John",
        last_name: "Doe",
        email: "john.doe@example.com",
        phone_number: "01234567890",
        rsvp_status: "Yes",
        wine_choice: "Red",
        meal_choice: "Fish",
        accommodation: "Yes",
      },
      // Add more dummy guests as needed
    ];

    for (const guest of dummyGuests) {
      await pool.query(
        "INSERT INTO guests (household_id, first_name, last_name, email, phone_number, rsvp_status, wine_choice, meal_choice, accommodation) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
        [
          guest.household_id, // Replace with guest object properties if needed
          guest.first_name,
          guest.last_name,
          guest.email,
          guest.phone_number,
          guest.rsvp_status,
          guest.wine_choice,
          guest.meal_choice,
          guest.accommodation,
        ]
      );
    }
    */

    console.log("Guests table created successfully!");
  } catch (error) {
    console.error("Error creating guests table:", error);
  } finally {
    await pool.end(); // Close the connection pool
  }
}

// Call the function to seed the data
seedGuests();
