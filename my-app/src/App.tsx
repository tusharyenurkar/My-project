
import { use, useEffect, useState } from 'react'
import './App.css'
import Login from './login'
import Register from './Register'

type PostProps = {
  id: number;
  title: string;
};




function App() {

  const [count, setCount] = useState(0)
  const [LoginData, setLoginData] = useState("")
  const [RegistrationData, setRegistrationData] = useState("")
  const [bgColor, setBgColor] = useState("#ffffff")
  const [backColor, setbackColor] = useState("")
  const [time,setTime]= useState(new Date())



  const calculateCurrentTime = () => {
    return setInterval(() => {
      setTime(new Date());
    }, 1000);
  }
  useEffect(() => {
    const interval = calculateCurrentTime();
    return () => {
      console.log("inside cleanup");
      clearInterval(interval);
    }

  }, [])

  

  return (
    <>
     <h1>{time.toISOString()}</h1>

      <Login demo={setLoginData} counter1={count} backgroundColor={bgColor} />
      <Register demo1={setRegistrationData} counter2={count} bgcolor={backColor} />


      <p>{count}</p>
      <button onClick={() => {
        setBgColor(bgColor === "#ffffff" ? "#87CEEB" : "#ffffff")
        setbackColor(bgColor === "#ffffff" ? "#87CEEB" : "white")

        setCount(count + 1)
      }}>count</button>

      <p>Login data:{LoginData}</p>
      <p>Register data:{RegistrationData}</p>
    </>
  )
}

export default App
