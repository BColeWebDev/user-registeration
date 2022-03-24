const express = require("express")
const router = express.Router()
// body parser for curl request
const bodyParser = require("body-parser")
router.use(bodyParser.urlencoded({ extended: false }))
const users = require("../controllers/users")


//User Routes Routes 

router.route('/').get(users.getAllUsers).post(users.createUser)
router.route("/:id").get(users.getSingleUser).post(users.updateUser).delete(users.deleteUser)

module.exports = router