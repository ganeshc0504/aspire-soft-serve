const express = require("express")
const bosyParser = require('body-parser')
const cors = require("cors")
const mongoose = require("mongoose")
require("./db/db")

const app = express()
const port = process.env.PORT || 5555

app.use(cors())
app.use(bosyParser.json())


app.use('/task/v1/users',require("./routes/user.route"))


app.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
})

