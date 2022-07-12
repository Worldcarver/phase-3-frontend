import './App.css';
import MealDisplay from "./components/MealDisplay.js"
import React, { useState, useEffect } from 'react';




function App() {
  const [dishes, setDishes] = useState([])


  useEffect(() =>{
    fetch(`http://localhost:9292/dishes`)
      .then(res => res.json())
      .then(data => setDishes(data))
  }, [])


  return (
    <MealDisplay dishes={dishes}/>
  )
  

//not days for display prob
//need navbar for days, and use meals for display
//need routes for days
//find images for food
//setup seeds manually instead of faker /wrist





}

export default App;
