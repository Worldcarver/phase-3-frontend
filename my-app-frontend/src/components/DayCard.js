import React from "react";


function DayCard({ day }) {

    return (
        <li className="card">
            <div className="cardimage">
                <span className="price"></span>
                <img src={"temp"} alt={"temp"} />
            </div>
            <div className="details">
                {/* {favorited ? (
                    <button onClick ={handleFavorited} className="emoji-button favorite active">★</button>
                ) : (
                    <button onClick ={handleFavorited} className="emoji-button favorite">☆</button>
                )} */}
                <strong>{day.name}</strong>
                <span></span>
            </div>
        </li>
    )
}
export default DayCard