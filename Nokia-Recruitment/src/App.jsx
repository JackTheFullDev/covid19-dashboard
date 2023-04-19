import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 const [apidata,setApiData]= useState({})

  useEffect(()=>
  {
    fetch("https://api.covid19api.com/summary").then(res=>res.json()).then(data=>setApiData(data));
  },[])

  return (
    <div className="App">
      
      {console.log(apidata)}
    </div>
  )
}

export default App
