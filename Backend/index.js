const express = require('express')
const cors = require("cors");

const app = express()
app.use(express.json());
app.use(cors());

require("dotenv").config();

const db= require("./models/db");


const port = 3001;

const userRouter =require("./routes/user")
app.use("/user" , userRouter)

const postRouter=require("./routes/post")
app.use("/post", postRouter) 


const loginRouter=require("./routes/login")
app.use("/login",loginRouter)

const commentRouter=require("./routes/comment")
app.use("/comment",commentRouter)

const likeRouter=require("./routes/like")
app.use("/like",likeRouter)

const friendRouter =require("./routes/friends")
app.use("/friend" , friendRouter)


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})