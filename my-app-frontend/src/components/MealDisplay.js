import React from "react";
import MealCard from "./MealCard"
import FoodCard from "./FoodCard"

function MealDisplay({ meals, dishes }){
    return(
        <div className ="ui four column grid">
            <ul className="row">
                {meals.map((meal) =>(
                    <MealCard key={meal.id} meal={meal}/>
                ))}
                {dishes.map((dish)=>(
                    <FoodCard key={dish.id} dish={dish}/>

                ))}
            </ul>
        </div>
    )
}

export default MealDisplay