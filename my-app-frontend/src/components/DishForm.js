import React, {useState} from "react";


const DISH_URL = "http://localhost:9292/dishes";
const initialNewDish = {
  id: 0,
  name: '',
  img: '',
  food: '', 
  day_id: '',
  meai_id: ''
};

function DishForm ({ setDishes }) {

        const [newDish, setNewDish] = useState(initialNewDish);
      
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
                  //step="0.01"
                  placeholder="Image URL"
                  value={newDish.img}
                  onChange={handleChange}
                />
                <button type="submit">Add Dish</button>
              </form>
            </div>
          );
        
}



export default DishForm