import axios from "axios"


// register api 

export const signUp = async(values)=>{

    
    const {data}= await axios.post('http://localhost:5000/api/register',{...values})


    return data ;
}

export const SignIn = async(values)=>{
  
    const {data} = await axios.post('http://localhost:5000/api/login',{...values})
  return data ;
}

