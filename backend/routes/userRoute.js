
const express = require ('express');

const {register, login} = require('../controller/User');
// const { isAuth } = require('../middelwares/isAuth');




const userRouter = express.Router();

userRouter.post('/register',register)
userRouter.post('/login',login)

// // user rate a movie
// userRouter.put('/rate',isAuth)



module.exports = userRouter