import React from "react";
import MealCard from "./MealCard"

function MealDisplay({meals}){
    return(
        <div className ="ui four column grid">
            <ul className="row">
                {meals.map((meal) =>(
                    <MealCard key={meal.id} meal={meal}/>
                ))}
            </ul>
        </div>
    )
}

export default MealDisplay