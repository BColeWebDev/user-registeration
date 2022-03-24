const { user } = require("../models")


const getAllUsers = async (req, res) => {
    const users = await user.findAll()
    console.log(users)
    res.send(users)
}

const getSingleUser = async (req, res) => {
    const { id } = req.params
    const singleUser = await user.findByPk(id)
    res.json(singleUser)

}

const createUser = async (req, res) => {
    try {

        console.log(req.body)
        const users = await user.create(req.body)
        console.log(users)
        res.json(users)

    } catch (error) {
        console.log(error)
    }

}



const updateUser = async (req, res) => {
    const { firstname, lastname, email, development } = req.body
    const { id } = req.params
    // updates base on the request body and where the is on the database
    // updates base on the request body and where the is on the database

    const updateUser = await user.update({ firstname, lastname, email, development }, {
        where: { id }
    })
    res.json(updateUser)
}
const deleteUser = async (req, res) => {
    const { id } = req.params
    await user.destroy({
        where: { id }
    })
}

module.exports = { getAllUsers, getSingleUser, createUser, updateUser, deleteUser }