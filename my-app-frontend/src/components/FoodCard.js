import React, {useEffect, useState} from 'react'


//meals,

function FoodCard({ dish, deleteDish, formData, handleChange, onEditDish, mealSubmit, mealFormData, mealHandleChange}) {
    const [meal, setMeal] = useState([])
    const [isShown, setIsShown] = useState(false)
    const [formIsShown, setFormIsShown] = useState(false)
    useEffect(() =>{
        fetch(`http://localhost:9292/dishes/${dish.id}/meal`)
          .then(res => res.json())
          .then(data => setMeal(data))
      }, [])
        // const updatedMeal = meals.filter(meal=>meal.id === dish.meal_id)
    


        function handleUpdate(e){
        e.preventDefault()
        fetch(`http://localhost:9292/dishes/${dish.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                meal_id: formData.meal_id,
                day_id: formData.day_id
            }),
        })
        .then(r => r.json())
        .then(updatedDish => onEditDish(updatedDish) )
      }
      
    return (
        <li className="card">
            <div className="cardimage">
                <span className="dish"></span>
                <img className = 'dishpic'src={dish.img} alt={dish.name}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={()=> setIsShown(false)}
                >
             
                </img>
                {isShown && (
                     <p className='dishinfo'>{dish.food}</p>
                )}
            </div>
            <div className="details">
               
                    <button 
                    className="emoji-button delete active"
                    onClick={(e) => { return deleteDish(dish.id), e.stopPropagation()}}
                    >
                        🗑️
                        
                        </button>
                        <button className='editbutton' onClick={() => setFormIsShown(true)}>✏️</button>
                        {formIsShown && (
                        <form onSubmit={handleUpdate}>
                                <select name = "meal_id" value = {formData.meal_id} onChange={handleChange}>
                                    <option value = "1">Breakfast</option>
                                    <option value = "2">Lunch</option>
                                    <option value = "3">Dinner</option>
                                </select>
                                <select name = "day_id" value = {formData.day_id} onChange={handleChange}>
                                    <option value = "1">Monday</option>
                                    <option value = "2">Tuesday</option>
                                    <option value = "3">Wednesday</option>
                                    <option value = "4">Thursday</option>
                                    <option value = "5">Friday</option>
                                    <option value = "6">Saturday</option>
                                    <option value = "7">Sunday</option>
                                </select>
                                <button type="submit">Edit Time</button>
                            </form>
                            )}
                            {formIsShown && (
                                <form onSubmit={mealSubmit}>
                                    
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Meal Name"
                                        value={mealFormData.name}
                                        onChange={mealHandleChange}
                                        />
                                 
                                    <input
                                        type="text"
                                        name="time"
                                        placeholder="Meal Time"
                                        value={mealFormData.time}
                                        onChange={mealHandleChange}
                                        />
                                        <input
                                        type="text"
                                        name="tod"
                                        placeholder="am or pm"
                                        value={mealFormData.tod}
                                        onChange={mealHandleChange}
                                        />
                                   
                                    <button type="submit">Add a Meal</button>
                                    <button type ="button" onClick={(e) => { return setFormIsShown(false), e.stopPropagation()}}>Cancel</button>
                                </form>
                            )}
                <strong>{dish.name} </strong>
               
                <span>{meal.name}, {meal.time}{meal.tod}</span>
                
            </div>
            <br></br>
            <br></br>
            <br></br>
        </li>
    )
}

export default FoodCard