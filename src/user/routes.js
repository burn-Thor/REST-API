const { Router } = require("express"); //import Router method only from express
const { signUp, login } = require("./controllers"); //import only signUp from controllers file
const {hashPass} = require ("../middleware");
const userRouter = Router(); //create a router that cna have endpoints added to it

userRouter.post("/user", hashPass, signUp); //defining a post request on /user path, that calls the signUp controller
//cannot have two post requests on the same path (can have multiple http methods/verbs on same path, but need different http method for same path)
userRouter.post("/login", login); //defining a post request on /login path, that calls the login controller

module.exports = userRouter;