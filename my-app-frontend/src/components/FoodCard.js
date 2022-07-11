import React from 'react'


function FoodCard({ dish }) {
    return (
        <li className="card">
            <div className="cardimage">
                <span className="dish"></span>
                <img src={"temp"} alt={dish.name} />
            </div>
            <div className="details">
                {/* {favorited ? (
                    <button onClick ={handleFavorited} className="emoji-button favorite active">★</button>
                ) : (
                    <button onClick ={handleFavorited} className="emoji-button favorite">☆</button>
                )} */}
                <strong>{dish.name}</strong>
                <span>{dish.food}</span>
                <span></span>
            </div>
        </li>
    )





}




export default FoodCard