const { Post, User } = require("../models");

module.exports = {
    // Get all users
    getUsers(req, res) {
        User.find()
        .then( users =>  {
            return res.json(users)
        })
        .catch((err) => res.status(500).json(err))
    },
    createUser(req, res) {
        User.create(req.body)
        .then( user => {
            res.json(user);
        }).catch(err => {
            res.status(500).json(err);
        })
    }
};