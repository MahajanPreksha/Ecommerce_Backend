const bcrypt = require("bcryptjs");
const user_model = require('../models/user.model');

//Writing the controller/logic to register a user
exports.signup = async (req, res) => {
    //Logic to create the user
    //1. Read the request body
    const request_body = req.body; //req.body in the form of JS object

    //2. Insert the data in the Users collection in MongoDB
    const userObj = {
        name: request_body.name,
        userId: request_body.userId,
        email: request_body.email,
        userType: request_body.userType,
        password: bcrypt.hashSync(request_body.password, 8)
    }
    //3. Return the response back to the user
    try{
        const user_created = await user_model.create(userObj);
        //Return the user
        const res_obj = {
            name: user_created.name,
            userId: user_created.id,
            email: user_created.email,
            userType: user_created.userType,
            createdAt: user_created.createdAt,
            updatedAt: user_created.updatedAt
        }
        res.status(201).send(res_obj); //Successfully created
    }catch(err){
        console.log("Error while registering the user", err);
        res.status(500).send({
            message: "Some error occurred while registering the user."
        });
    }
}