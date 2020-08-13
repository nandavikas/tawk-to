const express = require('express');
const app = express();
app.set('port',(process.env.PORT || 5000))
app.use(express.json());
app.get("/",(req,res)=>{
    console.log("[LOG-GET]",req.body)
    res.status(200);
})
app.post("/",(req,res)=>{
    console.log("[LOG-POST]",req.body);
    console.log("[LOG-REQ]",req);
    res.status(200);
})
app.listen(app.get('port'),()=>{
    console.log("TEST SERVER STARTED in port 3567");
})