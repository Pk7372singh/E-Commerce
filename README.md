# E-Commerce Website

A dynamic learning e-commerce website developed using the MERN (MongoDB, Express.js, React, Node.js) Full Stack. This project includes key functionalities such as Home, Login, Signup, and Add to Cart features, providing users with a seamless and responsive experience.

## Table of Contents

- [Frontend](#frontend)
- [Backend](#backend)
- [Admin](#admin)
- [Getting Started](#getting-started)
- [Dependencies](#dependencies)
- [Scripts](#scripts)

## Frontend

The frontend of the Shop E-Commerce Website is built with React, making use of modern tooling provided by Vite for efficient development and bundling. Key dependencies include:

- **react:** ^18.2.0
- **react-dom:** ^18.2.0
- **react-router-dom:** ^6.21.3

Dev dependencies for development and linting include:

- **@types/react:** ^18.2.43
- **@types/react-dom:** ^18.2.17
- **@vitejs/plugin-react:** ^4.2.1
- **eslint:** ^8.55.0
- **eslint-plugin-react:** ^7.33.2
- **eslint-plugin-react-hooks:** ^4.6.0
- **eslint-plugin-react-refresh:** ^0.4.5
- **vite:** ^5.0.8

- ![Screenshot 2024-01-30 143446](https://github.com/Pk7372singh/E-Commerce/assets/92020279/7025784d-b42c-4b75-b24c-0496c6a77b17)
- ![Screenshot 2024-01-30 143522](https://github.com/Pk7372singh/E-Commerce/assets/92020279/aad1411e-3915-419b-bb89-f8414d350c4b)



## Backend

The backend of the Shop E-Commerce Website is powered by Node.js and Express.js, with MongoDB serving as the database. Key dependencies include:

- **cors:** ^2.8.5
- **express:** ^4.18.2
- **jsonwebtoken:** ^9.0.2
- **mongoose:** ^8.0.4
- **multer:** ^1.4.5-lts.1
- **nodemon:** ^3.0.3

## Admin

The admin section of the project is designed to handle administrative tasks. It is a separate module with its own dependencies. Please refer to the `admin` directory for specific details.
![Screenshot 2024-01-30 143310](https://github.com/Pk7372singh/E-Commerce/assets/92020279/bdab693a-dd2f-478a-860c-4722aa5a0d34)

![Screenshot 2024-01-30 143401](https://github.com/Pk7372singh/E-Commerce/assets/92020279/f801aafb-1994-44d6-b511-768399cc3815)

## Getting Started

To get started with the E-Commerce Website, follow these steps:

1. Clone the repository: 'https://github.com/Pk7372singh/E-Commerce.git'
2. Navigate to the project directory: `cd shop`
3. Install dependencies for frontend, backend, and admin separately using `npm install` in each directory.
4. Configure your MongoDB connection in the backend (refer to `backend/index.js`).
5. Run the backend: `cd backend && npm start`
6. Run the frontend: `cd frontend && npm run dev`

## Dependencies

Make sure to install the project dependencies by running `npm install` in each relevant directory (frontend, backend, admin).

## Scripts

- **Frontend:**
  - `npm run dev`: Start the development server.
  - `npm run build`: Build the production-ready frontend code.
  - `npm run lint`: Run ESLint for code linting.
  - `npm run preview`: Preview the production build.

- **Backend:**
  - `npm start`: Start the backend server using nodemon.
