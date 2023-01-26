const express = require('express');
const mongoose = require('mongoose');
const patientRouter = require("./routes/patient.route")
const app = express();
app.use(express.json())

app.get("/", (req, res) => {
    res.send("welcome")
})

app.use("/user",patientRouter)


mongoose.connect("mongodb://localhost:27017/nem201").then(()=>{
    app.listen(8080,(req,res)=>{
        console.log("server start on port http://localhost:8080")
   })

})



//qkRvqdBYXnJHWdUj
//ihlaKLkDxcbJMZ2D
//mongodb+srv://lettified:ihlaKLkDxcbJMZ2D@cluster0.6jope0y.mongodb.net/node?retryWrites=true&w=majority