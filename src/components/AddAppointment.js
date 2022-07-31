import React,{useState} from 'react'
import { BiCalendarPlus } from "react-icons/bi"
function AddWrite({toggleForm, formData, setFormData, formDataPublish}){
    if (!toggleForm){return null}
    return(
        <>
        <ul>
                <li><label htmlFor="userName">Name of Caretaker: </label><input type="text" id="userName" 
                onChange={(event) => {
                    setFormData({...formData,ownerName:event.target.value})
                }}/></li>
                <li><label htmlFor="userChildren">Name of Child: </label><input type="text" id="userChildren"
                onChange={(event) => {
                    setFormData({...formData,petName:event.target.value})}} /></li>
                <li><label htmlFor="userDate">Day of Appointment: </label><input type="text" id="userDate" 
                onChange={(event) => {
                    setFormData({...formData,aptDate:event.target.value})}}/></li>
                <li><label htmlFor="userTime">Time of Appointment: </label><input type="text" id="userTime" 
                onChange={(event) => {
                    setFormData({...formData,aptTime:event.target.value})
                }}/></li>
                <li><label htmlFor="userDes">Other Details: </label><textarea cosl="30" rows="10" placeholder="More details" id="userDes"
                 onChange={(event) => {
                    setFormData({...formData,aptTime:event.target.value})
                }}></textarea></li>
            </ul>
            <p>
                <button type="submit" onClick={formDataPublish}>Submit</button>
            </p>
        </>
    )
}
function AddAppointment({onSendAppointment, lastId}){
    const clearData = {
        petName: "",
        ownerName:"",
        aptNotes:"",
        aptDate:""
    }
    const[toggleForm, setToggleForm] = useState(false)
    const [formData, setFormData] = useState(clearData)
    function formDataPublish(){
        const appointmentInfo = {
            id: lastId + 1,
            petName: formData.petName,
            ownerName: formData.ownerName,
            aptNotes: formData.aptNotes,
            aptDate: formData.aptDate + ' '+ formData.aptTime
        }
        onSendAppointment(appointmentInfo)
                setToggleForm(!toggleForm)
                setFormData(clearData)
        
    }
    return(
        <div id="appoint">
            <h4 onClick={()=>
            {
                setToggleForm(toggleForm)
                }}>Create an Appointment<BiCalendarPlus /></h4>
            <AddWrite 
            toggleForm={toggleForm}
            formData={formData}
            formDataPublish={formDataPublish}
            setFormData={setFormData}
            />
        </div>
    )
}

export default AddAppointment