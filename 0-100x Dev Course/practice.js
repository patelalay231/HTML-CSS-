const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    return res.send("Hello From home page");
});

app.get('/about-us',(req,res)=>{
    return res.send("Hello From about-us page");
});

app.get('/contact-us',(req,res)=>{
    return res.send("Hello From contact-us page");
});


app.listen(8001,() => console.log("server started..."));
