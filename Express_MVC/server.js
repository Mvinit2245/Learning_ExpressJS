const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000
const dotenv = require('dotenv')
dotenv.config()
const userRoutes = require("./routes/index.js")

app.use(express.json())
app.use("/v1", userRoutes)
mongoose.connect(process.env.MONGO_STRING)
.then(() => {
    console.log('Connected to MongoDB')
}).catch(() => {
    console.log('MongoDB connection is failed');
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
