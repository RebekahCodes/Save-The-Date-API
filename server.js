import dotenv from "dotenv";
dotenv.config();

import express from "express"; //Import the required modules
import cors from "cors"; // Import the cors package
const app = express(); //Initialose the express app
//import dotenv so I can securly store the connection string in the .env file and reference it below.

//Retrieve the port number from environment variables
const PORT = process.env.PORT;

app.use(express.json()); // use express.joson() middleware to parse incoming JSON requests
const corsOptions = {
  origin: ['https://www.beckyandgerrone.com',"https://project-std.vercel.app", 'https://project-12pqb49ii-rebekah-andersons-projects.vercel.app', "http://localhost:3000"]
};
app.use(cors(corsOptions)); //Allow request coming in from my front end React app which is deployed on vercel

//Import helper functions
import { getGuests } from "./src/routes/getGuests.js";
import { addGuest } from "./src/routes/addGuest.js";

// ROUTE HANDLERS

//Endpoint to get all guests
app.get("/guests/", async function (req, res) {
  const guests = await getGuests();
  res.status(200).json({ status: "success", payload: guests });
});

//Endpoint to create a new guest
app.post("/guests/", async function (req, res) {
  //define the arguement- what is guest? it will be the object created when the user fills in and submits the form
  const guestDataJson = req.body;
  console.log(guestDataJson);
  //call the helper function you want
  const newGuest = await addGuest(guestDataJson);
  console.log(guestDataJson);
  //return the response
  res.status(201).json({ status: "success", payload: newGuest });
});

// Start the server and listen on the specified port
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});
