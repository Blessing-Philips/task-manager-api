# To-Do List API

A simple and efficient To-Do List API built with Node.js, Express, and MongoDB. This API allows users to create, read, update, and delete tasks.

## Features

- Create a new task
- Retrieve all tasks
- Update a task by ID
- Delete a task by ID

## Prerequisites

- Node.js (version 14 or later)
- MongoDB (running locally)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Blessing-Philips/to-do-app.git
    cd TO-DO LIST API
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

## Running the API

1. **Start the server:**

    ```bash
    npm start
    ```

2. **The API will be running at:**

    ```
    http://localhost:3000
    ```

## Error Handling

The API will respond with appropriate HTTP status codes and error messages in the following scenarios:

- **400 Bad Request:** Invalid input data or missing required fields.
- **404 Not Found:** Task not found for the provided ID.
- **500 Internal Server Error:** An unexpected error occurred on the server.