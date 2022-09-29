const express = require("express");
const { connect } = require("mongoose");
const PORT = 8080;
const app = express();
const dbConnect = require("./config/dbConnect");
let User = 

app.use(express.json());

app.get("/",async(req,res)=>{
    let products = await Product.find().limit(10)
    res.send(products)
})

// listen
app.listen(PORT, async()=>{

     await dbConnect();
    console.log(`Listening on port: http://localhost:${PORT}`);
})




