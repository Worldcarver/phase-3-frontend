import React, {useEffect, useState} from 'react'
// import MealDisplay from './MealDisplay'


function FoodCard({ dish }) {
    const [meal, setMeal] = useState([])
   
    useEffect(() =>{
        fetch(`http://localhost:9292/dishes/${dish.id}/meal`)
          .then(res => res.json())
          .then(data => setMeal(data))
      }, [dish.id])

    



    return (
        <li className="card">
            <div className="cardimage">
                <span className="dish"></span>
                <img src={"temp"} alt={dish.name} />
            </div>
            <div className="details">
                {/* {favorited ? (
                    <button onClick ={handleFavorited} className="emoji-button favorite active">★</button>
                ) : (
                    <button onClick ={handleFavorited} className="emoji-button favorite">☆</button>
                )} */}
                <strong>{dish.name}</strong>
                <p>{dish.food}</p>
                <span>{meal.name}, {meal.time}{meal.tod}</span>
                <span></span>
            </div>
        </li>
    )
}




export default FoodCard