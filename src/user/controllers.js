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