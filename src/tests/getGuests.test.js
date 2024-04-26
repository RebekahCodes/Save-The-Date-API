import { getGuests } from "../routes/getGuests.js";
import { test, expect, vi } from "vitest";
import { pool } from "../database/pool.js"; //Import pool so I can create a mock of the pool.query function

//Create a mock of the pool.query function
vi.mock("../database/pool.js", () => ({
  pool: { query: vi.fn() },
}));

//Write a test to show the GET request would return all the data in the guests table
test("getGuests returns all guests in the database", async function () {
  const mockData = [
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
    {
      household_id: 1,
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
      household_id: 2,
      first_name: "Alice",
      last_name: "Johnson",
      email: "alice.johnson@example.com",
      phone_number: "01234567892",
      rsvp_status: "Waiting",
      wine_choice: "Red",
      meal_choice: "Fish",
      accommodation: "Yes",
    },
  ];
  pool.query.mockResolvedValueOnce({ rows: mockData }); // This mimics the database query return

  const guests = await getGuests(); // The variable guests, will be the return of the getGuests function
  expect(guests).toEqual(mockData); // Expect the return to be the same as the mock data.
});
