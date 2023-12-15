const express = require('express') ;
const ConnectDB = require('./config/connect');
const movieRouter = require('./routes/movieRoute');
const userRouter = require('./routes/userRoute');
const app = express() ;
const cors = require('cors');

require ('dotenv').config();

const port  =  process.env.PORT ;

ConnectDB()
app.use('/public',express.static('public'))
app.use(express.json())

app.use(cors())


app.use('/movie',movieRouter)
app.use('/api',userRouter)












app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    console.log(`server run in : ${port}`);
})