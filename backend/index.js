const express = require("express");
const cors = require('cors');
const PORT =process.env.PORT || 8080;
const dbConnect = require("./src/config/dbConnect");
const userRouter = require('./src/features/users/user.router.js');
const taskRouter = require('./src/features/tasks/task.router.js');
const projectRouter = require('./src/features/projects/project.router.js')
const authmiddleware = require('./src/features/Middlewares/authmiddleware.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/user', userRouter);
app.use('/project', authmiddleware, projectRouter);
app.use('/task', authmiddleware, taskRouter);

// app.get("/", async (req, res) => {
//     let products = await Product.find().limit(10)
//     res.send(products)
// })

// listen
app.listen(PORT, async () => {

    await dbConnect();
    console.log(`Listening on port: http://localhost:${PORT}`);
})




