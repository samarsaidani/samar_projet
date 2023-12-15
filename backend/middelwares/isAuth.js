const jwt = require('jsonwebtoken');
const User = require('../models/user');


exports.isAuth = async(req,res,next)=>{

    try {
        const token = req.header('Authorization');
        // decodage 
        const decoded = jwt.verify(token,process.env.private_key);
        if(!decoded){
            return res.status(400).json({msg:"client error"})
        }
        // else implicite
        const utilisateur = await User.findById(decoded.id); 
        req.user = utilisateur
        next()
    } catch (error) {
        res.status(500).json({msg:"you are not allowed to do this action"})
    }
}