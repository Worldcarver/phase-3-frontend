import React, {useState} from "react";


// const DISH_URL = "http://localhost:9292/dishes";
// const initialNewDish = {
//   name: '',
//   img: '',
//   food: '', 
//   day_id: "",
//   meal_id: ""
// };



function DishForm ({ onAddDish }) {

        // const [newDish, setNewDish] = useState([]);

    //     const mealNames = meals.map((meal) =>
    // <option value={meal.id}>{meal.name}</option>
    // )
    // const mealTimes = meals.map((meal) =>
    // <option value={meal.id}>{meal.time}</option>
    // )
    // const mealTimesOfDay = meals.map((meal) =>
    // <option value={meal.id}>{meal.tod}</option>
    // )
    // const daysOf = days.map((day) =>
    // <option value={day.id}>{day.name}</option>
    // )
    const [formData, setFormData] = useState({
      name: "",
      food: "",
      img: "",
      meal_id: 1,
      day_id: 1
    });

  function handleChange(e){
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  console.log(formData)};








        // function handleChange(e) {
        //   setNewDish((currentNewDishState) => ({
        //     ...currentNewDishState,
        //     [e.target.name]: e.target.value,
        //   }));
        // }
        function handleSubmit(e) {
          e.preventDefault()
          fetch("http://localhost:9292/dishes", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({
               ...formData
              }),
          })
          .then(r => r.json())
          .then(newDish => onAddDish(newDish));
          setFormData({
            name: "",
            food: "",
            img: "",
            meal_id: 1,
            day_id: 1
        })
        }
      
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
              
              <form onSubmit={handleSubmit} >
                <input
                  type="text"
                  name="name"
                  placeholder="Dish Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="food"
                  placeholder="Description"
                  value={formData.food}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="img"
                  placeholder="Image URL"
                  value={formData.img}
                  onChange={handleChange}
                />
                <select name = "meal_id" value = {formData.meal_id} onChange={handleChange}>
                    {/* {mealNames} */}
                    <option value = "1">Breakfast</option>
                    <option value = "2">Lunch</option>
                    <option value = "3">Dinner</option>
                </select>
                {/* <select value = {formData.id}>
                   {mealTimes}
                </select>
                <select value = {formData.meal_id}>
                    {mealTimesOfDay}
                </select> */}
                <select name = "day_id" value = {formData.day_id} onChange={handleChange}>
                   {/* {daysOf} */}
                  
                   <option value = "1">Monday</option>
                   <option value = "2">Tuesday</option>
                   <option value = "3">Wednesday</option>
                   <option value = "4">Thursday</option>
                   <option value = "5">Friday</option>
                   <option value = "6">Saturday</option>
                   <option value = "7">Sunday</option>
                </select>
                <button type="submit">Add Dish</button>
              </form>
            </div>
          );
        
          }
        


export default DishForm