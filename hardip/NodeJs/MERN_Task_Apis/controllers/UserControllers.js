const Users = require("../models/Users");

const UserControllers = {
    async get_users(req, res) {
        try {
            const users = await Users.find();
            res.status(200).json({
                type: "success",
                users
            });
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }

    },
}

module.exports =  UserControllers;

