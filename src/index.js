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
const [query, setQuery]= useState('')
const [sortBy, setSortBy]= useState('petName')
const [orderBy, setOrderBy] = useState('asc')

const filterAppointments=appointList.filter(
    item =>{return(
    item.petName.toLowerCase().includes(query.toLowerCase())||
    item.ownerName.toLowerCase().includes(query.toLowerCase())||
    item.aptNotes.toLowerCase().includes(query.toLowerCase())
  )}
).sort(((a,b)=>{
  let order = (orderBy === 'asc' ? 1:-1)
  return(
    a[sortBy].toLowerCase() < b[sortBy].toLowerCase? -1 * order :1*order
  )
})
)

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
      <AddApointment 
      onSendAppointment = {myAppointment=> setAppointList([...appointList, myAppointment])}
      lastId = {
        appointList.reduce((max,item)=> Number(item.id) > max ? Number(item.id): max, 0)
      }
      /> 
      <Search 
      query={query}
      onQueryChange = {myQuery =>setQuery(myQuery)}
      sortBy={sortBy}
      onSortChange={mySort=>setSortBy(mySort)}
      orderBy={orderBy}
      onOrderChange={myOrder=>setOrderBy(myOrder)}
      />
      <div id="list">
      <ul>
         {filterAppointments.map( 
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