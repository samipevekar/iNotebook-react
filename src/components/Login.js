import React, { useState } from 'react'
import { useNavigate} from "react-router-dom";

export default function Login(props) {
    const [credentials,setCredentials] = useState({email:"",password:""})
    let navigate = useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email:credentials.email,password:credentials.password})
          });
          const json = await response.json()
          console.log(json)
          if (json.success){
            // save the auth token and redirect 
            localStorage.setItem('token',json.authtoken)
            navigate("/")
            props.showAlert("Logged in Successfully","success")

          }
          else{
            props.showAlert("Invalid Credentials","danger")
          }

    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
  return (
    <div className='my-3 ' style={{margin:'auto',maxWidth:'400px'}}>
      <h2>Login</h2>
        <form onSubmit={handleSubmit} style={{maxWidth:"400px",margin:"auto"}}>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input type="email" className="form-control" name='email' id="email" onChange={onChange} value={credentials.email} aria-describedby="emailHelp" required/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" className="form-control" id="password" onChange={onChange} value={credentials.password} name='password' required/>
    </div>
    <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
  </form>
    </div>
  )
}
