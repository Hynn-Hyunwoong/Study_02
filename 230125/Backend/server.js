const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const cors = require('cors');
const upload = require("./middleware/upload");

app.set("view engine", "html");
nunjucks.configure("views", {express: app,});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));
// app.use((req,res,next)=>{
//     req.headers["content-type"] === 'application/json'

//     req.body = 
//     next()
// })

app.get("/single", (req,res) => {
    res.render('single.html')
})

// app.post("/single", (req,res) => {
//     res.send("upload")
// })

app.post('/single', upload.single("upload"), (req,res)=>{
    console.log('req.file',req.file)
    console.log('req.body',req.body)
    res.send("completed upload")
    // req.body = ''
})

app.get("/array", (req,res) => {
    res.render('array.html')
})

app.post('/array', upload.array("upload"), (req,res)=>{
    console.log('arr req.files',req.files)
    console.log('arr req.body',req.body)
    res.send("completed upload for array")
    // req.body = ''
})

app.get("/upload", (req,res) => {
    res.render('upload.html')
})

app.post('/upload', upload.fields([{name: 'upload1'},{name: 'upload2'},{name: 'upload3'},{name: 'upload4'}]), (req,res)=>{
    console.log('arr req.files',req.files)
    console.log('arr req.body',req.body)
    res.send("completed upload for array")
    // req.body = ''
})



app.listen(3000,()=>{
    console.log('listening on http://localhost/3000');
})