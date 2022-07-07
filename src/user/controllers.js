//controllers don't stop automatically, you need to tell them with the res.send method

const jwt = require("jsonwebtoken");
const User = require("./model");


///in brackets here goes the request object, then response object - always, in that order
exports.signUp = async (req, res) => {
    try {
        const newUser = await User.create(req.body) //req.body is an object that contains k/v pairs that match my User model
        const token = jwt.sign({id: newUser._id}, process.env.secret) //sign method creates a token with object payload hidden in it, can only be decoded in this app on this machine with that secret, it's very very secure
        res.send({user: newUser, token}); 
    } catch (error) {
        console.log(error)
        res.send({error})
    }
};

//list one user using params
exports.listUser = async (req, res) => {
    try {
        const user = await User.findOne({username: req.params.username});
        if (!user) {
    throw new Error("No user found");
        } else {
            res.send({user});
        }
    } catch (error) {
        console.log(error)
        res.send({error})
    }
};

//Read all users
exports.listAll = async (req, res) => {
    try {
        const users = await User.find(req.body);
        res.send({users});
    } catch (error) {
        console.log(error)
            console.log(error);
        }
}

//Update one user
exports.updateUser = async (req, res) => {
    const userEdits = await User.updateOne(req.body);
    res.send({users: userEdits});
    try{

    }catch (error) {
    res.send({error});
    }
};

//Delete one user
exports.deleteUser = async (req, res) => {
    const removeUser = await User.deleteOne(req.body);
    res.send({user:removeUser});
    try{

    }catch (error) {
        console.log(error);
        res.send({error});
    }
};


exports.login = async (req, res) => {
    try {
        // const use = await User.findOne({
        //     username: req.body.username,
        //     password: req.body.password,
        // });
    if (!req.user) {
        throw new Error("incorrect credentials")
    } else {
        res.send({user});
    }
    } catch (error) {
        console.log(error);
        res.send({error})
    }
};
