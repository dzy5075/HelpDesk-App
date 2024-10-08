Certainly! Here's a comprehensive README for your project:

---

# HelpDesk App

HelpDesk is a simple ticketing system for managing support tickets. Users can submit tickets, and admins can view, update, and manage these tickets. This project uses React for the frontend, Node.js/Express.js for the backend, and PostgreSQL as the database, deployed using Vercel.

## Demo

The application is deployed on Vercel and can be accessed at https://helpdesk-exercise-client.vercel.app/

## Features

- **User**: Submit support tickets with name, email, and description.
- **Admin**:
  - Login to the admin dashboard.
  - View all tickets.
  - View detailed information about each ticket.
  - Update the status and response of tickets.

## Technologies Used

- **Frontend**: React, Axios, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Authentication**: JWT (JSON Web Token)
- **Deployment**: Vercel

## Project Structure

```
├── client
│   ├── public
│   ├── src
│   │   ├── components
│   │   │   ├── TicketForm.js
│   │   │   ├── TicketDetails.js
│   │   │   └── NavBar.js
│   │   ├── pages
│   │   │   ├── Admin.js
│   │   │   └── Login.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── .env
├── server
│   ├── config
│   │   └── database.js
│   ├── controllers
│   │   ├── authController.js
│   │   └── ticketController.js
│   ├── middleware
│   │   └── auth.js
│   ├── models
│   │   ├── Ticket.js
│   │   └── User.js
│   ├── routes
│   │   ├── admin.js
│   │   ├── auth.js
│   │   └── tickets.js
│   ├── .env
│   ├── server.js
│   └── vercel.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/dzy5075/HelpDesk-App
cd HelpDesk-exercise
```

2. **Backend Setup:**

```bash
cd server
npm install
```

3. **Frontend Setup:**

```bash
cd client
npm install
```

### Running the Application

1. **Start the Backend:**

```bash
cd server
npm start
```

2. **Start the Frontend:**

```bash
cd client
npm start
```

### Deployment

The application is deployed on Vercel. The deployment configurations are in `vercel.json`.

### API Endpoints

- **Public Endpoints:**

  - `POST /api/tickets` - Submit a new ticket
  - `GET /api/tickets` - Get all tickets
  - `GET /api/tickets/:id` - Get a ticket by ID
  - `PUT /api/tickets/:id` - Update a ticket by ID

- **Admin Endpoints:**
  - `POST /api/auth/login` - Admin login
  - `GET /api/tickets` - Get all tickets (admin)
  - `GET /api/tickets/:id` - Get a ticket by ID (admin)
  - `PUT /tickets/:id` - Update a ticket by ID (admin)

### Notes

- Ensure your PostgreSQL database is running and accessible.
- Ensure the environment variables are correctly set up for both development and production environments.
- Admin Access username: admin, password: password

### Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

### License

This project is licensed under the MIT License.
