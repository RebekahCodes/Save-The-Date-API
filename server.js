//Import helper functions
import { getGuests } from "./src/routes/getGuests.js";

//Import the required modules
import express from "express";
//Initialose the express app
const app = express();
//import dotenv so I can securly store the connection string in the .env file and reference it below.
import dotenv from "dotenv";
dotenv.config();
//Retrieve the port number from environment variables
const PORT = process.env.PORT;
// use express.joson() middleware to parse incoming JSON requests
app.use(express.json());

// ROUTE HANDLERS

//Endpoint to get all guests
app.get("/guests/", async function (req, res) {
  const guests = await getGuests();
  res.status(200).json({ status: "success", payload: guests });
});

//Endpoint to create a new guest
app.post("/guests/", async function (req, res) {
  //define the arguement- what is guest? it will be the object created when the user fills in and submits the form
  const guest = req.body;
  //call the helper function you want
  const newGuest = await addGuest(guest);
  //return the response
  res.status(201).json({ status: "success", payload: newGuest });
});

// Start the server and listen on the specified port
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});
