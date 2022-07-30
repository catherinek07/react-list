import { BiCalendarPlus } from "react-icons/bi"
function AddAppointment(){
    return(
        <div id="appoint">
            <h4>Create an Appointment<BiCalendarPlus /></h4>
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
        </div>
    )
}

export default AddAppointment