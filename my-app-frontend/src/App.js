import './App.css';
import MealDisplay from "./components/MealDisplay.js"
import React, { useState, useEffect } from 'react';
import Header from "./components/Header"
import DishForm from './components/DishForm';


function App() {
  const [dishes, setDishes] = useState([])
  const [meals, setMeals] = useState([])
  const [days, setDays] = useState([])

  useEffect(() =>{
    fetch(`http://localhost:9292/dishes`)
      .then(res => res.json())
      .then(data => setDishes(data))
  }, [])
  useEffect(() =>{
    fetch(`http://localhost:9292/meals`)
      .then(res => res.json())
      .then(data => setMeals(data))
  }, [])
  useEffect(() =>{
    fetch(`http://localhost:9292/days`)
      .then(res => res.json())
      .then(data => setDays(data))
  }, [])

  return (
    <div className='app'>
      <Header />
      <DishForm setDishes ={setDishes} meals = {meals} days = {days}/>
      <MealDisplay dishes={dishes}/>
    
    </div>
  )
  

//not days for display prob
//need navbar for days, and use meals for display
//need routes for days
//find images for food
//setup seeds manually instead of faker /wrist
//post, patch, delete




}

export default App;
