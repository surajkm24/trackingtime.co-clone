const express = require("express");
const cors = require('cors');
const PORT = 8080;
const dbConnect = require("./config/dbConnect");
const userRouter = require('./features/users/user.router.js');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/user', userRouter);

app.get("/", async (req, res) => {
    // let products = await Product.find().limit(10)
    // res.send(products)
})

// listen
app.listen(PORT, async () => {

    await dbConnect();
    console.log(`Listening on port: http://localhost:${PORT}`);
})




