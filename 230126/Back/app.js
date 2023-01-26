const express = require('express');
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.get('/', (req,res,next) => {
    res.send("Hi there")
})

module.exports = app