# README.md

# Anyware Challenge Dashboard

## Description

This project is a React.js dashboard application that displays announcements and quizzes for users. It includes authentication logic to restrict access to logged-in users.

## Features

- User login/logout functionality.
- Protected dashboard accessible only for logged-in users.
- Display of announcements with author info and published date.
- Responsive layout:

  - Vertical timeline lines on large screens (`lg+`)
  - Horizontal separator lines on small screens (`<lg`)

- Modern UI components using shadcn/ui.
- Fully styled with Tailwind CSS.

## Technologies & Packages Used

- **React.js** – for building interactive user interfaces.
- **Vite** – project setup and fast development server.
- **Tailwind CSS** – utility-first CSS framework for styling.
- **shadcn/ui** – prebuilt UI components for faster development.
- **React Router DOM** – for client-side routing.
- **Redux Toolkit** – for global state management.
- **React Icons** – for icons like notifications and search.
- **i18next** – for internationalization and localization (multi-language support).

## Installation

1. Clone the repository:

   ```bash
   git clone <repo-url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

## Folder Structure

```
src/
 ├─ assets/          # Static files like images, icons, fonts
 ├─ components/      # Reusable UI components
 ├─ hoc/             # Higher Order Components (e.g., requireAuth)
 ├─ lib/             # Utility functions and helpers
 ├─ locales/         # Translation files for i18n
 ├─ pages/           # Pages like Home and Dashboard
 ├─ services/        # API services
 ├─ store/           # Redux store and slices
 ├─ App.tsx          # Main app component with routes
 └─ main.tsx         # Entry point
```
