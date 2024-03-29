const express = require('express');
const nunjucks = require('nunjucks');
const app = express();


app.set("view engine", "html");
nunjucks.configure('views', {express : app});

app.get('/', (req,res)=>{
    res.render('index.html')
})

app.listen(3005, ()=>{
    console.log(`listening on http://localhost:3005`);
})