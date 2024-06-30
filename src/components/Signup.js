import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signup(props) {

  const [credentials,setCredentials] = useState({name:"",email:"",password:""})
  let navigate = useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault()
    const response = await fetch(`https://i-notebook-backend-ten.vercel.app/api/auth/createuser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email:credentials.email,password:credentials.password,name:credentials.name})
      });
      const json = await response.json()
      console.log(json)
      if (json.success){
        // save the auth token and redirect 
        localStorage.setItem('token',json.authtoken)
        navigate("/")
        props.showAlert("Account Created Successfully","success")

      }
      else{
        props.showAlert("Invalid Details","danger")
      }
}

const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
}
  return (
    <div className='container my-3' style={{margin:'auto',maxWidth:'400px'}}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} style={{maxWidth:"400px",margin:"auto"}}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Name</label>
    <input type="text" className="form-control" name='name' onChange={onChange} id="name" aria-describedby="emailHelp" required/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' onChange={onChange} id="email" aria-describedby="emailHelp" required/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' onChange={onChange} id="password" required minLength={5}/>
  </div>
  
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
