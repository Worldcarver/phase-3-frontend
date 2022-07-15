import React from "react";
//import MealCard from "./MealCard"
import FoodCard from "./FoodCard"

function MealDisplay({  dishes, deleteDish, formData, handleChange, mealSubmit, mealFormData, mealHandleChange, meals, onEditDish }){
    console.log("display"+dishes)
    return(
        <div className ="ui five column grid">
            <ul className="row">
                {/* {meals.map((meal) =>(
                    <FoodCard key = {meal.id} meal={meal}/>
                ))} */}
                {dishes.map((dish)=>(
                    <FoodCard key={dish.id} dish={dish} meals={meals} deleteDish={deleteDish} formData={formData} handleChange={handleChange}  mealSubmit={mealSubmit} mealFormData={mealFormData} mealHandleChange={mealHandleChange} onEditDish={onEditDish} />
                   
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
