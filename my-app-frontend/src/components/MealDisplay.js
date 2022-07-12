import React from "react";
//import MealCard from "./MealCard"
import FoodCard from "./FoodCard"

function MealDisplay({  dishes }){
    return(
        <div className ="ui five column grid">
            <ul className="row">
                {/* {meals.map((meal) =>(
                    <FoodCard key = {meal.id} meal={meal}/>
                ))} */}
                {dishes.map((dish)=>(
                    <FoodCard key={dish.id} dish={dish}/>

                ))}
            </ul>
        </div>
    )
}

export default MealDisplay