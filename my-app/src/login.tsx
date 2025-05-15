import { useState } from 'react'
import './App.css'




function Login() {
  // for login form state
  const [name,setName]=useState('')
  const[password,setPassword] = useState('')
  const [loginOutput,setLoginOutput] =useState('')
// login form submit button
  const Setsubmit =()=>{
    const explane={name,setName}
    setLoginOutput(JSON.stringify(explane))
  }
// login form reset button
  const setReset =()=>{
    setName(''),
    setPassword(''),
    setLoginOutput('')
  }
  

   
  return (
    <>
    <pre>{loginOutput}</pre>
      <div>
        <h2>login Form</h2>
        <p>{name}</p>
        <input type="text" placeholder="username" value={name} onChange={(e)=> setName(e.target.value)}></input>
        <p>{password}</p>
        <input type="password" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} />

    <br></br>
        <button onClick={setReset}>reset</button>   <button type ="button" onClick={Setsubmit}>Login</button>
        <pre>{loginOutput}</pre>
      </div>



    </>
  )
}

export default Login
