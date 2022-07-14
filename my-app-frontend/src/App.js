import './App.css';
import MealDisplay from "./components/MealDisplay.js"
import React, { useState, useEffect } from 'react';
import Header from "./components/Header"
import DishForm from './components/DishForm';


function App() {
  const [dishes, setDishes] = useState([])
  const [meals, setMeals] = useState([])
  const [days, setDays] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    food: "",
    img: "",
    meal_id: 1,
    day_id: 1
  });

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
  function deleteDish(id){
      const deletedDish = dishes.filter((dish) => dish.id !== id)
        setDishes(deletedDish)
        fetch(`http://localhost:9292/dishes/${id}`, {
          method: 'DELETE'
        })
  }
  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:9292/dishes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
         ...formData
        }),
    })
    .then(r => r.json())
    .then(newDish => onAddDish(newDish));
    setFormData({
      name: "",
      food: "",
      img: "",
      meal_id: 1,
      day_id: 1
  })
  }

function handleChange(e){
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
console.log(formData)};

     
  function onAddDish(newDish){
    setDishes([...dishes, newDish])
  }
  function handleUpdate(e){
    e.preventDefault()
    fetch("http://localhost:9292/dishes", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
         ...formData
        }),
    })
    .then(r => r.json())
    .then ( )
  }
  return (
    <div className='app'>
      <Header />
      <DishForm handleChange = {handleChange} handleSubmit = {handleSubmit} formData = {formData}/>
      <MealDisplay dishes={dishes} deleteDish ={deleteDish} formData = {formData} handleChange ={handleChange} handleUpdate={handleUpdate}/>
    
    </div>
  )
  

//need routes for days
//patch

//move form state up, build edit form inside card


}

export default App;
