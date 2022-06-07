require('dotenv').config();
const express = require("express");
const userRouter = require("./routes/v1/user");
const PORT = process.env.APP_PORT || 8081;
const app = express();
app.use(express.json())

app.use('/api', userRouter);
app.listen(PORT, () => console.log(`server started on port ${PORT}`))

