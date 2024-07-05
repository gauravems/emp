# Event Management Platform (EMP)

## Overview

The **Event Management Platform (EMP)** is a basic application designed for an event-organizing company. This platform allows users to manage events efficiently with functionalities to add, update, delete, and retrieve event details. It also provides the ability to list all events with optional filters.

## Features

- **Add Event:** Create a new event with detailed information including name, date, organizer info, and location.
- **Update Event:** Modify the details of an existing event.
- **Delete Event:** Remove an event by its unique identifier.
- **Retrieve Event:** Fetch the details of a specific event using its unique ID.
- **List Events:** Display all events with options to filter by date, organizer, and location.

## Event Object Structure

Each event is represented by the following structure:

```json
{
    "id": "string", // Unique identifier for the event
    "eventName": "string", // Name of the event
    "eventDate": "Date", // Date of the event
    "organizer": "string", // Organizer's name
    "email": "string", // Email of the organizer
    "phone": "string", // Phone number of the organizer
    "location": {
        "street": "string", // Venue street address
        "city": "string", // Venue city
        "state": "string", // Venue state
        "zip": "string" // Venue zip code
    },
    "createdAt": "Date", // Timestamp when the event was created
    "updatedAt": "Date" // Timestamp when the event was last updated
}
```

## Installation

### Prerequisites

- Node.js 
- npm 
- MongoDB or any other database service

### Steps

1. **Clone the repository:**

    ```bash
    git clone https://github.com/gauravems/emp.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd emp
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Set up environment variables:**

    Create a `.env` file in the root directory and add your database and other necessary configurations.

    ```plaintext
    DATABASE_URL=mongodb://localhost:27017/emp
    PORT=3000
    ```

5. **Start the application:**

    ```bash
    npm start
    ```

## Usage

Once the application is running, you can perform the operations
