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
      {
        household_id: crypto.randomUUID({ type: "v4" }),
        first_name: "Jane",
        last_name: "Smith",
        email: "jane.smith@example.com",
        phone_number: "01234567891",
        rsvp_status: "No",
        wine_choice: "White",
        meal_choice: "Beef",
        accommodation: "Yes",
      },
      {
        household_id: crypto.randomUUID({ type: "v4" }),
        first_name: "Alice",
        last_name: "Johnson",
        email: "alice.johnson@example.com",
        phone_number: "01234567892",
        rsvp_status: "Waiting",
        wine_choice: "Red",
        meal_choice: "Fish",
        accommodation: "Yes",
      },
      {
        household_id: crypto.randomUUID({ type: "v4" }),
        first_name: "Bob",
        last_name: "Williams",
        email: "bob.williams@example.com",
        phone_number: "01234567893",
        rsvp_status: "Yes",
        wine_choice: "White",
        meal_choice: "Beef",
        accommodation: "No",
      },
      {
        household_id: crypto.randomUUID({ type: "v4" }),
        first_name: "Eve",
        last_name: "Jackson",
        email: "eve.jackson@example.com",
        phone_number: "01234567894",
        rsvp_status: "No",
        wine_choice: "Red",
        meal_choice: "Beef",
        accommodation: "No",
      },
      {
        household_id: crypto.randomUUID({ type: "v4" }),
        first_name: "Michael",
        last_name: "Brown",
        email: "michael.brown@example.com",
        phone_number: "01234567895",
        rsvp_status: "Yes",
        wine_choice: "Red",
        meal_choice: "Fish",
        accommodation: "Yes",
      },
      {
        household_id: crypto.randomUUID({ type: "v4" }),
        first_name: "Emily",
        last_name: "Miller",
        email: "emily.miller@example.com",
        phone_number: "01234567896",
        rsvp_status: "Yes",
        wine_choice: "White",
        meal_choice: "Beef",
        accommodation: "No",
      },
      {
        household_id: crypto.randomUUID({ type: "v4" }),
        first_name: "David",
        last_name: "Wilson",
        email: "david.wilson@example.com",
        phone_number: "01234567897",
        rsvp_status: "Waiting",
        wine_choice: "Red",
        meal_choice: "Fish",
        accommodation: "No",
      },
      {
        household_id: crypto.randomUUID({ type: "v4" }),
        first_name: "Sarah",
        last_name: "Moore",
        email: "sarah.moore@example.com",
        phone_number: "01234567898",
        rsvp_status: "Yes",
        wine_choice: "White",
        meal_choice: "Beef",
        accommodation: "Yes",
      },
      {
        household_id: crypto.randomUUID({ type: "v4" }),
        first_name: "Matthew",
        last_name: "Taylor",
        email: "matthew.taylor@example.com",
        phone_number: "01234567899",
        rsvp_status: "Yes",
        wine_choice: "White",
        meal_choice: "Fish",
        accommodation: "No",
      },
      {
        household_id: crypto.randomUUID({ type: "v4" }),
        first_name: "Emma",
        last_name: "Anderson",
        email: "emma.anderson@example.com",
        phone_number: "01234567900",
        rsvp_status: "No",
        wine_choice: "Red",
        meal_choice: "Beef",
        accommodation: "No",
      },
      {
        household_id: crypto.randomUUID({ type: "v4" }),
        first_name: "James",
        last_name: "Thompson",
        email: "james.thompson@example.com",
        phone_number: "01234567901",
        rsvp_status: "Waiting",
        wine_choice: "Red",
        meal_choice: "Beef",
        accommodation: "Yes",
      },
      {
        household_id: crypto.randomUUID({ type: "v4" }),
        first_name: "Sophia",
        last_name: "Thomas",
        email: "sophia.thomas@example.com",
        phone_number: "01234567902",
        rsvp_status: "No",
        wine_choice: "White",
        meal_choice: "Fish",
        accommodation: "No",
      },
      {
        household_id: crypto.randomUUID({ type: "v4" }),
        first_name: "William",
        last_name: "Jackson",
        email: "william.jackson@example.com",
        phone_number: "01234567903",
        rsvp_status: "Yes",
        wine_choice: "White",
        meal_choice: "Beef",
        accommodation: "Yes",
      },
      {
        household_id: crypto.randomUUID({ type: "v4" }),
        first_name: "Olivia",
        last_name: "White",
        email: "olivia.white@example.com",
        phone_number: "01234567904",
        rsvp_status: "Yes",
        wine_choice: "Red",
        meal_choice: "Beef",
        accommodation: "No",
      },
      {
        household_id: crypto.randomUUID({ type: "v4" }),
        first_name: "Sophie",
        last_name: "Lee",
        email: "sophie.lee@example.com",
        phone_number: "01234567905",
        rsvp_status: "Yes",
        wine_choice: "Red",
        meal_choice: "Fish",
        accommodation: "Yes",
      },
      {
        household_id: crypto.randomUUID({ type: "v4" }),
        first_name: "Ryan",
        last_name: "Nguyen",
        email: "ryan.nguyen@example.com",
        phone_number: "01234567906",
        rsvp_status: "Yes",
        wine_choice: "White",
        meal_choice: "Beef",
        accommodation: "No",
      },
      {
        household_id: crypto.randomUUID({ type: "v4" }),
        first_name: "Emma",
        last_name: "Garcia",
        email: "emma.garcia@example.com",
        phone_number: "01234567907",
        rsvp_status: "No",
        wine_choice: "Red",
        meal_choice: "Beef",
        accommodation: "Yes",
      },
      {
        household_id: crypto.randomUUID({ type: "v4" }),
        first_name: "Liam",
        last_name: "Martinez",
        email: "liam.martinez@example.com",
        phone_number: "01234567908",
        rsvp_status: "Yes",
        wine_choice: "White",
        meal_choice: "Fish",
        accommodation: "No",
      },
      {
        household_id: crypto.randomUUID({ type: "v4" }),
        first_name: "Ava",
        last_name: "Hernandez",
        email: "ava.hernandez@example.com",
        phone_number: "01234567909",
        rsvp_status: "Waiting",
        wine_choice: "Red",
        meal_choice: "Fish",
        accommodation: "No",
      },
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

    console.log("Dummy guest data seeded successfully!");
  } catch (error) {
    console.error("Error seeding guest data:", error);
  } finally {
    await pool.end(); // Close the connection pool
  }
}

// Call the function to seed the data (optional, can be called from another script)
seedGuests();
