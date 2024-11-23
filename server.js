//This is the starting file of the project
const express = require('express');
const mongoose = require('mongoose');
const server_config = require('./configs/server.config');
const db_config = require('./configs/db.config');
const user_model = require('./models/user.model');
const bcrypt = require('bcryptjs');
const app = express();

app.use(express.json); //Middleware: Convert JSON into JS Object

//Create an admin user at the starting of the application (if not already present)

//Connection with MongoDB
const db = mongoose.connection;
mongoose.connect(db_config.DB_URL);

db.on("error", () => {
    console.log("Error while connecting to the MongoDB.")
});
db.once("open", () => {
    console.log("Connected to MongoDB.");
    init();
})

async function init(){
    try{
        let user = await user_model.findOne({userId: "admin"});
        if(user){
            console.log("Admin is already present");
            return;
        }
    }catch(err){
        console.log("Error while reading the data", err);
    }
    try{
        user = await user_model.create({
            name: "Preksha",
            userId: "admin",
            email: "prekshamahajan2020@gmail.com",
            userType: "ADMIN",
            password: bcrypt.hashSync("Welcome1", 8) //8: salt
        })
        console.log("Admin created ", user);
    }catch(err){
        console.log("Error while creating admin", err);
    }
}

//Stitch the route to ther server
require("./routes/auth.route")(app)

//Start the server
app.listen(server_config.PORT, () => {
    console.log("Server has started at port number: ", server_config.PORT);
})