const express = require("express");
const cors = require('cors');
const connection = require("./configration/config");
const { userRouter, postRouter, commentRouter, reportRouter, advertiseRouter } = require("./router/app.router");

const app = express();

require('dotenv').config();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
connection();
app.use('/uploads',express.static("uploads"));
app.use(userRouter);
app.use(postRouter);
app.use(commentRouter);
app.use(reportRouter);
app.use(advertiseRouter);

const server = app.listen(port , ()=>{
    console.log(`App Listening Successfully At port ${port}`);
});

const io = require("./socket/socket").init(server);
io.on("connection",(socket)=>{
    console.log("new client");
})

