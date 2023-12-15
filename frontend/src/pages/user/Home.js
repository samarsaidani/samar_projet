

import React,{useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { getMovie } from '../../api/movieApi';
import  { setMovies} from "../../store/userSlice"
import MoviesList from "../../components/MoviesList"
const Home = () => {

  const list = useSelector((state)=>state.movie)
  console.log('this list :',list);

  const dispatch = useDispatch()
  
  useEffect (()=>{
    getMovie()
    .then((res)=>{
      dispatch( setMovies(res.rslt))
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    <div>
     
       <Navbar expand="lg" className="bg-body-tertiary">
       <Container>
         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="me-auto">
             <Nav.Link href="#home">Home</Nav.Link>
             
            
           </Nav>
         </Navbar.Collapse>
        
       </Container>
     </Navbar>
     <div>
      <MoviesList movies={list}/>
     </div>
  
    
    </div>
  )
}

export default Home