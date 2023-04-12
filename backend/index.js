const express = require('express')
const cors = require("cors");
const mongoose = require("mongoose");
const md5 = require("md5");

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/libraryUser").then(() => {
    console.log("Connection Established")
}).catch((err) => {
    console.log("No connection");
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

app.post("/login", (req, res) => {
    // const {email, password} = req.body;
    const email = req.body.email;
    const password = md5(req.body.password);
    User.findOne({email:email}).then((user) => {
        if(!user){
            res.send({message:"User not registered"});
        }else{
            if(password===user.password){
                res.send({message:"Login Successful", user:user});
            }else{
                res.send({message: "Incorrect password"});
            }
        }
    }).catch((err)=>{
        res.send({message:"Invalid User"});
    })
})

app.post("/register", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = md5(req.body.password);

    User.findOne({ email: email }).then((user)=>{
        if(!user){
            const user = new User({
                name,
                email,
                password
            })
            user.save().then((user) => {
                if(user){
                    res.send({message:"Successful registration"})
                }
            })
        }else{
            res.send(message="User already registered");
        }
    }).catch((err) => {
        res.send(err);
    })

})

app.listen(3001, () => {
    console.log("Backend Started at port 3001");
}) 