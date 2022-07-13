import React, {useEffect, useState} from 'react'
// import MealDisplay from './MealDisplay'


function FoodCard({ dish }) {
    const [meal, setMeal] = useState([])
    const [isShown, setIsShown] = useState(false)
    useEffect(() =>{
        fetch(`http://localhost:9292/dishes/${dish.id}/meal`)
          .then(res => res.json())
          .then(data => setMeal(data))
          console.log("sup")
      }, [])

   



    return (
        <li className="card">
            <div className="cardimage">
                <span className="dish"></span>
                <img src={dish.img} alt={dish.name}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={()=> setIsShown(false)}
                >
             
                </img>
                {isShown && (
                     <p>{dish.food}</p>
                )}
            </div>
            <div className="details">
                {/* {favorited ? (
                    <button onClick ={handleFavorited} className="emoji-button favorite active">★</button>
                ) : (
                    <button onClick ={handleFavorited} className="emoji-button favorite">☆</button>
                )} */}
                <strong>{dish.name} </strong>
               
                <span>{meal.name}, {meal.time}{meal.tod}</span>
                <span></span>
            </div>
        </li>
    )
}

export default FoodCard