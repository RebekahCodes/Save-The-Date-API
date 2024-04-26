import { addGuest } from "../routes/addGuest.js";
import { test, expect, vi } from "vitest";
//import { pool } from "../database/pool.js"; //Import pool so I can create a mock of the pool.query function

//Create a mock of the pool.query function
vi.mock("../database/pool.js", () => ({
  pool: {
    query: vi.fn().mockResolvedValueOnce({
      rows: [
        {
          household_id: 1,
          first_name: "John",
          last_name: "Doe",
          email: "john.doe@example.com",
          phone_number: "01234567890",
          rsvp_status: "Yes",
          wine_choice: "Red",
          meal_choice: "Fish",
          accommodation: "Yes",
        },
      ],
    }),
  },
}));

//Write a test to show the GET request would return all the data in the guests table
test("addGuest add a guest to the database", async function () {
  const guest = [
    {
      // Mock guest object to pass to addGuest function
      household_id: 1,
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      phone_number: "01234567890",
      rsvp_status: "Yes",
      wine_choice: "Red",
      meal_choice: "Fish",
      accommodation: "Yes",
    },
  ];

  const addedGuest = await addGuest(guest); // The variable guests, will be the return of the getGuests function
  expect(addedGuest).toEqual(guest); // Expect the return to be the same as the mock data.
});
