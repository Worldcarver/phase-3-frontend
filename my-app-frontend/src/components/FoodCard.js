import React, {useEffect, useState} from 'react'



function FoodCard({ dish, deleteDish }) {
    const [meal, setMeal] = useState([])
    const [isShown, setIsShown] = useState(false)
    useEffect(() =>{
        fetch(`http://localhost:9292/dishes/${dish.id}/meal`)
          .then(res => res.json())
          .then(data => setMeal(data))
      }, [])

    
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
                        <button className='editbutton'>✏️</button>
                    
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