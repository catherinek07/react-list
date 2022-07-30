import React,{useState,useEffect,useCallback} from 'react';
import ReactDOM from 'react-dom/client';
import AddAppointment from './components/AddAppointment';
import AddInfo from './components/AddInfo';
import Search from './components/Search';

import appointData from './data.json'

import './index.css'
import {BiAt} from "react-icons/bi"
import {BiArchive} from "react-icons/bi"

function App(){
  return(
    <article>
      <h3>
        Book an Appointment <BiArchive />
      </h3>
      <AddAppointment />
      <Search />
      <div class="list">
        <ul>
          {appointData.map(
            (appointment) =>
            (<AddInfo key={appointment.id} appointment={appointment} />)
          )}
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