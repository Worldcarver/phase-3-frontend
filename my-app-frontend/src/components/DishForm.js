import React, {useState} from "react";


// const DISH_URL = "http://localhost:9292/dishes";
// const initialNewDish = {
//   name: '',
//   img: '',
//   food: '', 
//   day_id: "",
//   meal_id: ""
// };



function DishForm ({ meals, days, dishes }) {

        const [newDish, setNewDish] = useState([]);

        const mealNames = meals.map((meal) =>
    <option value={meal.id}>{meal.name}</option>
    )
    const mealTimes = meals.map((meal) =>
    <option value={meal.id}>{meal.time}</option>
    )
    const mealTimesOfDay = meals.map((meal) =>
    <option value={meal.id}>{meal.tod}</option>
    )
    const daysOf = days.map((day) =>
    <option value={day.id}>{day.name}</option>
    )
        function handleChange(e) {
          setNewDish((currentNewDishState) => ({
            ...currentNewDishState,
            [e.target.name]: e.target.value,
          }));
        }
        // function handleSubmit(e) {
        //   e.preventDefault()
        //   fetch("http://localhost:9292/dishes", {
        //       method: "POST",
        //       headers: {
        //           "Content-Type": "application/json",
        //       },
        //       body: JSON.stringify({
        //           food: dish.food,
        //           name: dish.name, 
        //           day_id: dish.day_id,
        //           meal_id: dish.meal_id,
        //           img: dish.img
        //       }),
        //   })
        //   .then(r => r.json())
        //   .then(newDish => setNewDish([newDish, ...dishes]))
        // }
        // function handleSubmit(e) {
        //     e.preventDefault();
        
        //     fetch(DISH_URL, {
        //       method: "POST",
        //       headers: {
        //         "Content-Type": "application/json",
        //       },
        //       body: JSON.stringify(newDish),
        //     })
        //       .then((resp) => resp.json())
        //       .then((data) => setDishes((currentDish) => [...currentDish, data]));
        
        //     setNewDish(initialNewDish);
        //   }
          return (
            <div className="new-dish-form">  
              <h2>Add a New Dish</h2>
              {/* onSubmit={handleSubmit} */}
              <form>
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
                <select value = {meals.id}>
                   {mealTimes}
                </select>
                <select value = {meals.id}>
                    {mealTimesOfDay}
                </select>
                <select value = {days.id}>
                   {daysOf}
                </select>
                <button type="submit">Add Dish</button>
              </form>
            </div>
          );
        
}



export default DishForm