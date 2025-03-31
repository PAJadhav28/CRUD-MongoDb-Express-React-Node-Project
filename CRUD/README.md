# MERN CRUD Application

This is a full-stack CRUD (Create, Read, Update, Delete) application built using the MERN (MongoDB, Express, React, Node.js) stack. It allows users to perform basic CRUD operations with a responsive UI.

## Features
- Create, Read, Update, and Delete operations
- Axios for API requests
- Bootstrap for responsive UI
- MongoDB as the database
- Express and Node.js for backend services
- React for the frontend

## Technologies Used
- **Clien/Frontend:** React, Axios, Bootstrap
- **Server/Backend:** Node.js, Express.js
- **Database:** MongoDB

## Installation

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Clone the Repository
```sh
git clone <repository-url>
cd mern-crud-app
```

### Install Dependencies
#### Backend/Server
```sh
cd backend
npm install
```

#### Clien/Frontend
```sh
cd ../frontend
npm install
```

## Running the Application
### Start MongoDB
Make sure MongoDB is running locally or provide a connection string.

### Start Backend Server
```sh
cd backend
npm start
```

### Start Frontend
```sh
cd frontend
npm start
```

## API Endpoints
| Method | Endpoint     | Description          |
|--------|-------------|----------------------|
| GET    | /api/items  | Fetch all items      |
| POST   | /api/items  | Create a new item    |
| PUT    | /api/items/:id | Update an item  |
| DELETE | /api/items/:id | Delete an item  |

## Folder Structure
```
mern-crud-app/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── .env
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── App.js
└── README.md
```

##Output
<img src="https://github.com/PAJadhav28/CRUD-MongoDb-Express-React-Node-Project/blob/main/CRUD/outputscreenshots/signup.png" >
<img src="https://github.com/PAJadhav28/CRUD-MongoDb-Express-React-Node-Project/blob/main/CRUD/outputscreenshots/login.png" >
<img src="https://github.com/PAJadhav28/CRUD-MongoDb-Express-React-Node-Project/blob/main/CRUD/outputscreenshots/users_list.png" >
<img src="https://github.com/PAJadhav28/CRUD-MongoDb-Express-React-Node-Project/blob/main/CRUD/outputscreenshots/add_user.png" >
<img src="https://github.com/PAJadhav28/CRUD-MongoDb-Express-React-Node-Project/blob/main/CRUD/outputscreenshots/update_user.png" >

## Deployment
You can deploy the application using:
- **Frontend:** Vercel, Netlify
- **Backend:** Render, Heroku
- **Database:** MongoDB Atlas

## Contributing
Feel free to submit pull requests or report issues.

## License
This project is open-source and available under the MIT License.

---

Enjoy coding! 🚀
