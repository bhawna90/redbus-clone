import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    useEffect(()=>{
        if(localStorage.getItem("token")){
            navigate("/")
        }
    },[])
    function login(){
        if(!username || !password){
            toast.error("All the fields are required")
        }
        else{
            localStorage.setItem("token", "abc")
            navigate("/")
        }
    }
  return (
    <>
      <Toaster></Toaster>
      <Container
        style={{ height: "100vh" }}
        className="d-flex flex-column align-items-center justify-content-center w-50"
      >
        <Form.Control type="text" placeholder="Username"  value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
        <Form.Control className="mt-4" type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <Button className="mt-4 w-100" variant="danger" onClick={login}>
          Sign in
        </Button>
      </Container>
    </>
  );
}

export default Login;
