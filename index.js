import React,{useState,useEffect,useCallback} from 'react';
import ReactDOM from 'react-dom/client';
import AddAppointment from './components/AddAppointment';
import AddInfo from './components/AddInfo';
import Search from './components/Search';
//import appointData from '/.data.json'
import './index.css'
import {BiArchive} from "react-icons/bi"

function App(){
  //state //list
  const [appointList, setAppointList] = useState([])
  //callBack
  const fetchData = useCallback(
    ()=>{
      fetch('./data.json')
      .then(response => response.json())
      .then(data => setAppointList(data))
    },[])

    //useEffect
  useEffect(()=>{fetchData()},[fetchData])
  return(
    <article>
      <h3>
        Book an Appointment <BiArchive />
      </h3>
      <AddAppointment />
      <Search />
      <div id="list">
        <ul>
          {appointList.map(
            (appointment) =>
            (<AddInfo 
              key={appointment.id} 
              appointment={appointment} 
              onDeleteAppoint={
                appointmentId => setAppointList(appointList.filter(appointment => appointment.id !== appointmentId))
              }
              />))}
          
        </ul>
      </div>
    </article>
  )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)