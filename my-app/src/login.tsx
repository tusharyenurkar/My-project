import { useState } from 'react'
import './App.css'


interface LoginProps {
  demo?: (newType: string) => void;
  counter1?: number;
  backgroundColor?: string;
  showTime?: Date;
  
}

function Login({demo,counter1,backgroundColor,showTime}: LoginProps) {
  
  const [name,setName]=useState('')
  const[password,setPassword] = useState('')
  const [loginOutput,setLoginOutput] =useState('')
   
// login form submit button
  const Setsubmit =()=>{
    const explane = { name, password };
    setLoginOutput(JSON.stringify(explane));
    if (demo) {
      demo(JSON.stringify(explane));
    }
  }
// login form reset button
  const setReset =()=>{
    setName('');
    setPassword('');
    setLoginOutput('');
    if(demo){
      demo("")
    }
  }
  

   
  return (
    <>
    <p>{showTime ? showTime.toLocaleString() : ''}</p>
      <div style={{ backgroundColor: backgroundColor }}>
        <h2>login Form</h2>
        <p>{name}</p>
        <input type="text" placeholder="username" value={name} onChange={(e)=> setName(e.target.value)}></input>
        <p>{password}</p>
        <input type="password" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} />

    <br></br>
    <br></br>
    <p>{counter1}</p>
    <pre>{loginOutput}</pre>
        <button onClick={setReset}>Reset</button>   <button type ="button" onClick={Setsubmit}>Login</button>
        
      </div>



    </>
  )
}

export default Login
