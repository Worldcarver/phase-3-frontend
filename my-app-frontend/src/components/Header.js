import React, {useState, useEffect} from "react"


function Header(){

    const [days, setDays] = useState([])
    useEffect(() =>{
        fetch(`http://localhost:9292/days`)
        .then(res=>res.json())
        .then(data => setDays(data))
      }, [])
    
    const dayList = days.map((day) =>
    <li key= {day.id}>{day.name}</li>
    )

    return(
        <ul className="daylist">
            {dayList}       
        </ul>
    )
}
export default Header