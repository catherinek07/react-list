import React,{useState} from 'react'
import {BiSearch,BiCaretDown, BiCheck} from "react-icons/bi"
function DropDown({toggleSort, orderBy, onOrderChange, sortBy, onSortChange}){
   if (!toggleSort){return null}
    return(
        <ul>
            <li onClick ={()=>onSortChange('petName')}>Child Name {(sortBy==='childName' && <BiCheck />)}</li>
            <li onClick ={()=>onSortChange('ownerName')}>Caretaker Name {(sortBy==='ownerName' && <BiCheck />)}</li>
            <li onClick ={()=>onSortChange('aptDate')}>Date {(sortBy==='aptDate' && <BiCheck />)}</li>
            <li onClick ={()=>onOrderChange('asc')}>Increasing {(orderBy==='aptDate' && <BiCheck />)}</li>
            <li onClick ={()=>onOrderChange('dsc')}>Decreasing {(orderBy==='aptDate' && <BiCheck />)}</li>
        </ul>
    )
}
function Search({query,onQueryChange, orderBy, onOrderChange, sortBy, onSortChange}){
    const [toggleSort, setToggleSort] = useState(false)
    return(
        <div id="search">
            <p>
            <BiSearch />
            <input type="text" 
            value={query}
            onChange={
                (event)=>{onQueryChange(event.target.value)}
            }/>
            <button type="button" 
            onClick={()=>{setToggleSort(!toggleSort)}}>
                Order <BiCaretDown /></button>
            <DropDown
            toggleSort= {toggleSort}
            orderBy = {orderBy}
            sortBy = {sortBy}
            onOrderChange = {myOrder => onOrderChange(myOrder)}
            onSortChange={mySort => onSortChange(mySort)}
            />
            </p>
        </div>
        

    )
}

export default Search