import React,{useState} from 'react'
import { BiCalendarPlus } from "react-icons/bi"
function AddWrite({toggleForm}){
    if (!toggleForm){return null}
    return(
        <>
        <ul>
                <li><label htmlFor="userName">Name of Caretaker: </label><input type="text" id="userName" /></li>
                <li><label htmlFor="userChildren">Name of Child: </label><input type="text" id="userChildren" /></li>
                <li><label htmlFor="userDate">Day of Appointment: </label><input type="text" id="userDate" /></li>
                <li><label htmlFor="userTime">Time of Appointment: </label><input type="text" id="userTime" /></li>
                <li><label htmlFor="userDes">Other Details: </label><textarea cosl="30" rows="10" placeholder="More details" id="userDes"/></li>
            </ul>
            <p>
                <button type="submit">Submit</button>
            </p>
        </>
    )
}
function AddAppointment(){
    const[toggleForm, setToggleForm] = useState(false)
    return(
        <div id="appoint">
            <h4 onClick={()=>{setToggleForm(!toggleForm)}}>Create an Appointment<BiCalendarPlus /></h4>
            <AddWrite 
            toggleForm={toggleForm}/>
        </div>
    )
}

export default AddAppointment