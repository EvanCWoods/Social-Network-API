const router = require("express").Router();

const {
    getUsers
} = require("../../controllers/user-controller");

// /api/users
router.route("/").get(getUsers);

module.exports = router;