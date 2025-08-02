const userModel = require("../models/UserModel.js")

exports.createUser = async (req, res) => {
    try {
        const userData = req.body;
        if (!userData.name || !userData.age) {
            res.status(400).json({ message: "Required fields are missing" })
            return
        }
        await userModel.create(userData);
        return res.status(201).json({ message: "User added successfully" })
    } catch (err) {
        console.log(err)
        return res.json({ message: err })
    }
};

exports.listUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        res.json(users)
    } catch (err) {
        console.log(err)
        return res.json({ message: err });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userData = req.body;
        if (!userData.name || !userData.age) {
            res.status(400).json({ message: "Required fields are missing" })
            return
        }
        await userModel.findByIdAndUpdate(id, userData)
        return res.json({message: "User Updated Successfully"})
    } catch (err) {
        console.log(err)
        return res.json({ message: err });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        
        await userModel.findByIdAndDelete(id)
        return res.json({message: "User deleted Successfully"})
    } catch (err) {
        console.log(err)
        return res.json({ message: err });
    }
}