const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users')

const app = express();
app.use(cors());
app.use(express.json());

// To connect with mongo
mongoose.connect("mongodb://localhost:27017/crud");

// To retrive all data from the mongo database
app.get('/', (req, res) =>{
    // This is a Mongoose query that fetches all documents from the UserModel collection.
    UserModel.find({}) //The empty {} inside find({}) means "select all documents".
    .then(users => res.json(users)) //retrieved users data is sent as a JSON response to the client.
    .catch(err => res.json(err))
})

app.get('/getUser/:id', (req, res) =>{
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users)) 
    .catch(err => res.json(err))
})

// To update user
app.put('/updateUser/:id', async (req, res) => {
    try {
        const { id } = req.params;  // Extract ID from URL
        const updatedUser = await UserModel.findByIdAndUpdate(
            id,   // Pass the ID directly
            { 
                name: req.body.name, 
                email: req.body.email, 
                age: req.body.age 
            },
            { new: true }  // Return the updated document
        );

        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json(updatedUser);
    } catch (err) {
        console.error("Update Error:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// To delete user

app.delete('/deleteUser/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const result = await UserModel.findByIdAndDelete(userId);
        if (!result) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


// When client send post request to our server this function will execute 
app.post("/createUser",(req, res) =>{
    // UserModel represents a Mongoose model for interacting with a MongoDB database.
    UserModel.create(req.body)  // req.body - it contain data sent from the client
    .then(users => res.json(users)) // If the insertion is successful, it returns the newly created user data as a JSON response.
    .catch(err => res.json(err))  // If an error occurs (e.g., database connection issues, validation errors), it catches the error and returns it as a JSON response.
})


app.listen(3001, ()=>{
    console.log("server is running");
})