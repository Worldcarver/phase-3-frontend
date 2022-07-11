import React, {useEffect, useState} from 'react'
import './App.css';
import DayDisplay from "./components/DayDisplay.js"




function App() {
  const [days, setDays] = useState([])

  useEffect(() =>{
    fetch(`http://localhost:9292/days`)
      .then(res => res.json())
      .then(data => setDays(data))
  }, [])



  return (
    <DayDisplay days={days}/>
  )
  







}


export default App;
