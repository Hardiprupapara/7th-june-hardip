const Users = require("../models/Users");

const AuthController = {
    async create_users(req, res) {
        const newUser = new Users({
            name: name,
            password: password,
            email: email,
            username: username,
            number: number,
            image: imageName // Save the path of the uploaded image
        });
        try {

            const user = await newUser.save(); // Wait for saving the new user
            res.status(201).json({
                type: "success",
                message: "User has been created successfully",
                user,
            });
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err,
            });
        }

    },
}

module.exports = AuthController;
