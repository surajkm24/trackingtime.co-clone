const express = require("express");
const cors = require('cors');
const PORT = process.env.PORT || 8080;
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

app.get("/", async (req, res) => {
    res.send('Backend is running successfully!')
})

// listen
dbConnect().then(() => {
    app.listen(PORT, async () => {
        // feedback: fw16_644 - you can connect db at the top or before calling cors or other configuration
        console.log(`Listening on port: http://localhost:${PORT}`);
    })
})





