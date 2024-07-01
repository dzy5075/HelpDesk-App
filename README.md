Certainly! Here's a comprehensive README for your project:

---

# Zealthy Help Desk

Zealthy Help Desk is a simple ticketing system for managing support tickets. Users can submit tickets, and admins can view, update, and manage these tickets. This project uses React for the frontend, Express.js for the backend, and PostgreSQL as the database, deployed using Vercel.

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
git clone https://github.com/yourusername/zealthy-help-desk.git
cd zealthy-help-desk
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

4. **Environment Variables:**

Create a `.env` file in both `client` and `server` directories with the following contents:

**Client `.env`:**

```env
REACT_APP_API_URL=https://zealthy-help-desk-exercise-server.vercel.app
```

**Server `.env`:**

```env
POSTGRES_URL="your_postgres_connection_string"
NODE_ENV=development
JWT_SECRET=your_jwt_secret
FRONTEND_URL=https://zealthy-help-desk-exercise-client.vercel.app/
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
  - `GET /api/admin/tickets` - Get all tickets (admin)
  - `GET /api/admin/tickets/:id` - Get a ticket by ID (admin)
  - `PUT /api/admin/tickets/:id` - Update a ticket by ID (admin)

### Notes

- Ensure your PostgreSQL database is running and accessible.
- Ensure the environment variables are correctly set up for both development and production environments.
- Admin Access username: admin, password: password

### Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

### License

This project is licensed under the MIT License.
