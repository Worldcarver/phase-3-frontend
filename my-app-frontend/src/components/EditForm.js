import React, {useState} from "react";
import FoodCard from "./FoodCard";



function EditForm({ onEditDish }){

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
  
    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:9292/dishes", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
             ...formData
            }),
        })
        .then(r => r.json())
        .then(onEditDish);
        setFormData({
          name: "",
          food: "",
          img: "",
          meal_id: 1,
          day_id: 1
      })
      }
      return (
        <div className="new-dish-form">  
          <h2>Edit a Dish</h2>
          
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
            <button type="submit">Edit Dish</button>
          </form>
        </div>
      );
    

}





export default EditForm