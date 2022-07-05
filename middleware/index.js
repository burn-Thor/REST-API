const bcrypt = require("bcryptjs");

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