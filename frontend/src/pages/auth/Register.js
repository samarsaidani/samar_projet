import {useState} from "react"
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { signUp } from "../../api/userApi";
import {Link} from "react-router-dom"
function Register() {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');


  // fonction bech tkhali el button hedheka yab3eth lel backend

  const handelSubmit =async()=>{
    
    await signUp({email,password})
    .then((res)=>{
      console.log(res)
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
      <h3>SignUp</h3>
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="13">
          <Form.Control type='email' placeholder="email@example.com" onChange={(e)=>setEmail(e.target.value)} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="13">
          <Form.Control type="password" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)}/>
        </Col>
      </Form.Group>
    </Form>
    <Button variant="secondary" onClick={()=>handelSubmit()}>register</Button>
    <Link to="/login"> you have an account ?</Link>
    </div>
    </div>
  );
}

export default Register;