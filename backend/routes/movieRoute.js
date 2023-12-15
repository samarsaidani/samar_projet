const express = require ('express');
const movieRouter = express.Router();
const {multipleUpload} = require('../middelwares/uploadFiles')

const movieSchema = require('../models/movie');

movieRouter.post('/create',multipleUpload,(req,res)=>{
    const{title,discription}=req.body;
    const Img = req.files.moviePic[0].filename;
    const Vid = req.files.movieVid[0].filename;  
    const newMovie = new movieSchema({title,discription,image:Img , video :Vid});
    newMovie.save()
    .then((rslt)=>{
        res.status(200).json({msg:"ok",rslt})

    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json({msg:"not creat"})
        
    })
 })
movieRouter.get('/get',(req,res)=>{
    movieSchema.find({})
    .then((rslt)=>{
        res.status(200).json({msg : "total book list ",rslt})

    })
    .catch((err)=>{
       res.status(500).json({err})
    })
})


movieRouter.get('/get/:id',(req,res)=>{
    const {id}=req.params;
    movieSchema.findById({_id:id})
    .then((rslt)=>{
        res.status(200).json({msg : "movie selected with success",rslt})

    })
    .catch((err)=>{
       res.status(500).json({err})
    })
})
movieRouter.put('/upDateMovie/:id',(req,res)=>{
    const {id}=req.params ;
    const {description,name,role}=req.body;
    
     movieSchema.findByIdAndUpdate({_id:id},{description,name,role})
     .then((rslt)=>{
         res.status(200).json({msg : "movie upDate",rslt})
 
     })
     .catch((err)=>{
        res.status(500).json({err})
     })
 }
 )
 movieRouter.delete('/delete/:id',(req,res)=>{
    const {id}=req.params;
    movieSchema.deleteOne({_id:id})
    .then((rslt)=>{
        res.status(200).json({msg : "movie delete with success",rslt})

    })
    .catch((err)=>{
       res.status(500).json({err})
    })
})



module.exports = movieRouter