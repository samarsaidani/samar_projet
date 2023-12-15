
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const movieSchema = require('../models/movie');
const User = require('../models/user');


require('dotenv').config();
// // handel register

exports.register = async(req,res)=>{
try{
   const{email,password} = req.body;
   // test 3le l existance mte3 l email
   console.log("resevoir"); 
   const exist = await User.findOne({email});
   if(exist){
    return res.status(400).json({msg:"email already exist"})
   }
   // bech nabda n3amel el creation du compte
   const newUser = await new User(req.body);
   // cryptage
   const saltRounds = 10;
   const salt = bcrypt.genSaltSync(saltRounds);
   const hash = bcrypt.hashSync(password,salt); // password hashed
   // newUser {name:'',email:'',password:'hashed password'}
   newUser.password = hash 
     newUser.save(); // enregistre l'objet fel database
     res.status(200).json({msg:'user created',newUser})

}catch(err){
    res.status(500).json({msg:'can not create this user'})
}
}

exports.login= async(req,res)=>{
  try {
      const {email,password} = req.body;
      // search for email existance
      const found = await User.findOne({email});
      if(!found){
          return res.status(400).json({msg:"invalid email or password"})
      }
  
      const match = await bcrypt.compare(password,found.password);
      if(!match){
          return res.status(400).json({msg:"invalid email or password"})
      }
      // w ken el pwd ta3mel match (password === found.password)
      // na3tiw el user mte3na token 
       const payload = {id: found._id,email:found.email};
       const token = jwt.sign(payload,process.env.private_key);
       res.status(200).json({msg:"user logged In",token,found})
  } catch (error) {
    console.log(error);
      res.status(500).json({msg:"you can not log in now"})
  }
  }
  exports.rating = async (req, res) => {
    const { _id } = req.user;
    const { star, movieId } = req.body;
    try {
      const movie = await movieSchema.findById(movieId);
      let alreadyRated = movie.rate.find(
        (UserId) => UserId.ratedby.toString() === _id.toString()
      );
      if (alreadyRated) {
        const updateRating = await movieSchema.updateOne(
          {rate: { $elemMatch: alreadyRated }},
          {$set: { "ratings.$.star": star}},
          {new: true}
        );
        // res.json(updateRating)
      } else {
        const rateMovie = await movieSchema.findByIdAndUpdate(
          movieId,
          {
            $push: {
              rate: {
                star: star,
                
                ratedby: _id,
              },
            },
          },
          {new: true}
        );
        res.json(rateMovie)
      }
      
      const getallratings = await movieSchema.findById(movieId);
      let totalRating = getallratings.ratings.length;
      let ratingsum = getallratings.ratings
        .map((item) => item.star)
        .reduce((prev, curr) => prev + curr, 0);
      let actualRating = Math.round(ratingsum / totalRating);
      let finalproduct = await movieSchema.findByIdAndUpdate(
        movieId,
        {totalrating: actualRating,},
        { new: true }
      );
     return res.json(finalproduct);
    } catch (error) {
      res.status(500).json({msg:'no rating work'})
    }
  };