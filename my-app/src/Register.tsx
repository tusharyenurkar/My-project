import { useState } from 'react'
import './App.css'

interface RegistrationProps{
  demo1?:(newType:string)=>void;
  counter2?:number;
  bgcolor?:string;
}


function Register({demo1,counter2,bgcolor}: RegistrationProps) {

  
  const [name1,Setname1]=useState('')
  const [email,SetEmail]=useState('')
  const [password1,setPassword1] =useState('')
  const [password2,setPassword2] = useState('')
  const [register,setRegister] =useState({})

  const submit1 =()=>{
    const userObject = {
      name: name1,
      email: email,
      password: password1,
      confirmPassword: password2
    }

    setRegister(userObject);
    if(demo1){
      demo1(JSON.stringify(userObject))
    }
  }

  const reset1 =()=>{
    Setname1(''),
      SetEmail(''),
      setPassword1(''),
      setPassword2(''),
      setRegister('');
      if(demo1){
        demo1("")
      }
    
  }
  
  return (
    <>
    
      <div style={{ backgroundColor: bgcolor }}>
        <p>{counter2}</p>
        <pre>{JSON.stringify(register)}</pre>
        <h2>Registration form</h2>
        <p>{name1}</p>
        <input  type="text" placeholder='Name' value={name1} onChange={(e)=> Setname1(e.target.value)}></input>
        <p>{email}</p>
        <input type="text"  placeholder =" Email" value={email} onChange={(e) => SetEmail(e.target.value)}></input>
        <p>{password1}</p>
        <input type ="password" placeholder='Password' value={password1} onChange={(e)=> setPassword1(e.target.value)}></input>
        <p>{password2}</p>
        <input type='password' placeholder='confirm password' value={password2} onChange={(e) => setPassword2(e.target.value)}></input>
    <br></br>
    <br></br>
        <button onClick={reset1}>Reset</button>     <button type='button' onClick={submit1}>Register</button>   
        <pre>{JSON.stringify(register)}</pre>
      </div>

    </>
  )
}

export default Register
