const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    
    title : {
        type : String,
        required : true
    },
   
    discription: {
        type : String,
        required : true
    },
    video :  {
        type : String,
        
    },
    image :   {
        type : String,
        
    },
    rate : [{
        star : Number ,
        ratedBy : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'user'  //nom du model
        }
    }],
    totalRating : {
        type :Number,
        default : 0
     }   ,
    
})
module.exports = mongoose.model('Movie',movieSchema)