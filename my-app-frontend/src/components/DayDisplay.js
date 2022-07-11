import React from "react";
import DayCard from "./DayCard"

function DayDisplay({days}){
    return(
        <div className ="ui four column grid">
            <ul className="row">
                {days.map((day) =>(
                    <DayCard key={day.id} day={day}/>
                ))}
            </ul>
        </div>
    )
}

export default DayDisplay