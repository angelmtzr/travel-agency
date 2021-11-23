const userController = {};

const User = require('../models/userModel');

userController.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

userController.createUser = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const newUser = new User({ username, password, email });
        await newUser.save();
        res.json('User Created');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};

userController.updateUser = async (req, res) => {
    try{
        const { username, password, email } = req.body;
        await User.findByIdAndUpdate(req.params.id, {
            username,
            password,
            email
        });
        res.json('User Updated');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
}

userController.deleteUser = async (req, res) => {
    try{
        const { id } = req.params;
        await User.findByIdAndDelete(id);
        res.json('User Deleted');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
}

module.exports = userController;