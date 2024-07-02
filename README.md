# Save The Date - Back End

A back-end service for the Save The Date application that handles API requests from the front end, processes guest data, and stores it in a PostgreSQL database. This project is part of a full stack application, with the front end available [here](https://github.com/RebekahCodes/Project-STD).

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- dotenv
- cors

## Features

- **Store Guest Data:** Collects and stores guest details submitted from the front-end form.
- **Retrieve Guest Data:** Provides an endpoint to fetch all guest details.
- **CORS Configuration:** Allows requests from specified front-end domains.
- **Error Handling:** Catches and logs errors during database operations.

## Roadmap

Future enhancements to improve functionality and support for more operations:

- [ ] Add endpoints to delete guest by ID
- [ ] Add endpoints to update guest details (PUT/PATCH) by guest ID and household ID
- [ ] Add more robust form validation
- [ ] Add confirmation for form submission
- [ ] Verify guest is invited before form submission

## Endpoints

### Get All Guests

- **Endpoint:** `/guests/`
- **Method:** GET
- **Description:** Fetches all guests from the database.
- **Response:** JSON object containing an array of guest details.

### Add a New Guest

- **Endpoint:** `/guests/`
- **Method:** POST
- **Description:** Adds a new guest to the database.
- **Request Body:** JSON object containing guest details (first name, last name, email, phone number, etc.).
- **Response:** JSON object containing the added guest's details.

## Run Locally

Clone the project

```bash
  git clone https://github.com/RebekahCodes/Save-The-Date-API.git
