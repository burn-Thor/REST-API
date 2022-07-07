const { Router } = require("express"); //import Router method only from express
const { signUp, login, deleteUser, updateUser, listAll } = require("./controllers"); //import only signUp from controllers file
const {hashPass, comparePass} = require ("../middleware");
// tokenCheck (to add above)
const userRouter = Router(); //create a router that cna have endpoints added to it

userRouter.post("/user", hashPass, signUp); //defining a post request on /user path, that calls the signUp controller
//cannot have two post requests on the same path (can have multiple http methods/verbs on same path, but need different http method for same path)
userRouter.post("/login", comparePass, login); //defining a post request on /login path, that calls the login controller
// userRouter.post("/token", tokenCheck, login); //defining a post request on /token path, that calls both token and login

userRouter.delete("/user", deleteUser); //defining a delete request on the /user path

userRouter.patch("/user", updateUser); //defining a patch request on the /user path

userRouter.get("/user", listAll); //defining a get request on the /user path 

module.exports = userRouter; //exports all endpoints associated with the module userRouter