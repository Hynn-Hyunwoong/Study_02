const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const cors = require('cors');

app.set("view engine", "html");
nunjucks.configure("views", {express: app,});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.get("/single", (req,res) => {
    res.render('single.html')
})

app.post("/single", (req,res) => {
    res.send("upload")
})

app.get("/array", (req,res) => {
    res.render('array.html')
})

app.get("/upload", (req,res) => {
    res.render('upload.html')
})




app.listen(3000,()=>{
    console.log('listening on http://localhost/3000');
})