import React,{useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import {Link} from "react-router-dom"
import {useParams} from "react-router-dom"
import {useSelector} from "react-redux"
import {singleMovie} from "../../api/movieApi"
const MoviePlayer = () => {
    const {id} = useParams();

//     const[movie,setMovie] = useState({})

//    console.log('variable movie: ',movie)

//     useEffect(()=>{
//         singleMovie(id.toString())
//         .then((res)=>{
//           setMovie(res.rslt)
//           console.log(res)
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
//     },[id])
    const list = useSelector((state)=>state.movie);
    const currentMovie = list.find((item)=>item._id === id);
    console.log(currentMovie);
  return (
    <div>

<Navbar expand="lg" className="bg-body-tertiary">
       <Container>
         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="me-auto">
             <Nav.Link as={Link} to="/">Home</Nav.Link>
             
            
           </Nav>
         </Navbar.Collapse>
        
       </Container>
     </Navbar>
       <video controls>
        <source src={`http://localhost:5000/public/${currentMovie.video}`}/>
       </video>
    </div>
  )
}

export default MoviePlayer