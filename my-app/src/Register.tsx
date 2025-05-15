import { useState } from 'react'
import './App.css'




function Register() {

  // registration form state
  const [name1,Setname1]=useState('')
  const [email,SetEmail]=useState('')
  const [password1,setPassword1] =useState('')
  const [password2,setPassword2] = useState('')
  const [register,setRegister] =useState('')

  const submit1 =()=>{
    const co =[name1,email,password1,password2]
    setRegister(JSON.stringify(co))
  }

  const reset1 =()=>{
    Setname1(''),
      SetEmail(''),
      setPassword1(''),
      setPassword2(''),
      setRegister('')
    
  }
  
  return (
    <>
    
      <div>
        <pre>{register}</pre>
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
        <button type='button' onClick={submit1}>Register</button>   <button onClick={reset1}>Reset</button>
        <pre>{register}</pre>
      </div>

    </>
  )
}

export default Register
