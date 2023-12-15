import {useState} from "react"
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { SignIn } from "../../api/userApi";
import {setAuthentification,isAuthenticated} from "../../helpers/auth";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom"
function Login() {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate()
  const handelSubmit =async()=>{
   
    await SignIn({email,password})
    .then((res)=>{
      console.log(res)
      setAuthentification(res.token , res.found)
      if(isAuthenticated() && isAuthenticated().role ==="user"){
        navigate('/userDash')
      }else if(isAuthenticated() && isAuthenticated().role ==="admin") {
       navigate('/adminDash')
      }
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  

  return (
    <div style={{display:"flex", justifyContent:"space-around", height:"600px",alignItems:"center"}}>
      <img src="https://cdn.dribbble.com/users/1519999/screenshots/5401591/attachments/1170558/great.png?resize=400x300&vertical=center" alt="background"/>
      
      <div style={{ display:"flex",flexDirection:"column",
    alignItems:"center", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius:"10%",padding:"80px"}}>
      <h3>SignIn</h3>
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="13">
          <Form.Control type='email' placeholder="email@example.com" onChange={(e)=>setEmail(e.target.value)}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="13">
          <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        </Col>
      </Form.Group>
    </Form>
    <Button variant="secondary" onClick={()=>handelSubmit()}>login</Button>
    <Link to="/register"> you don't have an account ?</Link>
    </div>
    </div>
  );
}

export default Login;