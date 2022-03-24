if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const app = require("./server")
const express = require("express")
const cors = require("cors");
const users = require("./src/routes/users.js")
app.use(express.static('./client'));
app.use(cors());
app.use(express.json())
app.use('/api/v1/users', users)
const port = process.env.PORT || 5000;


app.listen(port, () => { console.log(`Server listening http://localhost:${port}`) })
app.use("*", (req, res) => res.status(404).json({ error: "not found" }))


