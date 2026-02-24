const express = require("express");
const mongoose = require("mongoose")
const userRoutes = require("./routes/userRoutes");
const app = express();

// middleware = act as an internmdiary between user's request and server's responce

app.use(express.json());
app.use("/api/users", userRoutes);

// mongoDB connection

mongoose
  .connect("mongodb://127.0.0.1:27017/crud_practice")
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.error(err));

// test route 
app.get("/", (req, res) =>{
    res.send("CRUD API is running");
});

const port = 3000;
app.listen(port, () => console.log(`the server is running on ${port}`))