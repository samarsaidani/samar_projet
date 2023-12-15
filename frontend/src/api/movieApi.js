import axios from 'axios';



export const getMovie = async()=>{
    const {data} = await axios.get('http://localhost:5000/movie/get')
     return data
}

export const singleMovie = async(ID)=>{
    const {data} = await axios.get(`http://localhost:5000/movie/get/${ID}`)
    return data
}