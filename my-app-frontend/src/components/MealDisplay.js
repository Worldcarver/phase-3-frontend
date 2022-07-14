import React from "react";
//import MealCard from "./MealCard"
import FoodCard from "./FoodCard"

function MealDisplay({  dishes, deleteDish, formData, handleChange, onEditDish }){
    return(
        <div className ="ui five column grid">
            <ul className="row">
                {/* {meals.map((meal) =>(
                    <FoodCard key = {meal.id} meal={meal}/>
                ))} */}
                {dishes.map((dish)=>(
                    <FoodCard key={dish.id} dish={dish} deleteDish={deleteDish} formData={formData} handleChange={handleChange}  onEditDish ={onEditDish} />
                   
                ))}
            </ul>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default MealDisplay
