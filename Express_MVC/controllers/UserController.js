const userModel = require("../models/UserModel.js")

exports.createUser = async(req, res) => {
    try{
        const userData = req.body;
    if(!userData.name || !userData.age){
        res.status(400).json({message: "Required fields are missing"})
        return
    }
    await userModel.create(userData);
    return res.status(201).json({message: "User added successfully"})
    }catch(err){
        console.log(err)
        return res.json({message : err})
    }
};