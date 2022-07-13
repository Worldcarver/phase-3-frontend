import React, {useState} from "react";


const DISH_URL = "http://localhost:9292/dishes";
const initialNewDish = {
  id: 0,
  name: '',
  img: '',
  food: '', 
  day_id: 0,
  meal_id: 0
};

function DishForm ({ setDishes, meals, days }) {

        const [newDish, setNewDish] = useState(initialNewDish);

        const mealNames = meals.map((meal) =>
    <option key= {meal.id}>{meal.name}</option>
    )
    const mealTimes = meals.map((meal) =>
    <option key= {meal.id}>{meal.time}</option>
    )
    const mealTimesOfDay = meals.map((meal) =>
    <option key= {meal.id}>{meal.tod}</option>
    )
    const daysOf = days.map((day) =>
    <option key= {day.id}>{day.name}</option>
    )
        function handleChange(e) {
          setNewDish((currentNewDishState) => ({
            ...currentNewDishState,
            [e.target.name]: e.target.value,
          }));
        }
        function handleSubmit(e) {
            e.preventDefault();
        
            fetch(DISH_URL, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newDish),
            })
              .then((resp) => resp.json())
              .then((data) => setDishes((currentDish) => [...currentDish, data]));
        
            setNewDish(initialNewDish);
          }
          return (
            <div className="new-dish-form">  
              <h2>Add a New Dish</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Dish Name"
                  value={newDish.name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="food"
                  placeholder="Description"
                  value={newDish.food}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="img"
                  placeholder="Image URL"
                  value={newDish.img}
                  onChange={handleChange}
                />
                <select>
                    {mealNames}
                </select>
                <select>
                   {mealTimes}
                </select>
                <select>
                    {mealTimesOfDay}
                </select>
                <select>
                   {daysOf}
                </select>
                <button type="submit">Add Dish</button>
              </form>
            </div>
          );
        
}



export default DishForm