const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const User = require("../user/model");

exports.hashPass = async (req, res, next) => {
    try {
        // const tempPass = req.body.password; //grabbed password variable from body, and stored it locally 
        // const hashedPass = await bcrypt.hash(tempPass, 8) //hashed the password and stored it in a new constant 
        // req.body.password = hashedPass; //stores freshly hashed password back in the req body

        //DRY version of the above
        req.body.password = await bcrypt.hash(req.body.password, 8);


        next();
    } catch (error) {
        console.log(error);
        res.send({error});
    }
};

exports.comparePass = async (req, res, next) => {
    try {
        req.user = await User.findOne({username: req.body.username});
        // const match = await bcrypt.compare(req.body.password, user.password);
        if (await bcrypt.compare(req.body.password, req.user.password)) {
            next();
        } else {
            throw new Error ("incorrect credentials");
        }
    } catch (error) {
        console.log(error);
        res.send({error});
    }
}

// exports.tokenCheck = async (req, res, next) => {
//     try {
//         const token = req.body.token;
//         console.log(token);
//         const decodedToken = jwt.verify(token, process.env.secret); 
//         req.user = await User.findById(decodedToken.id);//finding a user by their id, stored in the token
//         next()
//     } catch (error) {
//         console.log(error);
//         res.send({error});
//     }
// }