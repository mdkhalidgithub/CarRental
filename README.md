# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Car Rental App

## Project Structure

- **Frontend:** React (in `src/`)
- **Backend:** Node.js/Express/MongoDB (in `backend/`)

---

## 1. Backend Setup

1. Create a `.env` file in `backend/`:
   ```
   MONGODB_URI=mongodb://localhost:27017/car_rental
   JWT_SECRET=your_jwt_secret_here
   PORT=5000
   ```
2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```
3. Start the backend server:
   ```
   npm run dev
   ```
   The backend will run on `http://localhost:5000`.

---

## 2. Frontend Setup

1. Install frontend dependencies (from project root):
   ```
   npm install
   ```
2. (Optional) Create a `.env` file in the root directory for API URL:
   ```
   VITE_API_URL=http://localhost:5000/api
   ```
3. Start the frontend:
   ```
   npm run dev
   ```
   The frontend will run on `http://localhost:5173` (default Vite port).

---

## 3. Proxy Setup (Optional)
To avoid CORS issues during development, add this to your `vite.config.js`:
```js
server: {
  proxy: {
    '/api': 'http://localhost:5000',
  },
},
```

---

## 4. API Endpoints Overview

- **Auth:**
  - `POST /api/auth/register` — Register a new user
  - `POST /api/auth/login` — Login and receive JWT
- **Cars:**
  - `GET /api/cars` — List all cars
  - `GET /api/cars/:id` — Get car by ID
  - `POST /api/cars` — Add car (admin only)
  - `PUT /api/cars/:id` — Update car (admin only)
  - `DELETE /api/cars/:id` — Delete car (admin only)
- **Bookings:**
  - `GET /api/bookings/user/:userId` — Get bookings for a user
  - `POST /api/bookings` — Create a booking
  - `PUT /api/bookings/:id/cancel` — Cancel a booking

---

## 5. Example: Using the API in React

```js
// Example: Fetch cars
fetch(`${import.meta.env.VITE_API_URL}/cars`)
  .then(res => res.json())
  .then(data => console.log(data));

// Example: Register
fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, password })
});

// Example: Login
fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password })
});
```

---

## 6. Notes
- Make sure MongoDB is running locally or update the `MONGODB_URI` in your `.env`.
- Use the JWT token from login for protected routes (send as `Authorization: Bearer <token>` header).
