import React,{useState,useEffect,useCallback} from 'react'
import ReactDOM from 'react-dom/client'

// 컴포넌트 import
import AddApointment from './components/AddAppointment'
 import AddInfo from './components/AddInfo'
 import Search from './components/Search'

// 목업
// import appointData from './data.json'

// 소스파일
import './index.css'
import { BiArchive } from "react-icons/bi";

function App(){
  // state
  // list
  const [appointList,setAppointList] = useState([])
  //  search

// callBack
const fetchData = useCallback(
  ()=>{
    fetch('./data.json')
    .then(response => response.json())
    .then(data => setAppointList(data))
  },[])

// useEffect
useEffect(()=>{fetchData()},[fetchData])

  return (
    <article>
      <h3><BiArchive />
      welcome</h3>
      <AddApointment /> 
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
               />) )
          }
      </ul>
      </div>
    </article>
  )
}


// 출력
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)