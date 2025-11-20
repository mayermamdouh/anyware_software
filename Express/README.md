# Anyware Challenge Backend

## Description

This project is the backend API for the Anyware Challenge Dashboard, built using **Express.js** and **MongoDB**. It provides endpoints for managing announcements and quizzes with full CRUD functionality. Error handling is implemented using a custom `AppError` class and `asyncWrapper` middleware for cleaner async code.

## Features

- CRUD endpoints for **Announcements** and **Quizzes**.
- Centralized async error handling with `asyncWrapper`.
- Custom `AppError` class for consistent error responses.
- Fully modular architecture using controllers, routes, and middleware.
- MongoDB integration using Mongoose.

## Technologies & Packages Used

- **Node.js** – runtime environment.
- **Express.js** – web framework for building APIs.
- **MongoDB & Mongoose** – database and ODM for data modeling.
- **Nodemon** – for automatic server reloads during development.
- **dotenv** – for environment variable management.
- **CORS** – to allow cross-origin requests.

## Installation

1. Clone the repository:

   ```bash
   git clone <repo-url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your MongoDB connection string:

   ```env
   MONGO_URI=<your-mongodb-connection-string>
   PORT=3000
   ```

4. Run the server in development mode:

   ```bash
   npm run dev
   ```

## Folder Structure

```
src/
 ├─ controllers/    # Controllers for announcements and quizzes
 ├─ middleware/     # Async wrapper, error handling, and other middleware
 ├─ models/         # Mongoose models (Announcement, Quiz)
 ├─ routes/         # Express routers for API endpoints
 ├─ index.js        # Main entry point of the server
```

## Usage

- Endpoints for Announcements:

  - `POST /announcements` – Create a new announcement
  - `GET /announcements` – Get all announcements
  - `GET /announcements/:id` – Get a single announcement by ID
  - `PATCH /announcements/:id` – Update an announcement
  - `DELETE /announcements/:id` – Delete an announcement

- Endpoints for Quizzes:

  - `POST /quiz` – Create a new quiz
  - `GET /quiz` – Get all quizzes
  - `GET /quiz/:id` – Get a single quiz by ID
  - `PATCH /quiz/:id` – Update a quiz
  - `DELETE /quiz/:id` – Delete a quiz

## Error Handling

- All async routes are wrapped with `asyncWrapper` to automatically catch errors.
- Errors are returned consistently using the `AppError` class with `statusCode`, `statusText`, and `message`.
