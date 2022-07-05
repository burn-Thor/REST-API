//controllers don't stop automatically, you need to tell them with the res.send method

const User = require("./model");


///in brackets here goes the request object, then response object - always, in that order
exports.signUp = async (req, res) => {
    try {
        const newUser = await User.create(req.body) //req.body is an object that contains k/v pairs that match my User model
        res.send({user: newUser}); 
    } catch (error) {
        console.log(error)
        res.send({error})
    }
}

exports.login = async (req, res) => {
    try {
        const use = await User.findOne({
            username: req.body.username,
            password: req.body.password,
        });
    if (!user) {
        throw new Error("incorrect credentials")
    } else {
        res.send({user});
    }
    } catch (error) {
        console.log(error);
        res.send({error})
    }
};
