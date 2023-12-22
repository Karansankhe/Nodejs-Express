const dotenv = require('dotenv').config()
const express = require('express')

const app = express()

const port = process.env.PORT||5000;

app.use("/api/contacts",require("./routes/contactRoute"));

app.listen(port,()=>{
     console.log(`server running ${port}`)
});